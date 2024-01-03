export const state = () => ({
  moreQuestions: {
    hu: "Még több kérdése van?",
    en: "Still have questions?",
  },
  orLineBr: {
    hu: "VAGY",
    en: "OR",
  },
  emailUs: {
    hu: "Üzenjen nekünk emailben:",
    en: "Reach out to us at",
  },
})

export const getters = {
  moreQuestions: (state) => (lang) => {
    return state.moreQuestions[lang];
  },
  orLineBr: (state) => (lang) => {
    return state.orLineBr[lang];
  },
  emailUs: (state) => (lang) => {
    return state.emailUs[lang];
  },
}