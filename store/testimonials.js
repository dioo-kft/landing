export const state = () => ({
  title: {
    hu: "",
    en: "",
  },
  cards: {
    hu: [
      {
        title: "",
        text: "",
        author: "",
    },
      {
        title: "",
        text: "",
        author: "",
    },
      {
        title: "",
        text: "",
        author: "",
    },
    ],
    en: [
      {
        title: "test title",
        text: "text",
        author: "author",
    },],
  },
})

export const getters = {
  title: (state) => (lang) => {
    return state.title[lang];
  },
  cards: (state) => (lang) => {
    return state.cards[lang];
  },
}