<template>
  <b-col>
    <b-carousel
      id="carousel"
      v-model="slide"
      interval="1000000"
      controls
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide v-for="id in reviews.length" :key="id" :caption="reviews[id-1].title" img-blank img-alt="Blank image">
        <p> {{ reviews[id-1].quote }} </p>
        <p class="quote-author"> — {{ reviews[id-1].author }} </p>
      </b-carousel-slide>
    </b-carousel>
  </b-col>
</template>

<script>
  export default {
    data() {
      return {
         reviews: [
           {
             title: "Napi foglalkozás",
             quote: "A hagyományos óvodapedagógiai módszerek kiegészítéseként tökéletesen sikerült beépíteni a DIOO-t az óvodások mindennapjaiba, akik így egyre otthonosabban mozognak az elektronikus térben is.",
             author: "Hajdúnánás, óvodapedagógus",
           },
           {
             title: "Okosjáték",
             quote: "[…] fantasztikus értéket láttam meg benne, nemcsak, mint fejlesztő eszköz, hanem mint egy nagyon- nagyon okos, értékes napi játék.",
             author: "Gyöngyös, pedagógus, szakértő",
           },
           {
             title: "Játékuniverzum",
             quote: "Az érintőképernyős eszköz egy digitális játékuniverzumot rejt magába, s úgy tanítja a gyerekeket, hogy mindezt játéknak élik meg.",
             author: "Balatonföldvár, intézményvezető",
           },
         ],
      }
    },
  }
</script>