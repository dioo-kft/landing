<template>
  <b-container fluid>
    <b-row class="page-section py-4 px-sm-3 justify-content-center">
      <!-- <b-row class="page-section py-4 px-sm-3 justify-content-center"> -->

      <b-col cols="2" class="d-none d-xl-block">
        <b-img src="~assets/img/tunder.png" fluid class="py-5 my-5" alt="DIOO tündér"></b-img>
      </b-col>
      <b-col class="page-content py-5 justify-content-center">
        <b-row class="d-sm-none">
          <b-col cols="4">
            <b-img src="~assets/img/tunder.png" fluid class="py-0 my-0" alt="DIOO tündér"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" md="1" class="d-none d-md-block d-xl-none">
            <b-img src="~assets/img/tunder.png" fluid class="py-0 my-0" alt="DIOO tündér"></b-img>
          </b-col>
          <b-col class="text-md-center page-section-title mb-4">
            <p>Köszönjük megrendelését!</p>
          </b-col>
          <b-col cols="2" md="1" class="d-none d-sm-block d-xl-none">
            <b-img src="~assets/img/tunder-mirror.png" fluid class="py-0 my-0" alt="DIOO tündér"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-md-center pb-3 px-4 intro-text" style="font-size: 1rem;">
            <p>Örömmel fogadtuk, hogy idén is a DIOO-val folytatják a munkát.</p>
            <p>Mihamarabb megküldjük a megrendelő alapján készített szerződéstervezetet, illetve a további teendőket.</p>
          </b-col>
        </b-row>
        <b-row class="justify-content-center mt-md-5 pt-md-5">
          <b-col class="text-md-center mb-5 mt-md-5 py-3 px-4 quote-text" cols="12" style="font-size: 1rem;">
            <q class="">Az embereknek nem ugyanazt jelentik a csillagaik. Akik úton járnak, azoknak vezetőül szolgálnak a csillagok. Másoknak nem egyebek csöppnyi kis fényeknél. Ismét mások, a tudósok számára problémák. Az üzletemberem szemében aranyból voltak. A csillagok viszont mind-mind hallgatnak. De neked olyan csillagaid lesznek, amilyenek senki másnak. (...) Mert én ott lakom majd valamelyiken, és ott nevetek majd valamelyiken: ha éjszakánként fölnézel az égre, olyan lesz számodra, mintha minden csillag nevetne. Neked, egyedül neked, olyan csillagaid lesznek, amik nevetni tudnak!</q>
            <p class="quote-author">— Antoine de Saint-Exupéry: A kis herceg</p>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="d-none d-xl-block">
        <b-img src="~assets/img/tunder-mirror.png" fluid class="py-5 my-5" alt="DIOO tündér"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      form: {
        email: '',
        name: '',
        coname: '',
        coaddr: '',
        tel: '',
        date: '',
        msg: '',
        gdpr: []
      },
    };
  },
  methods: {
    enableYoutubeCookies() {
      this.$store.state.cookies.consent.accept(
        this.$store.state.cookies.youtube.toggle.value
      );
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
};
</script>

<style>
.page-footer {
    position:fixed;
    bottom:0;
}
.hr5 {
  border: 0;
  border-top: medium double #CCC;
  height: 1px;
  overflow: visible;
  padding: 0;
  color: #CCC;
  text-align: center;
}

.hr5::after {
  content: "VAGY";
  display: inline-block;
  position: relative;
  top: -0.8em;
  font-size: 1.4em;
  padding: 0 0.3em;
  background: var(--light-bg-color);
}

.quote-text {
    font-size: 1.15rem;
    color: #7d7d6c;
    font-weight: 300;
}
</style>