export const state = () => ({
  cookieConsent: initCookieConsent(),
    cookies: 
    {
        youtube: 
        {
          toggle: {
            value: 'third-party_youtube',
            enabled: true,
            readonly: false,
      }
    },
  },
  introText: [
    "A DIOO a sikeres iskolakezdéshez szükséges készségeket játékosan fejlesztő eszköz; egy új, innovatív, teljes egészében magyar digitális fejlesztés.",
    "A Digitális Okosjáték Óvodásoknak (DIOO) billentyűzet és egér nélkül, érintőképernyőn irányítható program, amelyben a feladatokat hangutasítások alapján kapják a gyerekek. Az Okosjáték lehetővé teszi az óvodások iskolaérettségi szintjének mérését és a szükséges képességek erősítését.",
  ],
  faq: [
    {
      question: "Szükséges-e informatikai tudás a DIOO használatához?",
      answer:
        "Használata semmilyen számítástechnikai tudás nem igényel. A DIOO érintőképernyős eszköz, egér és billentyűzet nélkül használható. Az eszköz bekapcsolása után magától elindul és készen áll a használatra.",
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
})

export const mutations = {
  enableYoutubeCookies(state) {
    state.cookies.youtube.toggle.enabled = true
  },
  disableYoutubeCookies(state) {
    state.cookies.youtube.toggle.enabled = false
  },
}
