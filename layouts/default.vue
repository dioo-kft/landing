<template>
  <div>
    <navigation-bar id="navigation-bar"/>
    <Nuxt />
    <page-footer />
  </div>
</template>

<script>
export default {
  data() {return {}},
  
  mounted: function () {
    this.$configureCookieSettings()
  },
};
</script>
