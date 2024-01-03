<template>
  <div class="page-contact">
    <b-row class="mb-3 m-1 m-sm-0" align-h="around">
      <b-col cols="12" md="7" class="page-contact-col-bg px-3 py-5 p-sm-5 mb-5 mb-md-0">
        <b-row align-h="between">
            <b-col cols="auto" style="font-size: 1.5rem">{{ emailTitle }}</b-col>
            <b-col cols="auto">
                <b-link href="https://www.facebook.com/diootanito">
                    <b-icon class="contact-facebook-icon" icon="facebook"></b-icon>
                </b-link>
            </b-col>
        </b-row>
        <b-row class="mb-3">
            <b-col cols="auto" class="contact-email">
                {{ emailDescription }} <a href="mailto:info@dioo.hu">&#105;&#110;&#102;&#111;&#064;&#100;&#105;&#111;&#111;&#046;&#104;&#117;</a>
            </b-col>
        </b-row>
        <b-row align-h="between">
          <b-col v-for="id in agents.length" :key="id" cols="auto">
            <h5>{{ agents[id - 1].area }}</h5>
            <p>{{ labelAgentName }} {{ agents[id - 1].name }}</p>
            <p style="margin-bottom: 0; padding-bottom: 0">{{ labelPhone }} {{ agents[id - 1].phone }}</p>
            <p style="font-size: 12px">{{ labelWhenToCall }}</p>
          </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col cols="auto" class="mt-4">
              <b-button pill class="button-light-inverted" href="https://forms.clickup.com/f/4bd9e-2981/GXK29I7X40UVA9P2H3">
                {{ callBack }}
              </b-button>
            </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="4" align-self="stretch" class="page-contact-col-bg px-3 py-5">
        <b-row align-content="between" align-h="center" class="h-100">
          <b-col cols="auto" class="my-2 my-md-0">
            <p style="text-align: center;" id="load-wrn-text">{{ buttonsDescription }}</p>
          </b-col>
          <b-col v-for="item in buttons" v-bind:key="item.id" cols="12" sm="auto" md="12" class="my-2 my-md-0">
            <b-button pill class="button-light-inverted w-100" :href="item.link">
              {{ item.text }}
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
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
    emailTitle() {
      return this.$store.getters['contact/emailTitle'](this.lang);
    },
    emailDescription() {
      return this.$store.getters['contact/emailDescription'](this.lang);
    },
    agents() {
      return this.$store.getters['contact/agents'](this.lang);
    },
    labelAgentName() {
      return this.$store.getters['contact/labelAgentName'](this.lang);
    },
    labelWhenToCall() {
      return this.$store.getters['contact/labelWhenToCall'](this.lang);
    },
    labelPhone() {
      return this.$store.getters['contact/labelPhone'](this.lang);
    },
    buttonsDescription() {
      return this.$store.getters['contact/buttonsDescription'](this.lang);
    },
    callBack() {
      return this.$store.getters['buttons/callBack'](this.lang);
    },
    buttons() {
      return this.$store.getters['buttons/buttons'](this.lang);
    },
  },
}
</script>
