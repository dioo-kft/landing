export const state = () => ({
  contactUs: {
    hu: "Üzenjen nekünk",
    en: "Contact Us",
  },
  callBack: {
    hu: {
      text: "Visszahívást kérek",
      link: "https://forms.clickup.com/f/4bd9e-3121/C0VWX3U1BMFPYUQKSF",
    },
    en: {
      text: "Request a Call Back",
      link: "https://forms.clickup.com/4568366/f/4bd9e-4032/L7RMH6F40QBLPAO0Y3",
    }
  },
  cookieSettings: {
    hu: "Cookie(süti) beállítások módosítása",
    en: "Change Cookie Settings",
  },
  buttons: {
    hu: [{
      id: 0,
      text: "Bemutatót kérek",
      link: "https://forms.clickup.com/f/4bd9e-3121/C0VWX3U1BMFPYUQKSF",
      show: true,
    }, {
      id: 1,
      text: "DIOO-t veszek",
      link: "https://forms.clickup.com/f/4bd9e-3001/ZXRM9YPGZ98O8YC29Y",
      show: true,
    }, {
      id: 2,
      text: "Szülői érdeklődés",
      link: "https://forms.clickup.com/f/4bd9e-3081/UU6XGDB170WL17YDZK",
      show: true,
    }, {
      id: 3,
      text: "Támogatok egy óvodát",
      link: "https://forms.clickup.com/f/4bd9e-3041/NO44ISE6HP07EN8GGX",
      show: true,
    },
    ],
    en: [{
      id: 0,
      text: "Request more info",
      link: "https://forms.clickup.com/4568366/f/4bd9e-4032/L7RMH6F40QBLPAO0Y3",
      show: true,
    }, {
      id: 1,
      text: "Order DIOO",
      link: "https://forms.clickup.com/4568366/f/4bd9e-4112/RO9RSR9XYLDO5NG7MP",
      show: true,
    }, {
      id: 2,
      text: "Parental Inquiery",
      link: "",
      show: false,
    }, {
      id: 3,
      text: "Support an Institution",
      link: "https://forms.clickup.com/4568366/f/4bd9e-4072/TL7JYF97LV8GZ3PIT7",
      show: true,
    },
    ],
  },
})

export const getters = {
  contactUs: (state) => (lang) => {
    return state.contactUs[lang];
  },
  callBack: (state) => (lang) => {
    return state.callBack[lang];
  },
  cookieSettings: (state) => (lang) => {
    return state.cookieSettings[lang];
  },
  buttons: (state) => (lang) => {
    return state.buttons[lang].filter(e => e.show === true);
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
}