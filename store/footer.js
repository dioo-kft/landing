export const state = () => ({
  copyright: {
    hu: "DIOO Digitális Oktató | Minden jog fenntartva.",
    en: "DIOO Kft.",
  },
  links: {
    hu: [
      {
        id: 0,
        title: "Pedagógusi Felület",
        link: "https://system.dioo.hu/ovonok#login_form",
        show: true,
      },
      {
        id: 1,
        title: "Cookie Tájékoztató",
        link: "/cookie-tajekoztato",
        show: true,
      },
      {
        id: 2,
        title: "GDPR Adatvédelmi Szabályzat",
        link: "/adatvedelmi-szabalyzat",
        show: true,
      },
    ],
    en: [
      {
        id: 0,
        title: "For Kindergartens",
        link: "",
        show: true,
      },
      {
        id: 1,
        title: "Cookie Policy",
        link: "/cookie-tajekoztato",
        show: true,
      },
      {
        id: 2,
        title: "Privacy Policy",
        link: "/adatvedelmi-szabalyzat",
        show: true,
      },],
  },
})

export const getters = {
  copyright: (state) => (lang) => {
    return state.copyright[lang];
  },
  links: (state) => (lang) => {
    return state.links[lang].filter(e => e.show === true);
  },
}

export const mutations = {
  enableAllValidLinks: (state) => {
    var langs = ["hu", "en"];
    for (var l of langs) {
      for (var e of state.links[l]) {
        if (e.link !== "") e.show = true;
        else e.show = false;
      }
    }
  },
  disableForKindergartens: (state) => {
    var langs = ["hu", "en"];
    for (var l of langs) {
      for (var e of state.links[l]) {
        if (e.id === 0) {
          e.show = false;
          break;
        }
      }
    }
  },
}