export const state = () => ({
  menuItems: {
    hu: [
      {
        id: "intro",
        title: "Mi a DIOO?",
        link: "/#intro",
        show: true,
      }, {
        id: "faq",
        title: "Gy.I.K.",
        link: "/#faq",
        show: true,
      }, {
        id: "achievements",
        title: "Fejlesztések",
        link: "/2020-1-1-1-KKV-START-2021-00400",
        show: true,
      }, {
        id: "contact",
        title: "Kapcsolat",
        link: "/#contact",
        show: true,
      },
    ],
    en: [
      {
        id: "intro",
        title: "What is DIOO?",
        link: "/#intro",
        show: true,
      }, {
        id: "faq",
        title: "FAQ",
        link: "/#faq",
        show: true,
      }, {
        id: "achievements",
        title: "Achievements",
        link: "",
        show: false,
      }, {
        id: "contact",
        title: "Contact",
        link: "/#contact",
        show: true,
      },
    ],
  },
})

export const getters = {
  menuItems: (state) => (lang) => {
    return state.menuItems[lang].filter(e => e.show === true);
  },
}