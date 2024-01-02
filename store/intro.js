export const state = () => ({
  title: {
    hu: "Mi a DIOO?",
    en: "What is DIOO?",
  },
  description: [
    "A DIOO a sikeres iskolakezdéshez szükséges készségeket játékosan fejlesztő eszköz; egy új, innovatív, teljes egészében magyar digitális fejlesztés.",
    "A Digitális Okosjáték Óvodásoknak (DIOO) billentyűzet és egér nélkül, érintőképernyőn irányítható program, amelyben a feladatokat hangutasítások alapján kapják a gyerekek. Az Okosjáték lehetővé teszi az óvodások iskolaérettségi szintjének mérését és a szükséges képességek erősítését.",
  ],
})

export const getters = {
  getTitle: (state) => (lang) => {
    return state.title[lang]
  },
}