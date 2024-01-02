<template>
  <b-container fluid>
    <page-section section-id="cover">
      <div class="bg-shape">
        <page-cover />
      </div>
    </page-section>
    <page-section section-id="intro" :title="introTitle">
      <page-intro />
    </page-section>
    <page-section section-id="faq" :title="faqTitle">
      <b-col class="accordion" role="tablist" align-self="stretch">
        <b-card v-for="id in FAQ.length" :key="id" no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="'accordion-' + id" variant="info" class="faq-question">{{ FAQ[id - 1].question
            }}</b-button>
          </b-card-header>
          <b-collapse :id="'accordion-' + id" visible accordion="my-accordion" role="tabpanel">
            <b-card-body class="faq-answer">
              <b-card-text>{{ FAQ[id - 1].answer }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </page-section>
    <page-section section-id="testimonial" title="Rólunk mondták" align-self="stretch">
      <b-col>
        <testimonial-carousel />
      </b-col>
    </page-section>
    <page-section section-id="contact" title="Kapcsolat">
      <page-contact />
    </page-section>
  </b-container>
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
    introTitle() {
      return this.$store.getters['intro/getTitle'](this.lang);
    },
    faqTitle() {
      return this.$store.getters['faq/getTitle'](this.lang);
    },
    FAQ () {
      return this.$store.getters['faq/getQuestions'](this.lang);
    },
  },
}
</script>