# AIuda PUML Mini — vision

En lättviktsvariant av [AIuda PUML](https://github.com/Gnossan/aiuda-puml): en app där man kan skriva PlantUML-kod, se en live-förhandsgranskning av diagrammet, och be en inbyggd AI-assistent generera eller förklara diagram utifrån en textbeskrivning.

Detta är en del av ett jämförelseprojekt: samma vision-MVP byggs parallellt i två repon. **Det här repot** byggs av ett CPU-baserat modellteam (gemma4 + qwen3.6), oberoende av varandra via egna issues. Det andra repot, [aiuda-puml-mini-gpu](https://github.com/Gnossan/aiuda-puml-mini-gpu), byggs av en GPU-baserad modell ensam. Koden ska inte kopieras mellan reponen eller från originalet — bara visionen återskapas, oberoende, i båda.

## Vad appen ska kunna göra

1. Ta emot PlantUML-källkod och rendera den till en bild (SVG eller PNG).
2. Visa en editor där man skriver/redigerar PlantUML-kod, med en förhandsgranskning som uppdateras.
3. Ha ett AI-chattgränssnitt där man kan:
   - Beskriva ett diagram i fritext och få genererad PlantUML-kod.
   - Be AI:n förklara ett befintligt diagram.
4. Stödja minst tre diagramtyper: sekvensdiagram, klassdiagram, use case-diagram.
5. Kunna exportera det renderade diagrammet som en fil (SVG eller PNG).

## Vad som INTE krävs i denna version

- Ingen specifik plattform är obligatorisk (webapp, CLI eller skrivbordsapp — fritt val).
- Ingen draw.io-export.
- Ingen automatisk uppdateringsmekanism.
- Inget krav på att bundla en egen Java-runtime — använd valfri tillgänglig PlantUML-renderingsmetod (lokalt installerad, extern tjänst, eller bibliotek).
- Ingen autentisering/inloggning.

## Tekniskt fritt val

Välj själva vilken teknikstack som passar bäst (språk, ramverk, AI-leverantör för chattfunktionen). Dokumentera valet i README när det är gjort.

## Arbetssätt

Arbetet drivs via GitHub Issues, en avgränsad funktion per issue. Issues i det här repot är märkta med vilken modell (`gemma4` eller `qwen3.6`) som äger dem — de två modellerna arbetar oberoende av varandra, ingen formell granskning mellan dem. Se öppna issues för aktuellt arbete.
