<template>
  <b-container fluid class="page-footer my-0 py-3">
    <b-row align-h="between">
      <b-col cols="auto">
        <p>Copyright © {{year}} {{ copyright }}</p>
      </b-col>
      <b-col cols="auto">
        <b-row>
          <b-col v-for="item in links" v-bind:key="item.id" cols="auto">
            <a :href="item.link">{{ item.title }}</a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {
    lang() {
      return this.$store.state.cookies.language;
    },
    copyright() {
      return this.$store.getters['footer/copyright'](this.lang);
    },
    links() {
      return this.$store.getters['footer/links'](this.lang);
    },
  },
}
</script>