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
        en: "",
      },
      cookieAlt: {
        hu: `Vagy a videót a YouTube oldalán is elérheti a <a href="https://www.youtube.com/watch?v=7XFOUAdqHmU">https://www.youtube.com/watch?v=7XFOUAdqHmU</a> linken.`,
        en: ``,
      },
      enableCookiesButton: {
        hu: "YouTube által használt sütik engedélyezése",
        en: "",
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
    return state.video.placeholder.cookieAlt[lang];
  },
  getVideoEnableCookiesButton: (state) => (lang) => {
    return state.video.placeholder.enableCookiesButton[lang];
  },
}