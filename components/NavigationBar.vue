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
        <b-nav-text v-for="item in menuItems" :key="item.id">
          <b-nav-item>
            <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
          </b-nav-item>
        </b-nav-text>
        <b-nav-text>
        <b-nav-item>
          <b-button class="button-language" @click="toggleLang">
            <img v-if='lang === "en"' class="language-button-img" src="~/assets/img/lang_button_hu.svg" />
            <img v-else class="language-button-img" src="~/assets/img/lang_button_en.svg" />
          </b-button>
        </b-nav-item>
      </b-nav-text>
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
    lang() {
      return this.$store.state.cookies.language;
    },
    menuItems() {
      return this.$store.getters['header/menuItems'](this.lang);
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

<style>
.button-language {
  background-color:var(--brand-color);
  border-color: var(--brand-color);
  padding: 0;
}

.button-language:hover {
  background-color:var(--brand-color);
  border-color: var(--brand-color);
}

.language-button-img {
  max-width: 100px;
  width: 75px;
  border-radius: 4px;
}
</style>