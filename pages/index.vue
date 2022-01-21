<template>
  <b-container fluid>
    <page-section section-id="cover">
      <div class="bg-shape">
        <page-cover />
      </div>
    </page-section>
    <page-section section-id="intro" title="Mi a DIOO?">
      <page-intro />
    </page-section>
    <page-section section-id="faq" title="Gyakran Ismételt kérdések">
      <b-col class="accordion" role="tablist" align-self="stretch">
        <b-card v-for="id in items.length" :key="id" no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle="'accordion-' + id"
              variant="info"
              class="faq-question"
              >{{ items[id - 1].question }}</b-button
            >
          </b-card-header>
          <b-collapse
            :id="'accordion-' + id"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="faq-answer">
              <b-card-text>{{ items[id - 1].answer }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </page-section>
    <page-section
      section-id="testimonial"
      title="Rólunk mondták"
      align-self="stretch"
    >
      <b-col>
        <testimonial-carousel />
      </b-col>
    </page-section>
    <page-section section-id="contact" title="Kapcsolat">
      <page-contact />
    </page-section>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          question: "Szükséges-e informatikai tudás a DIOO használatához?",
          answer:
            "A DIOO érintőképernyős eszköz, egér és billentyűzet nélkül használható. Az eszköz bekapcsolása után magától elindul és készen áll a használatra.",
        },
        {
          question: "Ki segít a DIOO megismerésében?",
          answer:
            "Az eszközhöz két helyszíni oktatás tartozik (játékokról és az óvónői lehetőségekről), emellett csapatunk lehetőséget biztosít a telefonos, gyors segítségkérésre is.",
        },
        {
          question: "Szükséges-e írni, olvasni a feladatok megoldásához?",
          answer:
            "Nem. A DIOO az írni, olvasni még nem tudó, óvodáskorú felhasználók részére készült. A feladatok kiadása magyar nyelvű hangutasítással történik. Az utasítások újra meghallgathatók.",
        },
        {
          question: "Miért biztonságos a DIOO internethasználata?",
          answer:
            "A gyermekek kizárólag a DIOO fejlesztőfeladatokat érik el az eszközön.",
        },
        {
          question: "Korlátozható-e a DIOO használata?",
          answer:
            "A fejlesztők a DIOO napi használati idejét 15 percben javasolják, mivel a figyelmet és koncentrálást igénylő játékfeladatok megoldása a kis felhasználókat elfárasztja. A napi játékidő beállítható. A játékidő leteltével a gyermek új játékot aznap már nem indíthat.",
        },
        {
          question: "Hogyan biztosítja a DIOO az egyedi fejlesztést?",
          answer:
            "A DIOO mindig a kis felhasználó aktuális képességének megfelelő nehézségű feladatot ad, melyet sikeres megoldást követően a program fokozatosan nehezít.",
        },
        {
          question: "Honnan tudja a gyermek, hogy jól oldotta meg a feladatot?",
          answer:
            "A rendszer a feladatmegoldást követően azonnal jelzi a megoldás helyességét.",
        },
        {
          question: "Mi történik, ha egy feladat 'túl nehéz'?",
          answer:
            "Azokat a feladatokat, melyeket a gyermek nem tudott helyesen megoldani, a rendszer gyakoroltatja, esetleg könnyebb feladathoz tér vissza.",
        },
        {
          question: "Okozhat-e stresszt a feladatmegoldás?",
          answer:
            "A DIOO-feladatok játékos kihívások, melyek a gyermeki tapasztalatra és a napi tevékenység során szerzett ismeretanyagra építenek. A feladatok megoldásán bármennyi ideig gondolkodhat a kis felhasználó, s minden megoldást dicséret vagy biztatás követ, így a feladatok ismétlését sem éli meg kudarcként. Mivel a feladatok apró lépésenként nehezednek, a gyakorlottság növekedésével a kisgyermek egyre nehezebb feladatok megoldására lesz képes.",
        },
        {
          question: "Milyen képességeket mér és fejleszt a DIOO?",
          answer:
            "A DIOO játékai a sikeres iskolakezdéshez szükséges, legfontosabb képességek alkalmazását igénylik vizuális, auditív, rész-egész felismerés, szintézis-analízis, tájékozódás, matematikai gondolkodás, memória és finommotorika területén.",
        },
        {
          question:
            "Milyen járulékos eredményt hoz a DIOO felhasználói tapasztalat alapján?",
          answer:
            "A DIOO használata fokozza a figyelmet, koncentrálóképességet, bővíti szókincset, a játék nyújtotta sikerélmény növeli az önbizalmat, nyitottabbá teszi a visszahúzódó gyermekeket, lassítja a túlzottan aktív gyermekeket. A DIOO-feladatok megoldása felhívhatja a figyelmet esetleges szervi problémákra (hallás, látás), képességebéli elmaradásara, vagy éppen egy-egy területen elért kiemelkedő teljesítményre. Segíti a pedagógust az egyéni fejlesztési terv meghatározásában. Fejleszti a szocializációt: a közös élmény eredményeképpen erősödik a csapatszellem: megfigyelhetően nő az egymásra való odafigyelés, az egymásnak való segítségnyújtás.",
        },
        {
          question: "Hogy tudom nyomon követni a gyermekek fejlődését?",
          answer:
            "A DIOO-felhasználó pedagógusokat a rendszer hetente/havonta emailben tájékoztatja a gyermekek elért, összegzett eredményeiről.",
        },
      ],
    };
  },
}
</script>