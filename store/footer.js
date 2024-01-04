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
        link: {
          href: "https://system.dioo.hu/ovonok#login_form",
          to: "",
        },
        show: true,
      },
      {
        id: 1,
        title: "Cookie Tájékoztató",
        link: {
          href: "",
          to: "/cookie-tajekoztato",
        }, 
        show: true,
      },
      {
        id: 2,
        title: "GDPR Adatvédelmi Szabályzat",
        link: {
          href: "",
          to: "/adatvedelmi-szabalyzat",
        },
        show: true,
      },
    ],
    en: [
      {
        id: 0,
        title: "For Kindergartens",
        link: {
          href: "",
          to: "",
        },
        show: true,
      },
      {
        id: 1,
        title: "Cookie Policy",
        link: {
          href: "",
          to: "/cookie-tajekoztato",
        },
        show: true,
      },
      {
        id: 2,
        title: "Privacy Policy",
        link: {
          href: "",
          to: "/adatvedelmi-szabalyzat",
        },
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
        if (e.link.to === "" && e.link.href === "") e.show = false;
        else e.show = true;
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