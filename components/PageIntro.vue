<template>
  <div class="page-intro">
    <b-row>
      <b-col class="text-md-center pb-3 px-4 intro-text">
        <p v-for="paragraph in description">
          {{ paragraph }}
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col align-self="stretch">
        <b-overlay :show="!isYoutubeEnabled" opacity="1" variant="light" style="color: black">
          <b-embed v-if="isYoutubeEnabled" type="iframe" aspect="16by9" :src="videoSrc" allowfullscreen></b-embed>
          <b-img v-else src="https://via.placeholder.com/900x506?text=." fluid :alt="videoAlt"></b-img>
          <template #overlay>
            <div class="text-center p-3 overlay-content">
              <b-icon icon="exclamation-triangle-fill" font-scale="3" animation="cylon"
                class="d-none d-sm-inline-block"></b-icon>
              <p id="cancel-label">{{ videoCookieWarning }}</p>
              <p style="font-size: 12px">
                <template>
                  <div v-html="videoCookieAlt"></div>
                </template>
              </p>
              <b-button ref="cancel" variant="outline-success" size="sm" @click="enableYoutubeCookies">
                {{ videoEnableCookiesButton }}
              </b-button>
            </div>
          </template>
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: this.$store.state.intro.video.link,
    };
  },
  computed: {
    isYoutubeEnabled() {
      return this.$store.state.cookies.youtube.toggle.enabled;
    },
    lang() {
      return this.$store.state.cookies.language;
    },
    description() {
      return this.$store.getters['intro/getDescription'](this.lang);
    },
    videoAlt() {
      return this.$store.getters['intro/getVideoAlt'](this.lang);
    },
    videoCookieWarning() {
      return this.$store.getters['intro/getVideoCookieWarning'](this.lang);
    },
    videoCookieAlt() {
      return this.$store.getters['intro/getVideoCookieAlt'](this.lang);
    },
    videoEnableCookiesButton() {
      return this.$store.getters['intro/getVideoEnableCookiesButton'](this.lang);
    },
  },
  methods: {
    enableYoutubeCookies() {
      this.$store.state.cookies.consent.accept(
        this.$store.state.cookies.youtube.toggle.value
      );
    },
  },
};
</script>