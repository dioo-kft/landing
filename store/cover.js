export const state = () => ({
  brandSubtitle: {
    hu: "Digitális OkosJáték Óvodásoknak",
    en: "Digital SmartGame for Pre-Schoolers",
  },
})

export const getters = {
  brandSubtitle: (state) => (lang) => {
    return state.brandSubtitle[lang];
  },
}