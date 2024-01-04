export const state = () => ({
  title: {
    hu: "Gyakran Ismételt kérdések",
    en: "FAQ",
  },
  questions: {
    hu:  [
      {
        question: "Szükséges-e informatikai tudás a DIOO használatához?",
        answer: "Használata semmilyen számítástechnikai tudás nem igényel. A DIOO érintőképernyős eszköz, egér és billentyűzet nélkül használható. Az eszköz bekapcsolása után magától elindul és készen áll a használatra.",
      },
      {
        question: "Ki segít a DIOO megismerésében?",
        answer: "Az eszközhöz két helyszíni oktatás tartozik (játékokról és az óvónői lehetőségekről), emellett csapatunk lehetőséget biztosít a telefonos, gyors segítségkérésre is.",
      },
      {
        question: "Szükséges-e írni, olvasni a feladatok megoldásához?",
        answer: "Nem. A DIOO az írni, olvasni még nem tudó, óvodáskorú felhasználók részére készült. A feladatok kiadása magyar nyelvű hangutasítással történik. Az utasítások újra meghallgathatók.",
      },
      {
        question: "Miért biztonságos a DIOO internethasználata?",
        answer: "A gyermekek kizárólag a DIOO fejlesztőfeladatokat érik el az eszközön.",
      },
      {
        question: "Korlátozható-e a DIOO használata?",
        answer: "A fejlesztők a DIOO napi használati idejét 15 percben javasolják, mivel a figyelmet és koncentrálást igénylő játékfeladatok megoldása a kis felhasználókat elfárasztja. A napi játékidő beállítható. A játékidő leteltével a gyermek új játékot aznap már nem indíthat.",
      },
      {
        question: "Hogyan biztosítja a DIOO az egyedi fejlesztést?",
        answer: "A DIOO mindig a kis felhasználó aktuális képességének megfelelő nehézségű feladatot ad, melyet sikeres megoldást követően a program fokozatosan nehezít.",
      },
      {
        question: "Honnan tudja a gyermek, hogy jól oldotta meg a feladatot?",
        answer: "A rendszer a feladatmegoldást követően azonnal jelzi a megoldás helyességét.",
      },
      {
        question: "Mi történik, ha egy feladat 'túl nehéz'?",
        answer: "Azokat a feladatokat, melyeket a gyermek nem tudott helyesen megoldani, a rendszer gyakoroltatja, esetleg könnyebb feladathoz tér vissza.",
      },
      {
        question: "Okozhat-e stresszt a feladatmegoldás?",
        answer: "A DIOO-feladatok játékos kihívások, melyek a gyermeki tapasztalatra és a napi tevékenység során szerzett ismeretanyagra építenek. A feladatok megoldásán bármennyi ideig gondolkodhat a kis felhasználó, s minden megoldást dicséret vagy biztatás követ, így a feladatok ismétlését sem éli meg kudarcként. Mivel a feladatok apró lépésenként nehezednek, a gyakorlottság növekedésével a kisgyermek egyre nehezebb feladatok megoldására lesz képes.",
      },
      {
        question: "Milyen képességeket mér és fejleszt a DIOO?",
        answer: "A DIOO játékai a sikeres iskolakezdéshez szükséges, legfontosabb képességek alkalmazását igénylik vizuális, auditív, rész-egész felismerés, szintézis-analízis, tájékozódás, matematikai gondolkodás, memória és finommotorika területén.",
      },
      {
        question: "Milyen járulékos eredményt hoz a DIOO felhasználói tapasztalat alapján?",
        answer: "A DIOO használata fokozza a figyelmet, koncentrálóképességet, bővíti szókincset, a játék nyújtotta sikerélmény növeli az önbizalmat, nyitottabbá teszi a visszahúzódó gyermekeket, lassítja a túlzottan aktív gyermekeket. A DIOO-feladatok megoldása felhívhatja a figyelmet esetleges szervi problémákra (hallás, látás), képességebéli elmaradásara, vagy éppen egy-egy területen elért kiemelkedő teljesítményre. Segíti a pedagógust az egyéni fejlesztési terv meghatározásában. Fejleszti a szocializációt: a közös élmény eredményeképpen erősödik a csapatszellem: megfigyelhetően nő az egymásra való odafigyelés, az egymásnak való segítségnyújtás.",
      },
      {
        question: "Hogy tudom nyomon követni a gyermekek fejlődését?",
        answer: "A DIOO-felhasználó pedagógusokat a rendszer hetente/havonta emailben tájékoztatja a gyermekek elért, összegzett eredményeiről.",
      },
    ],
    en: [
      {
        question: "Is it necessary to have IT knowledge to use DIOO?",
        answer: "DIOO does not require any knowledge of computer technology. Users (children) must complete the tasks assigned to them by the device on it's built in touch screen.  After turning on the device, it is ready for use.",
      },
      {
        question: "Does using DIOO require the ability to read and write?",
        answer: "No. DIOO is designed for preschoolers who cannot yet read and write. Every game begin with a voice instruction in the child's native language, then the child has an unlimited amount of time to solve the given task on the touch screen. The completion of the task is indicated by an animation and a verbal praise or encouragement.",
      },
      {
        question: "How does DIOO safeguard children against dangers of the internet?",
        answer: "On the device, children can only access the school readiness games of DIOO.",
      },
      {
        question: "How does DIOO achieve unique development?",
        answer: "Each child has their own RFID token, which is used by the DIOO system to identify the player. This is necessary in order to assign individual tasks, record and evaluate individual results, and set the playing time for each child individually. A task's difficulty is always chosen by DIOO based on the child's current competencies. The complexity of the next problem is increased or decreased based on the previous task's solution.",
      },
      {
        question: "How do children get feedback on their solution?",
        answer: "DIOO gives visual feedback on making mistakes during the solution of tasks. In addition, children receive verbal praise or encouragement at the end of each task, based on their overall performance during solving the task.",
      },
      {
        question: "Can solving tasks cause stress in children?",
        answer: "DIOO's games present children with playful challenges based on their  everyday experiences and knowledge. The little users can think about the solution of a task for as long as they need, and every task ends with a verbal praise or encouragement. The difficulty of the tasks increases in tiny steps, and as their skills develop, children will be able to solve harder and harder tasks.",
      },
      {
        question: "What skills are measured and developed by DIOO?",
        answer: "DIOO's games measure and develop the most crucial skills for a good start at school in the areas of visual, auditory, part-whole recognition, synthesis-analysis, orientation, mathematical reasoning, memory, and fine motor skill.",
      },
      {
        question: "What further benefits does DIOO offer based on our long term users' feedback?",
        answer: "The use of DIOO increases attention and concentration. It also increases vocabulary, which aids in learning a country's native language. The sense of achievement provided by the game boosts self-confidence. DIOO encourages withdrawn children to open up and slows overly energetic children. Solving DIOO's tasks can draw attention to potential hearing or vision problems, as well as children's strengths and weaknesses. DIOO also fosters socialisation; the team spirit is strengthened. As a result of the shared experience, attention to each other and support for each other notably increases.",
      },
      {
        question: "How does DIOO provide feedback on children's development?",
        answer: "The system sends weekly/monthly emails to teachers with a summary of the children's results. We also offer an online dashboard to view more detailed statistics on both individuals and groups.",
      },
    ],
  },
})

export const getters = {
  title: (state) => (lang) => {
    return state.title[lang];
  },
  getQuestions: (state) => (lang) => {
    return state.questions[lang];
  },
}