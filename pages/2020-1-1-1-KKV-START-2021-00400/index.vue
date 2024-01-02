<template>
  <b-container fluid>
    <page-section section-id="privacy-policy" title="Digitális gyorsfelmérő teszt" id="nkfi-section">
      <b-col>
        <b-row>
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
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card-group>
              <b-card title="Projekt előrehaladása" sub-title="2022-03-01" img-src="~assets/img/fejlesztes_gyima/7.jpg"
                img-alt="Image" img-top tag="article" class="mb-2">
                <b-card-text>
                  A projekt célkitűzése óvodáskorú gyermekek bemeneti / kimeneti vagy kontroll mérését szolgáló
                  digitális
                  felmérés megvalósítása, mely hatékony segítséget nyújt a pedagógusoknak az óvod...
                </b-card-text>
                <b-button pill class="button-outline-brand-color"
                  to="/2020-1-1-1-KKV-START-2021-00400/elorehaladas">Tovább
                  olvasok</b-button>
              </b-card>
              <b-card title="Sajtóközlemény Projekt Zárásáról" sub-title="2023-02-28"
                img-src="~assets/img/fejlesztes_gyima/4.jpg" img-alt="Image" img-top tag="article" class="mb-2">
                <b-card-text>
                  A felmérések alapján kidolgoztuk és digitális formába öntöttük a projekt alatt megvalósítani kívánt
                  gyorsfelmérő-tesztet, mley alkalmazhatóságát 31 magyarországi óvodával együttműködve ...
                </b-card-text>
                <b-button pill class="button-outline-brand-color" to="/2020-1-1-1-KKV-START-2021-00400/zaras">Tovább
                  olvasok</b-button>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img right src="~assets/img/NKFIA_infoblokk.png" fluid alt="NKFIA infoblokk" id="nkfi-info" />
          </b-col>
        </b-row>
      </b-col>
    </page-section>
  </b-container>
</template>

<script>
export default {
  computed: {
    cookieConsent() {
      return this.$store.state.cookies.consent;
    },
  },
  methods: {
    showCookieConsent() {
      this.$store.state.cookies.consent.showSettings();
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