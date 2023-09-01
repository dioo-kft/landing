<template>
  <div>
    <Nuxt />
    <b-container fluid class="page-footer my-0 py-3">
      <b-row align-h="between">
        <b-col cols="auto">
          <p>Copyright © 2023 DIOO Digitális Oktató | Minden jog fenntartva.</p>
        </b-col>
        <b-col cols="auto">
          <b-row>
            <b-col cols="auto">
              <nuxt-link to="/cookie-tajekoztato">Cookie Tájékoztató</nuxt-link>
            </b-col>
            <b-col cols="auto">
              <nuxt-link to="/adatvedelmi-szabalyzat">GDPR Adatvédelmi Szabályzat</nuxt-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() { },

  mounted: function () {
    var store = this.$store;

    // obtain plugin
    // var cc = initCookieConsent();
    this.$store.state.cookieConsent.run({
      current_lang: "hu",
      autoclear_cookies: true,
      page_scripts: true,
      force_consent: true,
      // remove_cookie_tables: false             // default: false
      // cookie_name: 'cc_cookie',               // default: 'cc_cookie'

      onFirstAction: function (user_preferences, cookie) {
        // This function will be executed only once, when the user takes the first action (accept/reject).
        user_preferences.accepted_categories.forEach((element) => {
          if (element === store.state.cookies.youtube.toggle.value) {
            store.commit("enableYoutubeCookies");
          }
        });

        user_preferences.rejected_categories.forEach((element) => {
          if (element === store.state.cookies.youtube.toggle.value) {
            store.commit("disableYoutubeCookies");
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
          store.commit("enableYoutubeCookies");
        } else {
          store.commit("disableYoutubeCookies");
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
          store.commit("enableYoutubeCookies");
          // console.log("enabling youtube cookies, store:", store.state.cookies.youtube.toggle)
        } else {
          store.commit("disableYoutubeCookies");
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
      },
    });
  },
};
</script>
