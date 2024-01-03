export const state = () => ({
  title: {
    hu: "Kapcsolat",
    en: "Contact",
  },
  email: {
    title: {
      hu: "Keressen minket!",
      en: "Contact Us",
    },
    description: {
      hu: "email címünk:",
      en: "email us at:",
    },
  },
  agents: {
    hu: [{
      area: "Fenntartóknak, Pedagógusoknak",
      name: "Konkolyi Sándor",
      phone: "+36 30 526 0457",
    }, {
      area: "Társadalmi Felelősségvállalás, Vállalatoknak",
      name: "Beregszászi-Konkolyi Szilvia",
      phone: "+36 30 526 0457",
    },],
    en: [{
      area: "Maintainers, Kindergartens, Teachers",
      name: "Sándor, Konkolyi",
      phone: "+36 30 526 0457",
    }, {
      area: "Corporate social responsibility (CSR)",
      name: "Szilvia, Beregszászi-Konkolyi",
      phone: "+36 30 526 0457",
    },],
  },
  labels: {
    agentName: {
      hu: "Kapcsolattartó:",
      en: "Name:",
    },
    whenToCall: {
      hu: "Hétköznaponként 8:00 - 17:00 között hívható.",
      en: "Call between 10:00 – 16:00 (UTC) on weekdays.",
    },
    phone: {
      hu: "tel.:",
      en: "phone:",
    },
  },
  buttonsDescription: {
    hu: "Jelentkezése számunkra fontos, ezért kérjük, érdeklődését jelezze az alábbi gombok valamelyikével!",
    en: "",
  },
})

export const getters = {
  title: (state) => (lang) => {
    return state.title[lang];
  },
  emailTitle: (state) => (lang) => {
    return state.email.title[lang];
  },
  emailDescription: (state) => (lang) => {
    return state.email.description[lang];
  },
  agents: (state) => (lang) => {
    return state.agents[lang];
  },
  buttonsDescription: (state) => (lang) => {
    return state.buttonsDescription[lang];
  },
  labelAgentName: (state) => (lang) => {
    return state.labels.agentName[lang];
  },
  labelWhenToCall: (state) => (lang) => {
    return state.labels.whenToCall[lang];
  },
  labelPhone: (state) => (lang) => {
    return state.labels.phone[lang];
  },
}