export const state = () => ({
  menuItems: {
    hu: [
      "Mi a DIOO?",
      "Gy.I.K.",
      "Fejlesztések",
      "Kapcsolat",],
    en: [
      "What is DIOO?",
      "FAQ",
      "Contact",],
  },
})

export const getters = {
  menuItems: (state) => (lang) => {
    return state.menuItems[lang];
  },
}