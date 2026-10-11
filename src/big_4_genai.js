  BIG.push({
    id: "B4", cat: "ai", ev: "starkt", type: "Fördjupning",
    title: "Generativ AI: så skapar maskiner text, bilder och ljud",
    body: "Generativ AI är system som skapar nytt innehåll i stället för att bara sortera eller känna igen det. På några år har de gått från forskningsprojekt till verktyg som miljontals människor använder. Här går vi igenom hur tekniken fungerar, vad den klarar, var gränserna går och vilka frågor den väcker.",
    core: "Generativ AI lär sig mönster ur enorma datamängder och skapar nytt utifrån dem. Den är kraftfull men inte ofelbar, och ansvaret för resultatet ligger kvar hos den som använder det.",
    src: "Goodfellow m.fl., 2014 · NeurIPS; Vaswani m.fl., 2017 · NeurIPS; Ho m.fl., 2020 · NeurIPS; Rombach m.fl., 2022 · CVPR; EU, 2024 · AI-förordningen"
  });
  BIGDEEP.B4 = [
    "# Vad generativ AI är",
    "Traditionell AI brukar klassificera: är det här e-postmeddelandet skräppost, visar bilden en katt eller en hund, kommer kunden att säga upp sitt abonnemang? Generativ AI gör något annat. Den skapar ett nytt meddelande, en ny bild eller ett nytt musikstycke som liknar de exempel den tränats på.",
    "Det som gör den intressant är bredden. Samma grundidéer används för text, bild, ljud, video, programkod och molekyler. Det finns inte en enda teknik, men två eller tre idéer återkommer: att lära sig en statistisk modell av hur data ser ut, och att sedan dra nya exempel ur den modellen.",
    "# Tidslinjen: från 2014 till idag",
    "Idén är gammal, men det var först med djupinlärning, och med mängder av data och beräkningskraft, som resultaten blev slående. År 2014 presenterade Ian Goodfellow och kollegor generative adversarial networks, GAN:er, där två nätverk tävlar: ett skapar förfalskningar och ett försöker avslöja dem. Det gav de första övertygande syntetiska ansiktena.",
    "År 2017 kom transformern, arkitekturen bakom i princip alla moderna språkmodeller. År 2020 visade OpenAI:s GPT-3 att en mycket stor språkmodell kunde skriva och svara på frågor utan särskild träning för varje uppgift, och samma år visade forskare att diffusionsmodeller kunde skapa bilder av hög kvalitet. Därefter gick det snabbt: bildgeneratorer 2021 och 2022, och i slutet av 2022 chattboten ChatGPT, som snabbt fick ett mycket stort antal användare. Sedan 2023 har modellerna också blivit multimodala, vilket innebär att de kan ta emot och skapa flera sorters data, som text, bild och ljud.",
    { fig: "gen_timeline", cap: "Några milstolpar. Listan är selektiv, och forskning pågick förstås hela tiden mellan årtalen." },
    "# Hur text skapas",
    "Språkmodeller är i grunden förutsägare. De tränas på enorma textmängder att gissa nästa token, en ordbit, utifrån de föregående. När de används skriver de text genom att välja en token i taget, och varje ny token blir en del av underlaget för nästa. Det är samma princip i en e-postassistent, en översättare och en kodhjälp. Nästa artikel i den här serien, om språkmodeller, går på djupet i hur det går till.",
    "# Hur bilder skapas",
    "De flesta moderna bildgeneratorer bygger på diffusion. Under träningen tar man riktiga bilder och lägger gradvis på brus, tills bilden är helt slumpmässig. Modellen får sedan lära sig att för varje steg ta bort lite av bruset. Vid användning går man åt andra hållet. Man börjar i rent brus och låter modellen steg för steg ta fram en bild, styrd av en textbeskrivning som omvandlats till tal.",
    { fig: "gen_diffusion", cap: "Diffusion i fem steg, från rent brus till bild. Bilderna är schematiska. Verkliga modeller arbetar med tusentals steg och miljontals bildpunkter." },
    "Textstyrningen sker genom att modellen tränas på stora samlingar av bilder med bildtexter. På så sätt lär den sig sambandet mellan ord och visuella drag, och kan sätta ihop kombinationer som inte funnits i träningsdata, som en astronaut på en häst.",
    "# Ljud, musik, video och mer",
    "Samma idéer fungerar på andra sorters data. Ljud kan göras om till sekvenser av ljudbitar eller till en bild av frekvenser över tid, och modeller kan då tränas att skapa tal, musik eller ljudeffekter. Röstkloning, där en modell lär sig härma en viss människas röst från några sekunders ljud, har blivit tillräckligt bra för att kunna lura människor. Video kräver att modellen håller reda på rörelse över tid, vilket är beräkningsmässigt tungt. Resultaten har förbättrats snabbt, men videomodeller har ofta problem med fysik och uthållighet i längre klipp.",
    { fig: "gen_modalities", cap: "Samma grundidé, olika datatyper. Skillnaderna ligger i vilka modelltyper som passar bäst för varje sorts data." },
    "Allt oftare kombineras förmågorna. Multimodala modeller kan titta på en bild och beskriva den, läsa ett diagram, höra en fråga och svara med tal. Forskare använder också generativa modeller för att föreslå proteiner och molekyler, där resultaten testas i laboratoriet.",
    "# Varför det fungerar: data, beräkning och skala",
    "En viktig insikt från de senaste åren är att prestandan för många typer av modeller förbättras förutsägbart när man ökar modellens storlek, mängden träningsdata och beräkningskraften. Forskare kallar det skalningslagar. Det betyder att en stor del av framstegen kommit av att man byggt större system, och att tillgången på data, chip och energi spelar stor roll.",
    "Det innebär också att kostnaderna är höga. Träning av de största modellerna kräver stora datorhallar, och även användningen kräver mycket beräkning när miljontals människor ställer frågor. Uppskattningarna av energiåtgången varierar mycket och beror på modell och metod, så siffror ska läsas med försiktighet, men det är en fråga som tas på allvar både av forskare och av regeringar.",
    "# Vad generativ AI är bra och dålig på",
    { list: [
      "Bra på: utkast och omskrivningar, sammanfattningar, översättning, att förklara begrepp, brainstorming, kodförslag och standarduppgifter där det finns många exempel.",
      "Mindre bra på: pålitliga fakta utan källor, exakt matematik och logik utan hjälpmedel, uppgifter som kräver att man håller reda på mycket information över lång tid, och allt som ligger långt utanför träningsdata.",
      "Riskabelt utan kontroll: medicinska, juridiska och ekonomiska råd, och allt där ett fel får allvarliga konsekvenser."
    ] },
    "Ett centralt problem är hallucinationer: modeller kan skapa påståenden, källor och detaljer som inte stämmer, och formulera dem med stor säkerhet. Därför behandlas generativ AI bäst som ett verktyg som ger förslag, inte som en källa som alltid har rätt.",
    "# Frågorna som väcks",
    "Tekniken väcker en rad frågor där svaren ännu inte är givna.",
    { list: [
      "Upphovsrätt. Modeller tränas på enorma mängder text, bilder och musik, ofta skapade av andra. Författare, konstnärer och bildbyråer har stämt flera bolag, och domstolar i olika länder har ännu inte enats om var gränsen går mellan lärande och kopiering.",
      "Falska bilder och röster. Det har blivit lätt att skapa trovärdiga förfalskningar, vilket kan användas till bedrägerier, trakasserier och desinformation. Tekniker för att märka innehåll och verktyg för att upptäcka det utvecklas, men ingen metod är tillförlitlig i alla lägen. Verktyg som försöker avgöra om en text är skriven av AI har visat sig opålitliga.",
      "Skevheter. Modellerna speglar sin träningsdata, inklusive stereotyper och obalanser.",
      "Arbetsmarknad. Studier visar att verktygen kan öka produktiviteten i vissa uppgifter, men hur det påverkar jobb och löner på sikt är oklart och debatteras.",
      "Lärande. Verktygen kan vara ett stöd, men också en genväg som minskar den egna ansträngningen. Tidiga studier tyder på att utformningen spelar stor roll.",
      "Reglering. EU:s AI-förordning trädde i kraft 2024 och införs stegvis. Den delar in system efter risk och ställer krav på bland annat transparens. Andra länder väljer andra vägar."
    ] },
    "# Tre sätt att generera",
    "Bakom de olika verktygen finns några återkommande metoder. Den första är autoregressiv generering: modellen skapar ett element i taget och låter varje nytt element bero på de tidigare. Så fungerar språkmodeller, men samma sak har prövats för bilder (en bildpunkt eller bildbit i taget) och ljud. Metoden är enkel och fungerar bra när man har gott om data, men den kan vara långsam eftersom varje steg väntar på det förra.",
    "Den andra är GAN:er, där en generator och en granskare tränas mot varandra. Generatorn försöker skapa bilder som granskaren tror är riktiga, och granskaren försöker bli bättre på att avslöja dem. Det gav skarpa bilder tidigt, men träningen kan vara instabil, och modellen kan nöja sig med att skapa ett fåtal typer av bilder, vilket kallas att den kollapsar. Idag används GAN:er mer i specialfall än som huvudmetod.",
    "Den tredje är diffusion, som beskrivits ovan. Den är stabil att träna och ger stor variation, men kräver många steg vid användning, så forskare arbetar med sätt att få fram bilder på färre steg. I praktiken kombineras ofta flera idéer i samma system, och gränserna mellan metoderna blir mindre skarpa med tiden.",
    "# Hur det ser ut i vardagen",
    "För att göra det konkret kan man titta på några områden där tekniken redan används, med reservation för att läget ändras snabbt.",
    { list: [
      "Skrivande och kontor. Utkast till e-post, sammanfattning av långa dokument, mötesanteckningar och omformulering till ett annat tonläge.",
      "Programmering. Kodförslag medan man skriver, förklaring av okänd kod, förslag på tester. Studier har visat tidsvinster på avgränsade uppgifter, men kodens kvalitet behöver granskas.",
      "Utbildning. Förklaringar på olika nivåer, övningsfrågor och återkoppling på texter. Här finns både möjligheter och risken att eleven hoppar över själva tänkandet.",
      "Kreativt arbete. Skisser, idéer, ljud och bildbearbetning. Många yrkesverksamma använder det för att prova många varianter snabbt, och gör sedan det slutliga arbetet själva.",
      "Vetenskap. Förslag på proteinstrukturer, molekyler och material, där förslagen testas i laboratoriet innan någon litar på dem.",
      "Kundtjänst och information. Chattbotar som svarar på vanliga frågor, med risk för felaktiga svar om de inte kopplas till rätt källor."
    ] },
    "# Vanliga missförstånd",
    "Eftersom tekniken är ny och resultaten ibland verkar magiska uppstår lätt missuppfattningar. Några av de vanligaste är värda att reda ut.",
    { list: [
      "Missförstånd: modellen slår upp svaret i en databas. Verkligheten: svaret skapas på nytt varje gång. Det kan i vissa fall återge delar av träningsdata, men det är inte hur den normalt fungerar.",
      "Missförstånd: om svaret låter säkert är det sant. Verkligheten: tonen säger ingenting om riktigheten. Modellen är tränad att låta flytande.",
      "Missförstånd: modellen vet vad den inte vet. Verkligheten: den har ofta dålig uppfattning om sina egna gränser, även om det blir bättre.",
      "Missförstånd: AI-detektorer kan avgöra om en text är skriven av AI. Verkligheten: sådana verktyg har visat sig opålitliga och kan felaktigt anklaga människor.",
      "Missförstånd: AI är objektiv. Verkligheten: den speglar sina data och de val som gjorts när den utvecklades."
    ] },
    { box: "Prova själv", text: "Ta en text du själv skrivit och be en språkmodell sammanfatta den i tre punkter. Jämför med vad du själv anser vara det viktigaste. Det säger dig mycket om var verktyget är starkt och var det missar nyanser." },
    "# Så använder du det klokt",
    { list: [
      "Var tydlig. Beskriv uppgiften, målgruppen och formatet, och ge gärna exempel på vad du vill ha.",
      "Iterera. Se det första svaret som ett utkast. Be om ändringar och jämför varianter.",
      "Kontrollera. Granska fakta, siffror och källor, särskilt när det du skapar ska användas av andra.",
      "Skydda känsliga uppgifter. Läs hur tjänsten hanterar det du skriver in, och undvik att dela personliga eller konfidentiella uppgifter.",
      "Var öppen. Berätta när du använt AI där det är relevant, och följ de regler som gäller på din arbetsplats eller skola.",
      "Behåll ditt eget tänkande. Använd verktyget för att utmana och förklara, inte för att ersätta din egen bedömning."
    ] },
    "# Sammanfattning",
    { list: [
      "Generativ AI skapar nytt innehåll genom att lära sig mönster i stora mängder data.",
      "Text skapas oftast av transformer-baserade språkmodeller som förutsäger nästa token, och bilder av diffusionsmodeller som tar bort brus steg för steg.",
      "Framstegen kommer till stor del av större modeller, mer data och mer beräkning, vilket också ger kostnader och energifrågor.",
      "Modellerna kan hallucinera och spegla skevheter, så resultaten behöver kontrolleras.",
      "Frågor om upphovsrätt, förfalskningar, arbetsmarknad och reglering är fortfarande öppna.",
      "Det klokaste är att använda verktygen som stöd, med tydliga instruktioner och egen granskning."
    ] }
  ];
