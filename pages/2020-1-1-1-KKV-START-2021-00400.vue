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
          Az elmúlt időszakban annak felmérését végeztük, hogy milyen az óvodák számítástechnikai felszereltsége,
          illetve milyen mértékű nyitottság, igény mutatkozik a gyermekek képességfejlesztésének és -felmérésének
          digitális támogatására.
        </p>
        <p>
          Azt tapasztaltuk, hogy évről évre szélesedik a digitális eszközök óvodai alkalmazásának területe. Egyre többen
          alkalmaznak interaktív táblát, tabletet, kifejezetten óvodai tanulási tevékenység támogatására fejlesztett
          robotokat, illetve vezetnek be - a napi pedagógusi tevékenységet támogató - alkalmazásokat, pl. e-naplót,
          mellyel egyre inkább biztosítottá válik az intézmények digitális támogatásának felkészültségbeli és technikai
          háttere.
        </p>
        <p>
          Kutatómunkát végeztünk arról is, hogy alkalmaznak-e digitális mérést a gyermeki képességek feltérképezésére a
          magyarországi óvodák.
        </p>
        <p>
          Bár alkalmazott digitális mérési eljárással nem találkoztunk, egyértelműen megjelent az objektív
          képességmérés, a mérés standardizálásának igénye, egyre több intézmény keresi a statisztikával alátámasztott
          fejlődéskövetés lehetőségét is. Az általunk fejlesztett gyorsfelmérő ennek az igénynek a lefedésére készül.
        </p>
        <p>
          Felmértük a legfontosabb mérési területeket és a digitális mérősor feladatigényeit, ami alapján elkészültünk a
          feladatsor programozásával. Belső tesztelést követően pedig elkészültünk a felhasználói tesztelésre alkalmas
          feladatsor első változatával. 31 tesztóvoda részvételével, melyet ezúton is szeretnénk megköszönni Nekik, megtörtént
          a gyorsfelmérő gyakorlati kipróbálása és minősítése.
</p>
<p>
          Az óvodapedagógusi visszajelzések alapján módosítottuk a
          feladatokat szakmai és felhasználói szempontból is, így elkészült a program második, a gyermeki képességmérés
          igényeihez jobban illeszkedő változata. Jelenleg ennek a változatnak a kiértékelése zajlik a tesztóvodákban.
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