<template>
  <b-container fluid>
    <page-section section-id="privacy-policy" title="Digitális gyorsfelmérő teszt" id="nkfi-section">
      <b-col>
        <p>
          Az Innovációs és Technológiai Minisztérium által a Nemzeti Kutatási, Fejlesztési és Innovációs Hivatal, mint
          kezelőszerv útján meghirdetett KKV START INNOVÁCIÓ pályázati kiírás keretében a DIOO Kft.
          2020-1.1.1-KKV-START-2021-00400 azonosító számon támogatási kérelmet nyújtott be, melyet az NKFI Alap
          támogatásra érdemesnek minősített.
        </p>
        <p class="font-weight-bold">
          A támogatás keretében megvalósítani kívánt projekt címe:
        </p>
        <p>
          GYORSFELMÉRŐ ISKLOLAALKALMASSÁGI MÉRŐMÓDSZER KUTATÁSA, SZOFTVER FEJLESZTÉSE ÉS TESZTELÉSE ÓVODÁKBAN (GYIMA)
        </p>
        <h4>
          A projekt célkitűzése
        </h4>
        <p>
          A projekt célkitűzése óvodáskorú gyermekek bemeneti / kimeneti vagy kontroll mérését szolgáló digitális
          felmérés megvalósítása, mely hatékony segítséget nyújt a pedagógusoknak az óvodai nevelés idején a
          fejlesztendő területek kijelölésében, a gyermek egyéni fejlesztési tervének kialakításában, valamint lehetővé
          teszi a fejlődés időbeli követését és segíti a gyermek iskolakészségének megállapítását.
        </p>
        <p>
          A pedagógus részéről semmilyen informatikai tudást nem igényel sem a teszt indítása, lefolytatása, sem a
          kiértékelése.
        </p>
        <p>
          A kifejlesztett egyedi mérőmódszer az óvodáskorú felhasználók tesztelését kép és/vagy hang információkon
          keresztül végzi, a felhasználók szintjének és képességeinek megfelelően kommunikál. Írás, olvasás tudásra
          nincs szükség a teszt elvégzéséhez.
        </p>
        <h4>
          Hol tartunk most?
        </h4>
        <p>
          Kutatások magyarországi óvodákban, annak felmérésére, hogy milyen számítógéppel végzett méréseket alkalmaznak
          a gyakorlatban, melyről általánosságban megállapítható, hogy még nincs gyakorlata nálunk. Másrészt a
          legszükségesebb mérési területek és mérési módszerek, illetve az óvodapedagógusi gyakorlatok és igények
          kutatására alapozva.
        </p>
        <p>
          A gyorsfelmérő-teszt kidolgozása a előbbiekben említett kutatások alapján, valamint annak digitális formába
          öntése, programozása, tesztelése.
        </p>
        <b-img right src="~assets/img/NKFIA_infoblokk.png" fluid alt="NKFIA infoblokk" id="nkfi-info"></b-img>
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

<style>
#nkfi-section .page-section-title,
h4,
.font-weight-bold {
  color: #8da460;
}

#nkfi-info {
  max-height: 200px;
}
</style>