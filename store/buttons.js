export const state = () => ({
  contactUs: {
    hu: "Üzenjen nekünk",
    en: "Contact Us",
  },
  callBack: {
    hu: "Visszahívást kérek",
    en: "Request a Call Back",
  },
  purcheseRedirect: {
    hu: "DIOO-t veszek",
    en: "Order DIOO",
  },
  supportRedirect: {
    hu: "Támogatok egy óvodát",
    en: "Support an Institution",
  },
  introRedirect: {
    hu: "Bemutatót kérek",
    en: "Request more info",
  },
  parentsRedirect: {
    hu: "Szülői érdeklődés",
    en: "Parental Inquiery",
  },
})

export const getters = {
  contactUs: (state) => (lang) => {
    return state.contactUs[lang];
  },
  callBack: (state) => (lang) => {
    return state.callBack[lang];
  },
  purcheseRedirect: (state) => (lang) => {
    return state.purcheseRedirect[lang];
  },
  supportRedirect: (state) => (lang) => {
    return state.supportRedirect[lang];
  },
  introRedirect: (state) => (lang) => {
    return state.introRedirect[lang];
  },
  parentsRedirect: (state) => (lang) => {
    return state.parentsRedirect[lang];
  },
}