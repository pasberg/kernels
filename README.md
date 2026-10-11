# Kärnor

Korta, källhänvisade kunskapskort på svenska, i stil med Deepstash. Kategorier: sömn, vanor, fokus, relationer, mental hälsa, kropp, lärande, historia, förebilder, naturvetenskap och finans.

Sajten är en enda sida (`index.html`) utan beroenden, förutom typsnittet Mona Sans från Google Fonts.

## Struktur

| Fil | Innehåll |
| --- | --- |
| `karnor.html` | Mallen: design, layout och programkod. Innehåller de första 29 korten. |
| `src/ideas_*.js` | Övriga kort (rubrik, sammanfattning, kärna, källa, kategori). |
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
