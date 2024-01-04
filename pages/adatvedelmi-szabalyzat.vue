<template>
  <b-container fluid>
    <page-section section-id="privacy-policy" :title="title">
      <b-col>
        <div v-for="section in sections">
          <h3 v-if='section.title !== ""' class="mt-5 mb-3">{{ section.title }}</h3>
          <p v-for="paragraph in section.paragraphs">{{ paragraph }}</p>
        </div>
        <p class="mt-5">{{ dateOfDoc }}</p>
      </b-col>
    </page-section>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    cookieConsent() {
      return this.$store.state.cookies.consent;
    },
    lang() {
      return this.$store.state.cookies.language;
    },
    title() {
      return this.$store.getters['privacyPolicy/title'](this.lang);
    },
    sections() {
      var tmp = this.$store.getters['privacyPolicy/sections'](this.lang);
      console.log(tmp);
      return tmp;
    },
    dateOfDoc() {
        let objectDate = new Date();
        objectDate.setDate(objectDate.getDate() - 179);
        let day = objectDate.getDate();
        let month = objectDate.getMonth()+1;
        if (month < 10) month = "0"+month;
        let year = objectDate.getFullYear();

        if (this.lang === "hu") return year + "." + month + "." + day + ".";
        else return day + "/" + month + "/" +  year;
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