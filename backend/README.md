# Röstdatabas för GitHub Pages

Sajten sparar betyg lokalt i webbläsaren. För betyg som delas mellan alla besökare behövs en liten databas. Den här mappen innehåller en gratis variant på Cloudflare (Worker + D1). I Artifact-versionen på claude.ai behövs ingenting av detta, där används plattformens egen databas.

1. Skapa ett gratis konto på cloudflare.com och installera verktyget: `npm i -g wrangler`, sedan `wrangler login`.
2. Skapa databasen: `wrangler d1 create karnor-votes`. Kopiera `database_id` till `wrangler.toml`.
3. Skapa tabellen: `wrangler d1 execute karnor-votes --remote --file=schema.sql`.
4. Publicera API:et: `wrangler deploy`. Du får en adress som `https://karnor-votes.<ditt-namn>.workers.dev`.
5. Öppna `karnor.html` i repots rot och sätt `var KARNOR_API = "https://karnor-votes.<ditt-namn>.workers.dev";`. Pusha, så bygger GitHub om `index.html`.

Så fungerar det: varje webbläsare får ett slumpat klient-id och skickar sina betyg (per namn) till `PUT /votes/<klient-id>`. `GET /votes` returnerar summa och antal per kort, och sajten visar snittet. Servern kontrollerar format och storlek.

Begränsning: det finns ingen inloggning, så den som vill kan rösta flera gånger genom att byta webbläsare. För en liten sajt är det oftast acceptabelt. Skulle det bli ett problem kan man lägga till hastighetsbegränsning i Cloudflare.
