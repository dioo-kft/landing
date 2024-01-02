<template>
  <b-navbar sticky toggleable="lg">
    <b-navbar-brand>
      <nuxt-link to="/">
        <img src="~/assets/img/DIOO_name-navbar.png" />
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto" v-b-scrollspy="0">
          <b-nav-item>
            <nuxt-link to="/#intro">Mi a DIOO?</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/#faq">Gy.I.K.</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/2020-1-1-1-KKV-START-2021-00400">Fejlesztések</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/#contact">Kapcsolat</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <b-button
          pill
          class="button-brand-color my-1"
          @click="toggleLang"
          >{{ lang === "hu" ? "en" : "hu" }}</b-button>
          </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    lang () {
      return this.$store.state.cookies.language;
    },
  },
  methods: {
    toggleLang() {
      if (this.lang === "en") this.$store.commit("cookies/setLanguage", "hu");
      else this.$store.commit("cookies/setLanguage", "en");
    },
  },
}
</script>