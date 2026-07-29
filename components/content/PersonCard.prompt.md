One-line: a portrait with a name — with the dark "Boek mij" bar for hostesses who can be hired, without it for team members you only introduce.

```jsx
<PersonCard image="/assets/photo-gastvrouwen-koetshuis.jpg" name="Roos Rijlaarsdam"
  role="Eigenaresse · feesten en meetings" phone="06 - 58 98 59 63"/>

<PersonCard image={hostess} name="Sanne" role="Gastvrouw" bookLabel="Boek mij" onBook={openForm}/>
```

Same anatomy as `RoomCard` (square photo, dark action bar, gold caps caption) but 4:5 instead of 4:3 and a single action instead of two — a person gets one verb. Leave `onBook` off and the bar disappears entirely.

## Op een gekleurde band

Goud op sage haalt 1,3:1 en is onleesbaar. Zet daarom `tone="onSage"` (of `"onDeep"`) zodra de kaart op een gekleurde sectie staat: de naam wordt dan wit en de rolregel crème. Op wit en crème blijft `tone="light"` met de naam in goud.

```jsx
<PersonCard tone="onSage" image={hostess} name="Gastvrouw" onBook={openForm}/>
```
