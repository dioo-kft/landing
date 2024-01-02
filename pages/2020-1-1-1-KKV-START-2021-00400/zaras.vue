<template>
  <b-container fluid>
    <page-section section-id="privacy-policy" title="Sajtóközlemény projekt zárásáról" id="nkfi-section">
      <b-col>
        <b-breadcrumb :items="items" />
        <p>
          Az Innovációs és Technológiai Minisztérium által a Nemzeti Kutatási, Fejlesztési és Innovációs Hivatal, mint
          kezelőszerv útján meghirdetett KKV START INNOVÁCIÓ pályázati kiírás keretében a DIOO Kft.
          2020-1.1.1-KKV-START-2021-00400 azonosító számon támogatási kérelmet nyújtott be, melyet az NKFI Alap
          támogatásra érdemesnek minősített.
        </p>
        <p class="font-weight-bold">
          A támogatás keretében megvalósított projekt címe:
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
          A projekt eredményei
        </h4>
        <p>
          Kutatásokat végeztünk magyarországi óvodákban, annak felmérésére, hogy milyen számítógéppel végzett méréseket
          alkalmaznak a gyakorlatban, valamint a legszükségesebb mérési területekről és mérési módszerekről, illetve az
          óvodapedagógusi gyakorlatokról és igényekről ezen területen.
        </p>
        <p>
          A felmérések alapján kidolgoztuk és digitális formába öntöttük a projekt alatt megvalósítani kívánt
          gyorsfelmérő-tesztet.
        </p>
        <p>
          A gyorsfelmérő-teszt első változatának elkészítése után a teszt alkalmazhatóságát és megfelelőségét 31
          magyarországi óvodával együttműködve ellenőriztük, javítottuk. A tesztelés alatt a feladatsor
          megfelelősége szakmai és használhatósági szempontból került véleményezésre a résztvevő pedagógusok által. Ezen
          felül a feladatsor gyermekekkel kitöltve is kipróbálásra került.
        </p>
        <p>
          A visszajelzések alapján elkészítettük a gyorsfelmérő-teszt második, javított verzióját, mely ismét a
          projektben együttműködést vállalt intézményekhez került kipróbálásra, véleményezésre.
        </p>
        <p>
          Az így kapott visszajelzések alapján a feladatsort a jövőben tovább fejlesztjük, finomítjuk az óvodák és
          pedagógusok igényei mentén.
        </p>
        <p style="text-align: right">
          <b-img src="~assets/img/NKFIA_infoblokk.png" fluid alt="NKFIA infoblokk" id="nkfi-info" />
        </p>
        <b-breadcrumb :items="items" />
      </b-col>
    </page-section>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Fejlesztések',
          to: '/2020-1-1-1-KKV-START-2021-00400/#'
        },
        {
          text: '2020-1-1-1-KKV-START-2021-00400',
          to: '/2020-1-1-1-KKV-START-2021-00400/#'
        },
        {
          text: 'Zárás',
          active: true
        },
      ]
      ,
    }
  },
  computed: {
    cookieConsent() {
      return this.$store.state.cookies.consent;
    },
  },
  methods: {
    showCookieConsent() {
      this.$store.state.cookies.consent.showSettings();
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