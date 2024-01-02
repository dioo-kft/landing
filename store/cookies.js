export const state = () => ({
  consent: initCookieConsent(),
  language: "hu",
  youtube:
  {
    toggle: {
      value: 'third-party_youtube',
      enabled: true,
      readonly: false,
    }
  },
})

export const getters = {
  getLanguage(state) {
    return state.consent.getConfig('current_lang')
  }
}

export const mutations = {
  enableYoutubeCookies(state) {
    state.youtube.toggle.enabled = true
  },
  disableYoutubeCookies(state) {
    state.youtube.toggle.enabled = false
  },
  setLanguage(state, lang) {
    state.language = lang
    state.consent.updateLanguage(lang)
  }
}