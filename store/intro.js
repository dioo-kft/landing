export const state = () => ({
  title: {
    hu: "Mi a DIOO?",
    en: "What is DIOO?",
  },
  description: {
    hu: [
      "A DIOO a sikeres iskolakezdéshez szükséges készségeket játékosan fejlesztő eszköz; egy új, innovatív, teljes egészében magyar digitális fejlesztés.",
      "A Digitális Okosjáték Óvodásoknak (DIOO) billentyűzet és egér nélkül, érintőképernyőn irányítható program, amelyben a feladatokat hangutasítások alapján kapják a gyerekek. Az Okosjáték lehetővé teszi az óvodások iskolaérettségi szintjének mérését és a szükséges képességek erősítését.",
    ],
    en: [
      "DIOO is a complete hardware/software solution, a professional digital school readiness preparation and assessment system for preschoolers. It measures and develops children's 16 core skills while they play.",
    ]
  },
  detailedDescription: {
    hu: [""],
    en: [
      'Our solution is a Plug and Play , wall-mounted  21.5" touch screen  device installed in kindergartens. DIOO is designed to achieve skill-based learning  through assessing and improving 16 core skills through 16 different games.',
      "The program collects data on the children's abilities while they play and determines the difficulty level of the subsequent game based on these measurements to achieve  individual development . Various statistics  are generated based on the data to help teachers identify children's strengths and weaknesses.",
      "DIOO is so simple to use that  no IT knowledge  is required. Without even realising it, children learn and enhance their abilities unsupervised, independently, and through play, progressing towards school readiness, absorbing the fundamentals of digital literacy, as well as societal culture, norms and values.",
    ],
  },
  video: {
    link: {
      hu: "https://www.youtube-nocookie.com/embed/7XFOUAdqHmU",
      en: "",
    },
    placeholder: {
      alt: {
        hu: "DIOO Bemutató videó",
        en: "DIOO introduction video",
      },
      cookieWarning: {
        hu: "A videó megtekintéséhez kérem engedélyezze a YouTube általhasznált sütiket! ↓",
        en: "To view the video, please enable the cookies used by YouTube! ↓",
      },
      cookieAlt: {
        hu: `Vagy a videót a YouTube oldalán is megtekintheti:`,
        en: `Or you can watch the video directly on YouTube at`,
      },
      enableCookiesButton: {
        hu: "YouTube által használt sütik engedélyezése",
        en: "Enable YouTube cookies",
      },
    },
  },
})

export const getters = {
  getTitle: (state) => (lang) => {
    return state.title[lang];
  },
  getDescription: (state) => (lang) => {
    return state.description[lang];
  },
  getVideoAlt: (state) => (lang) => {
    return state.video.placeholder.alt[lang];
  },
  videoLink: (state) => (lang) => {
    return state.video.link[lang];
  },
  getVideoCookieWarning: (state) => (lang) => {
    return state.video.placeholder.cookieWarning[lang];
  },
  getVideoCookieAlt: (state) => (lang) => {
    var link = state.video.link[lang];
    return state.video.placeholder.cookieAlt[lang] + ` <a href=` + link + `>` + link + `</a>`;
  },
  getVideoEnableCookiesButton: (state) => (lang) => {
    return state.video.placeholder.enableCookiesButton[lang];
  },
  detailedDescription: (state) => (lang) => {
    return state.detailedDescription[lang];
  },
}