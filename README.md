# Kärnor

Korta, källhänvisade kunskapskort på svenska, i stil med Deepstash. Kategorier: sömn, vanor, fokus, relationer, mental hälsa, kropp, lärande, historia, förebilder, naturvetenskap och finans.

Sajten är en enda sida (`index.html`) utan beroenden, förutom typsnittet Mona Sans från Google Fonts.

## Funktioner

- Två lägen: Små kärnor (ett kort på en minut, med längre text) och Stora kärnor (fördjupande artiklar på 10–15 minuter med innehållsförteckning och diagram). Nio stora kärnor: Fusion, Teknisk analys, VO₂max, Generativ AI, AI och språkmodeller samt porträtten Turing, Lovelace, Shannon och Hinton.
- Filter per kategori och stödnivå, sökning och en längre text per kort.
- Spara och markera som läst. Första gången frågar sidan efter ett namn, som sparas i en cookie (ett år). Sparade och lästa kort lagras per namn i webbläsarens localStorage och laddas när namnet finns i cookien. Blockeras cookies används localStorage som reserv. Lästa kort hamnar sist och blir utgråade, och går att avmarkera.
- Datan finns bara i den webbläsare där den skapades. För synk mellan enheter krävs en databas.

## Struktur

| Fil | Innehåll |
| --- | --- |
| `karnor.html` | Mallen: design, layout och programkod. Innehåller de första 29 korten. |
| `src/ideas_*.js` | Övriga kort (rubrik, sammanfattning, kärna, källa, kategori). |
| `src/big_*.js` | Stora kärnor. `big_0_figs.js` och `big_0b_figs.js` har diagrammen (SVG), övriga filer en artikel var (`BIG.push` och `BIGDEEP`). |
| `src/deep_*.js` | Den längre texten per kort ("Läs mer"). Varje kort har fem avsnitt. |
| `build.py` | Sätter ihop allt till `index.html`. |

## Bygga

```
python3 build.py
```

Öppna sedan `index.html` i webbläsaren. GitHub Actions bygger om `index.html` automatiskt när något under `src/` eller `karnor.html` ändras på `main`.

## Lägga till ett kort

1. Lägg ett objekt i en `IDEAS.push(...)` i valfri `src/ideas_*.js`: `id`, `cat`, `ev`, `type`, `title`, `body`, `core`, `src`.
2. Lägg en längre text med samma `id` i en `src/deep_*.js` (`Object.assign(DEEP, { ... })`) med exakt fem rubriker (`"# Rubrik"`).
3. Bygg och kontrollera.

## Publicera

Slå på GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Obs om innehållet

Studier, siffror och källor är skrivna utan att varje uppgift är kontrollerad mot originalet. Verifiera dem innan sajten publiceras offentligt. Korten är förenklade sammanfattningar och ersätter inte medicinsk, psykologisk eller finansiell rådgivning.

## Lägga till en stor kärna

1. Skapa `src/big_N_namn.js` med `BIG.push({ id: "B4", cat, ev, type, title, body, core, src })` och `BIGDEEP.B4 = [...]`.
2. Innehållet är en lista med block: `"# Rubrik"`, vanliga stycken, `{ fig: "nyckel", cap: "bildtext" }`, `{ list: [...] }` och `{ box: "Titel", text: "..." }`.
3. Lägg diagram som `FIGS.nyckel = \`<svg ...>\`` i `big_0_figs.js`. Använd klasserna `ln`, `thin`, `acc`, `fillc`, `fillt`, `mut`, `sm`, `b` så att färgerna följer ljust och mörkt läge.

## Bokidéer

Kort som bygger på en känd bok har fältet `book` (till exempel `book: "Sapiens · Yuval Noah Harari, 2011"`). Kortet får då en liten markering "Bok" och raden "Idé från boken …". Evidensmärkningen (`ev`) och källraden (`src`) gäller forskningen bakom idén, inte boken, så en populär bok kan få "blandat" eller "tidigt". Korten finns i `src/ideas_books.js` och de längre texterna i `src/deep_5g.js`. Texterna är egna sammanfattningar utan citat.

## Beteendevetenskap

Kategorin `beteende` handlar om hur människor beter sig i olika situationer (grupper, förhandling, konflikt, bedömning av andra) och hur man kan agera. Korten finns i `src/ideas_beh.js` (id `be1`–`be12`) och de längre texterna i `src/deep_5h.js`.

## Betyg

Varje kort kan betygsättas med fem ansikten (☹️ 🙁 🙂 😃 🤩) under frågan "Var kärnan intressant och upplysande?". Betyget sparas per namn (`votes` i `karnor-v2`). På kortet visas snittbetyget, avrundat till närmaste ansikte, och antal röster. Olästa kort sorteras efter snittbetyg (högst först), därefter lästa kort. Snittet räknas över alla namn som finns i den här webbläsaren. I Artifact-versionen delas betygen mellan besökare via plattformens databas. På en egen sajt görs det med den lilla databasen i `backend/` (se `backend/README.md`) och inställningen `KARNOR_API` i `karnor.html`. Utan den räknas betygen lokalt.

## Hälsning

När ett namn är satt visas under titeln en hälsning (God morgon/Hej/God kväll) med namnet och hur många kärnor man läst.

## Bilder på småkärnorna

Varje småkärna har en banner överst med en egen SVG-illustration (`src/art_0.js`, `ART[id]`). Illustrationerna följer kategorins färger och fungerar i ljust/mörkt läge. Foton stöds via `PHOTO` i `karnor.html` (`{url, credit}`); bilden läggs över illustrationen och försvinner av sig själv om den inte kan laddas. Hittills finns ett verifierat foto (Marie Curie, public domain).
