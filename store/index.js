export const state = () => ({
  cookieConsent: initCookieConsent(),
    cookies: 
    {
        youtube: 
        {
          toggle: {
            value: 'third-party_youtube',
            enabled: true,
            readonly: false,
      }
    },
  },
})

export const mutations = {
  enableYoutubeCookies(state) {
    state.cookies.youtube.toggle.enabled = true
  },
  disableYoutubeCookies(state) {
    state.cookies.youtube.toggle.enabled = false
  },
}
