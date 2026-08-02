One-line: what the form says after sending — sage for success, the field-error brick for failure.

```jsx
{sent
  ? <FormStatus title="Dank u, uw aanvraag is verstuurd"
      action={<Button tone="white" onClick={reset}>Nog een aanvraag</Button>}>
      Wij nemen binnen twee werkdagen contact met u op. Heeft u haast? Bel Roos op 06 - 58 98 59 63.
    </FormStatus>
  : <form onSubmit={send}>…</form>}

<FormStatus variant="error" title="Versturen is niet gelukt">
  Controleer uw internetverbinding en probeer het opnieuw, of mail ons direct op info@hoeverijlaarsdam.nl.
</FormStatus>
```

**No tick, no cross.** The brand has neither, and a green checkmark on a hoeve in the polder reads as
software. Success is the sage band; failure is the same brick as the field errors, so the whole form speaks
one colour language.

**Say what happens next**, not just that it worked. "Wij nemen binnen twee werkdagen contact op" is the
sentence a visitor actually wants; "Formulier verzonden" tells them nothing. On failure, say what to do —
retry, or the address to mail instead.

The panel announces itself: `role="status"` and polite for success, `role="alert"` and assertive for failure.
Replace the form with it rather than showing both, so focus and reading order land on the message.

One action at most. "Nog een aanvraag" or "Probeer opnieuw" — never a row of buttons.
