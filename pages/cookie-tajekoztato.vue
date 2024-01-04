<template>
  <b-container fluid>
    <page-section section-id="cookies" :title="title">
      <b-col>
        <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
        <b-button pill class="button-brand-color my-3" @click="showCookieConsent">{{ cookieSettings }}</b-button>
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
    lang() {
      return this.$store.state.cookies.language;
    },
    cookieSettings() {
      return this.$store.getters['buttons/cookieSettings'](this.lang);
    },
    title() {
      return this.$store.getters['cookiePolicy/title'](this.lang);
    },
    paragraphs() {
      return this.$store.getters['cookiePolicy/paragraphs'](this.lang);
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