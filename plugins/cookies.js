export default ({ app }, inject) => {
  inject('configureCookieSettings',
    function a() {
      var store = this.$store;

      this.$store.state.cookies.consent.run({
        current_lang: "hu",
        autoclear_cookies: true,
        page_scripts: true,
        force_consent: true,
        auto_language: "browser",

        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 0,                               // default: 0
        // auto_language: null                     // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        // force_consent: false,                   // default: false
        // hide_from_bots: true,                   // default: true
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,

        onFirstAction: function (user_preferences, cookie) {
          // This function will be executed only once, when the user takes the first action (accept/reject).

          user_preferences.accepted_categories.forEach((element) => {
            if (element === store.state.cookies.youtube.toggle.value) {
              store.commit("cookies/enableYoutubeCookies");
            }
          });

          user_preferences.rejected_categories.forEach((element) => {
            if (element === store.state.cookies.youtube.toggle.value) {
              store.commit("cookies/disableYoutubeCookies");
            }
          });
        },

        onAccept: function (cookie) {
          // This function will be executed:
          //    - at the first moment that consent is given (just like onFirstAction)
          //    - after every page load, if consent (accept or "reject" action) has already been given

          var youtubeEnabled = false;
          cookie.level.forEach((element) => {
            if (element === store.state.cookies.youtube.toggle.value) {
              youtubeEnabled = true;
            }
          });

          if (youtubeEnabled) {
            store.commit("cookies/enableYoutubeCookies");
          } else {
            store.commit("cookies/disableYoutubeCookies");
          }
        },

        onChange: function (cookie, changed_preferences) {
          // This function will be executed (only if consent has already been given):
          //    - when user changes his preferences (accepts/rejects a cookie category)

          var youtubeEnabled = false;
          cookie.level.forEach((element) => {
            if (element === store.state.cookies.youtube.toggle.value) {
              youtubeEnabled = true;
            }
          });

          if (youtubeEnabled) {
            store.commit("cookies/enableYoutubeCookies");
          } else {
            store.commit("cookies/disableYoutubeCookies");
          }
        },
        gui_options: {
          consent_modal: {
            layout: "cloud",
            position: "bottom center",
            transition: "slide",
            swap_buttons: false,
          },
          settings_modal: {
            layout: "box",
            transition: "slide",
          },
        },
        languages: {
          hu: {
            consent_modal: {
              title: "Ez a weboldal sütiket használ",
              description:
                'Ez a weboldal sütiket használ a felhasználói élmény javítása érdekében. A weboldalunk használatával Ön hozzájárul az összes süti használatához, a Cookie szabályzatunknak megfelelően. <button type="button" data-cc="c-settings" class="cc-link">Személyre szabás</button>',
              primary_btn: {
                text: "ÖSSZES ELFOGADÁSA",
                role: "accept_all", // 'accept_selected' or 'accept_all'
              },
              secondary_btn: {
                text: "ÖSSZES ELUTASÍTÁSA",
                role: "accept_necessary", // 'settings' or 'accept_necessary'
              },
            },
            settings_modal: {
              title: "COOKIE(SÜTI) BEÁLLÍTÁSOK",
              save_settings_btn: "BEÁLLÍTÁSOK MENTÉSE",
              accept_all_btn: "ÖSSZES ELFOGADÁSA",
              reject_all_btn: "ÖSSZES ELUTASÍTÁSA",
              close_btn_label: "BEZÁRÁS",
              cookie_table_headers: [
                { col1: "Név" },
                { col2: "Domain" },
                { col3: "Lejárat" },
                { col4: "Leírás" },
              ],
              blocks: [
                {
                  title: "A sütikről 📢",
                  description:
                    'A cookie-k kis szöveges fájlok, amelyeket az Ön által felkeresett webhelyek helyeznek el a számítógépén. A weboldalak cookie-kat használnak a felhasználók eredményes navigálásának elősegítése céljából és bizonyos funkciók végrehajtásához. A weboldal megfelelő működéséhez szükséges sütik az Ön engedélye nélkül állíthatók be. Az összes többi cookie-t jóvá kell hagyni azok böngészőben történő beállítása előtt. A sütik használatához való hozzájárulását bármikor megváltoztathatja a <a href="/cookie-tajekoztato">Cookie tájékoztató</a> oldalon.',
                },
                {
                  title: "Alapvető működéshez szükséges sütik",
                  description:
                    "Ezen sütik biztosítják a weboldal megfelelő működését, megkönnyítik annak használatát, és látogatóink azonosítása nélkül gyűjtenek információt a használatáról. Ide tartozik például a sütikezelés elfogadásának státusza, a bejelentkezési módok és adatok megjegyzése, és a csökkentett funkcionalitású Google Analytics kód. Ezen sütik alkalmazása nélkül nem tudjuk garantálni weboldalunk kényelmes használatát.",
                  toggle: {
                    value: "necessary",
                    enabled: true,
                    readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                  },
                },
                {
                  title: "Harmadik féltől származó sütik - YouTube(Google)",
                  description:
                    'Ezeket a sütiket a YouTube állítja be a beágyazott videók megtekintésének nyomon követésére. A szolgáltatással kapcsolatos részletes tájékoztatás az alábbi linkeken érhető el: <a href="https://policies.google.com/privacy?hl=hu">https://policies.google.com/privacy?hl=hu</a><br /><a href="https://support.google.com/youtube/answer/171780?hl=hu">https://support.google.com/youtube/answer/171780?hl=hu</a>',
                  toggle: {
                    value: "third-party_youtube",
                    enabled: true,
                    readonly: false, // cookie categories with readonly=true are all treated as "necessary cookies"
                  },
                },
              ],
            },
          },
          en: {
            consent_modal: {
              title: 'We use cookies!',
              description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
              primary_btn: {
                text: 'Accept all',
                role: 'accept_all'              // 'accept_selected' or 'accept_all'
              },
              secondary_btn: {
                text: 'Reject all',
                role: 'accept_necessary'        // 'settings' or 'accept_necessary'
              }
            },
            settings_modal: {
              title: 'Cookie preferences',
              save_settings_btn: 'Save settings',
              accept_all_btn: 'Accept all',
              reject_all_btn: 'Reject all',
              close_btn_label: 'Close',
              cookie_table_headers: [
                { col1: 'Name' },
                { col2: 'Domain' },
                { col3: 'Expiration' },
                { col4: 'Description' }
              ],
              blocks: [
                {
                  title: 'Cookie usage 📢',
                  description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/cookie-tajekoztato">Cookie Policy</a>.'
                }, {
                  title: 'Strictly necessary cookies',
                  description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                  toggle: {
                    value: 'necessary',
                    enabled: true,
                    readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                  }
                },
                {
                  title: "Third Party cookies - YouTube(Google)",
                  description:
                    'These cookies are set by YouTube to track the viewing of embedded videos. Detailed information about the service is available at the following links: <a href="https://policies.google.com/privacy?hl=hu">https://policies.google.com/privacy?hl=hu</a><br /><a href="https://support.google.com/youtube/answer/171780?hl=hu">https://support.google.com/youtube/answer/171780?hl=hu</a>',
                  toggle: {
                    value: "third-party_youtube",
                    enabled: true,
                    readonly: false, // cookie categories with readonly=true are all treated as "necessary cookies"
                  },
                }, {
                  title: 'More information',
                  description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/#contact">contact us</a>.',
                }
              ]
            }
          }
        },
      });

      this.$store.commit("cookies/setLanguage", this.$store.state.cookies.consent.getConfig('current_lang'));
    })
}