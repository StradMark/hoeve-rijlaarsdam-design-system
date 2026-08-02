/* Zet de markdown van dit project om naar HTML in de huisstijl. Eén converter voor
   wijzigingen.html en readme.html, zodat de .md-bestanden de enige bron blijven: leesbaar
   in de repo, netjes op het scherm. Ondersteunt alleen wat in deze bestanden voorkomt —
   koppen, opsommingen, tabellen, citaten, alinea's, en inline code, vet, cursief en links. */
(() => {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = s => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  const isRij = l => l.startsWith('|');
  const cellen = l => l.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  const scheiding = l => /^\|[\s:|-]+\|?$/.test(l);

  function render(md, opties) {
    const o = opties || {};
    const regels = md.split('\n');
    const uit = [];
    let lijst = null, tabel = null, citaat = null, alinea = null;
    const sluitLijst = () => { if (lijst) { uit.push('<ul>' + lijst.join('') + '</ul>'); lijst = null; } };
    const sluitAlinea = () => { if (alinea) { uit.push('<p>' + alinea.join(' ') + '</p>'); alinea = null; } };
    const sluitCitaat = () => { if (citaat) { uit.push('<blockquote>' + citaat.join(' ') + '</blockquote>'); citaat = null; } };
    const sluitTabel = () => {
      if (!tabel) return;
      const [kop, ...rest] = tabel;
      uit.push('<div class="tabelwrap"><table><thead><tr>' +
        kop.map(c => '<th>' + inline(c) + '</th>').join('') + '</tr></thead><tbody>' +
        rest.map(r => '<tr>' + r.map(c => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('') +
        '</tbody></table></div>');
      tabel = null;
    };
    const sluitAlles = () => { sluitAlinea(); sluitLijst(); sluitTabel(); sluitCitaat(); };

    for (const raw of regels) {
      const l = raw.trim();
      if (!l) { sluitAlles(); continue; }

      if (isRij(l)) {
        sluitAlinea(); sluitLijst(); sluitCitaat();
        if (scheiding(l)) continue;            // de streepjesregel onder de kop
        (tabel = tabel || []).push(cellen(l));
        continue;
      }
      sluitTabel();

      if (l.startsWith('> ')) { sluitAlinea(); sluitLijst(); (citaat = citaat || []).push(inline(l.slice(2))); continue; }
      sluitCitaat();

      if (/^#{1,6} /.test(l)) {
        sluitAlinea(); sluitLijst();
        const n = l.match(/^#+/)[0].length, tekst = l.replace(/^#+\s*/, '');
        if (n === 1 && o.skipH1) continue;      // de titel staat al in de kop van de pagina
        const tag = 'h' + Math.min(n + (o.skipH1 ? 0 : 0), 4);
        uit.push('<' + tag + '>' + inline(tekst) + '</' + tag + '>');
        continue;
      }
      if (/^[-*]\s/.test(l)) {
        sluitAlinea();
        (lijst = lijst || []).push('<li><i aria-hidden="true"></i><span>' + inline(l.slice(2)) + '</span></li>');
        continue;
      }
      /* Een opsommingsregel die doorloopt op de volgende regel hoort bij hetzelfde punt. */
      if (lijst && /^\s{2,}/.test(raw)) {
        lijst[lijst.length - 1] = lijst[lijst.length - 1].replace('</span></li>', ' ' + inline(l) + '</span></li>');
        continue;
      }
      if (/^---+$/.test(l)) { sluitAlles(); uit.push('<hr>'); continue; }
      sluitLijst();
      (alinea = alinea || []).push(inline(l));
    }
    sluitAlles();
    return uit.join('\n');
  }

  /* Haalt het bestand op en zet het in het doelelement. Lukt dat niet — bijvoorbeeld omdat
     de pagina van schijf wordt geopend — dan blijft de link naar het bestand zelf over. */
  function mountMarkdown(pad, doel, opties) {
    const el = typeof doel === 'string' ? document.querySelector(doel) : doel;
    if (!el) return;
    fetch(pad)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(md => { el.innerHTML = render(md, opties); })
      .catch(() => {
        el.innerHTML = '<div class="fout">Dit stuk kon niet worden geladen. Open <a href="' + pad +
          '">' + pad + '</a> direct.</div>';
      });
  }

  window.renderMarkdown = render;
  window.mountMarkdown = mountMarkdown;
})();
