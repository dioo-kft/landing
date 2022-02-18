<template>
  <b-container fluid>
    <page-section section-id="cookies" title="GDPR Adatvédelmi Szabályzat">
      <b-col>
        <p>
          Probléma az oldal betöltése közben.
          Próbálja meg a frissítés gombbal az oldalt újra betölteni!
        </p>
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