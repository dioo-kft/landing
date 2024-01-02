<template>
  <b-container fluid>
    <b-row class="page-section py-4 px-sm-3 justify-content-center">
      <!-- <b-row class="page-section py-4 px-sm-3 justify-content-center"> -->

      <b-col cols="2" class="d-none d-xl-block">
        <b-img src="~assets/img/tunder.png" fluid class="py-5 my-5" alt="DIOO tündér"></b-img>
      </b-col>
      <b-col class="page-content py-5 justify-content-center">
        <b-row>
          <b-col cols="2" md="1" class="d-none d-sm-block d-xl-none">
            <b-img src="~assets/img/tunder.png" fluid class="py-0 my-0" alt="DIOO tündér"></b-img>
          </b-col>
          <b-col class="text-center page-section-title mb-4">
            <p>Mi a DIOO?</p>
          </b-col>
          <b-col cols="2" md="1" class="d-xl-none">
            <b-img src="~assets/img/tunder-mirror.png" fluid class="py-0 my-0" alt="DIOO tündér"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-md-left pb-3 px-4 intro-text" style="font-size: 1rem;" cols="12" md="7" lg="6">
            <p v-for="paragraph in introText">
              {{ paragraph }}
            </p>
          </b-col>
          <b-col align-self="stretch">
            <b-overlay :show="!isYoutubeEnabled" opacity="1" variant="light" style="color: black">
              <b-embed v-if="isYoutubeEnabled" type="iframe" aspect="16by9"
                src="https://www.youtube-nocookie.com/embed/7XFOUAdqHmU" allowfullscreen></b-embed>
              <b-img v-else src="https://via.placeholder.com/900x506?text=." fluid alt="DIOO Bemutató videó"></b-img>
              <template #overlay>
                <div class="text-center p-3 overlay-content">
                  <b-icon icon="exclamation-triangle-fill" font-scale="3" animation="cylon"
                    class="d-none d-sm-inline-block"></b-icon>
                  <p id="cancel-label">
                    A videó megtekintéséhez kérem engedélyezze a YouTube által
                    használt sütiket! ↓
                  </p>
                  <p style="font-size: 12px">
                    Vagy a videót a YouTube oldalán is elérheti a
                    <a href="https://www.youtube.com/watch?v=7XFOUAdqHmU">https://www.youtube.com/watch?v=7XFOUAdqHmU</a>
                    linken.
                  </p>
                  <b-button ref="cancel" variant="outline-success" size="sm" @click="enableYoutubeCookies">
                    YouTube által használt sütik engedélyezése
                  </b-button>
                </div>
              </template>
            </b-overlay>
          </b-col>
        </b-row>
        <b-row align-h="start">
          <b-col align-self="stretch">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block variant="info" :class="faqVisible ? 'faq-question' : 'collapsed faq-question'"
                  :aria-expanded="faqVisible ? 'true' : 'false'" aria-controls="accordion-faq"
                  @click="faqVisible = !faqVisible">Gyakran Ismételt
                  Kérdések</b-button>
              </b-card-header>
              <b-collapse :id="'accordion-faq'" v-model="faqVisible">
                <b-card-body class="faq-answer px-0">
                  <b-col class="accordion px-0" role="tablist" align-self="stretch">
                    <b-card v-for="id in items.length" :key="id" no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle="'accordion-' + id" variant="info" class="faq-question">{{ items[id -
                          1].question }}</b-button>
                      </b-card-header>
                      <b-collapse visible :id="'accordion-' + id" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="faq-answer">
                          <b-card-text>{{ items[id - 1].answer }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </b-col>
                </b-card-body>
              </b-collapse>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="text-center page-section-title mt-3 justify-content-center">
          <b-col>
            <p>Még több kérdése van?</p>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col class="text-md-left pb-3 px-4 intro-text" cols="12" style="font-size: 1rem;">
            <b-button pill class="button-light-inverted w-100" style="font-weight: 500;"
              href="https://forms.clickup.com/f/4bd9e-3121/C0VWX3U1BMFPYUQKSF">
              Visszahívást kérek!
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <hr class="hr5">
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col class="text-center py-3 px-4 intro-text" cols="12" style="font-size: 1rem;">
            <p class="contact-email">Üzenjen nekünk az <a
                href="mailto:info@dioo.hu">&#105;&#110;&#102;&#111;&#064;&#100;&#105;&#111;&#111;&#046;&#104;&#117;</a>
              email címen!
            </p>
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
      introText: this.$store.state.introText,
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
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      items: this.$store.state.faq,
      faqVisible: false,
    };
  },
  computed: {
    isYoutubeEnabled() {
      return this.$store.state.cookies.youtube.toggle.enabled;
    },
    src() {
      if (this.$store.state.cookies.youtube.toggle.enabled === true) {
        return "https://www.youtube.com/embed/7XFOUAdqHmU";
      }
      return "";
    },
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
}</style>