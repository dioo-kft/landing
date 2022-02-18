<template>
  <b-container fluid>
    <page-section section-id="cookies" title="GDPR Adatvédelmi Szabályzat">
      <b-col>
        <p>
          TODO
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