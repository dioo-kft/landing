export const state = () => ({
  consent: initCookieConsent(),
  youtube:
  {
    toggle: {
      value: 'third-party_youtube',
      enabled: true,
      readonly: false,
    }
  },
})

export const mutations = {
  enableYoutubeCookies(state) {
    state.youtube.toggle.enabled = true
  },
  disableYoutubeCookies(state) {
    state.youtube.toggle.enabled = false
  },
}