export const state = () => ({
  copyright: {
    hu: "Copyright © 2023 DIOO Digitális Oktató | Minden jog fenntartva.",
    en: "Copyright © 2023 DIOO Kft.",
  },
  forKindergartens: {
    hu: "Pedagógusi Felület",
    en: "For Kindergartens",
  },
  cookiePolicy: {
    hu: "Cookie Tájékoztató",
    en: "Cookie Policy",
  },
  privacyPolicy: {
    hu: "GDPR Adatvédelmi Szabályzat",
    en: "Privacy Policy",
  },
})

export const getters = {
  copyright: (state) => (lang) => {
    return state.contactUs[lang];
  },
  forKindergartens: (state) => (lang) => {
    return state.contactUs[lang];
  },
  cookiePolicy: (state) => (lang) => {
    return state.contactUs[lang];
  },
  privacyPolicy: (state) => (lang) => {
    return state.contactUs[lang];
  },
}