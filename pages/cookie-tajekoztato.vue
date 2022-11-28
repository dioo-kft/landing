<template>
  <b-container fluid>
    <page-section section-id="cookies" title="Cookie(süti) tájékoztató">
      <b-col>
        <p>
          Az adatkezelés célja: a felhasználók azonosítása, egymástól való megkülönböztetése, a felhasználók aktuális munkamenetének azonosítása, az annak során megadott adatok tárolása, az adatvesztés megakadályozása, a felhasználók azonosítása, nyomon követése, webanalitikai mérések.
        </p>
        <p>
          A cookie-k (vagy sütik) alkalmazásával az Adatkezelő a következő
          személyes adatokat kezeli érdeklődési kör információk, szokások,
          preferenciák (böngészési előzmények alapján), illetve a rendszerek
          működtetése során technikailag rögzítésre kerülő adatok: a Felhasználó
          bejelentkező számítógépének azon adatai, melyek a Szolgáltatás
          igénybevétele során generálódnak, és amelyeket az Adatkezelők
          rendszere a technikai folyamatok automatikus eredményeként rögzít. Az
          automatikusan rögzítésre kerülő adatokat a rendszer a Felhasználó
          külön nyilatkozata vagy cselekménye nélkül a belépéskor, illetve
          kilépéskor automatikusan naplózza.
        </p>
        <p>
          Az adatkezelés jogalapja: az érintett önkéntes hozzájárulása GDPR 6.
          Cikk (1) bek a) pont.
        </p>
        <p>
          A kezelt adatok köre: azonosítószám, dátum, időpont, valamint az
          előzőleg meglátogatott oldal, valamint a weboldalon található
          sütinyilatkozatban, az egyes sütik esetén felsorolt adatok.
        </p>
        <p>
          A sütit a felhasználó képes törölni saját számítógépéről, illetve
          letilthatja böngészőjében a sütik alkalmazását. A cookie-k
          alkalmazásának tiltásával a Felhasználó tudomásul veszi, hogy cookie
          nélkül az adott oldal működése nem teljes értékű A sütik kezelésére
          általában a böngészők beállítások menü alatt, cookie, süti vagy
          nyomkövetés megnevezéssel van lehetőség.
        </p>
        <p>
          A süti a webszerver által küldött, változó tartalmú, alfanumerikus
          információ csomag, mely a felhasználó számítógépén rögzül és előre
          meghatározott érvényességi ideig tárolásra kerül. A cookie-k
          alkalmazása lehetőséget biztosít a látogató egyes adatainak
          lekérdezésére, valamint internethasználatának nyomon követésére. A
          cookie-k segítségével tehát pontosan meghatározható az érintett
          felhasználó érdeklődési köre, internet használati szokásai,
          honlap-látogatási története. Mivel a sütik egyfajta címkeként
          működnek, melyekkel a weboldal felismerheti az oldalra visszatérő
          látogatót, alkalmazásukkal az adott oldalon érvényes felhasználónév,
          jelszó is tárolható. Amennyiben a honlap látogatás során a felhasználó
          böngészője visszaküldi a merevlemezre korábban elmentett cookie-t, az
          azt küldő szolgáltató összekapcsolhatja az aktuális látogatást a
          korábbiakkal, azonban mivel a cookie-k a domain-hez kötődnek, erre
          kizárólag saját tartalma tekintetében képes. A sütik önmagukban a
          felhasználó azonosítására nem képesek, kizárólag a látogató
          számítógépének felismerésére alkalmasak.
        </p>
        <p>
          A sütik használatához való hozzájárulását bármikor megváltoztathatja.
        </p>
        <b-button
          pill
          class="button-brand-color my-3"
          @click="showCookieConsent"
          >Cookie(süti) beállítások módosítása</b-button
        >
      </b-col>
    </page-section>
  </b-container>
</template>

<script>
export default {
  computed: {
    cookieConsent() {
      return this.$store.state.cookieConsent;
    },
  },
  methods: {
    showCookieConsent() {
      this.$store.state.cookieConsent.showSettings();
      console.log("show cookie consent");
    },
  },
};
</script>