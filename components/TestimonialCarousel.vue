<template>
  <b-col>
    <b-carousel id="carousel" v-model="slide" interval="1000000" controls indicators img-width="1024" img-height="480">
      <b-carousel-slide v-for="id in reviews.length" :key="id" :caption="reviews[id - 1].title" img-blank
        img-alt="Blank image">
        <p> {{ reviews[id - 1].quote }} </p>
        <p class="quote-author"> — {{ reviews[id - 1].author }} </p>
      </b-carousel-slide>
    </b-carousel>
  </b-col>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    lang() {
      return this.$store.state.cookies.language;
    },
    reviews() {
      return this.$store.getters['testimonials/cards'](this.lang);
    },
  }
}
</script>