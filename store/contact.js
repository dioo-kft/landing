export const state = () => ({
  title: {
    hu: "",
    en: "Contact Us",
  },
  email: {
    title: {
      hu: "Keressen minket!",
      en: "",
    },
    description: {
      hu: "email címünk: info@dioo.hu",
      en: "",
    },
  },
  contacts: {
    hu: [{
      area: "Fenntartóknak, Pedagógusoknak",
      name: "Konkolyi Sándor",
      phone: "+36 30 526 0457",
    },{
      area: "Társadalmi Felelősségvállalás, Vállalatoknak",
      name: "Beregszászi-Konkolyi Szilvia",
      phone: "+36 30 526 0457",
    },],
    en: [{
      area: "Maintainers, Kindergartens, Teachers",
      name: "Sándor, Konkolyi",
      phone: "+36 30 526 0457",
    },{
      area: "Corporate social responsibility (CSR)",
      name: "Szilvia, Beregszászi-Konkolyi",
      phone: "+36 30 526 0457",
    },],
  },
  buttonsTitle: {
    hu: "Jelentkezése számunkra fontos, ezért kérjük, érdeklődését jelezze az alábbi gombok valamelyikével!",
    en: "",
  },
})

export const getters = {
  title: (state) => (lang) => {
    return state.title[lang];
  },
  email: (state) => (lang) => {
    return state.email[lang];
  },
  contacts: (state) => (lang) => {
    return state.contacts[lang];
  },
  buttonsTitle: (state) => (lang) => {
    return state.buttonsTitle[lang];
  },
}