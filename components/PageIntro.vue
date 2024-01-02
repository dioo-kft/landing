<template>
  <div class="page-intro">
    <b-row>
      <b-col class="text-md-center pb-3 px-4 intro-text">
        <p v-for="paragraph in introText">
          {{paragraph}}
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col align-self="stretch">
        <b-overlay
          :show="!isYoutubeEnabled"
          opacity="1"
          variant="light"
          style="color: black"
        >
          <b-embed
            v-if="isYoutubeEnabled"
            type="iframe"
            aspect="16by9"
            src="https://www.youtube-nocookie.com/embed/7XFOUAdqHmU"
            allowfullscreen
          ></b-embed>
          <b-img
            v-else
            src="https://via.placeholder.com/900x506?text=."
            fluid
            alt="DIOO Bemutató videó"
          ></b-img>
          <template #overlay>
            <div class="text-center p-3 overlay-content">
              <b-icon
                icon="exclamation-triangle-fill"
                font-scale="3"
                animation="cylon"
                class="d-none d-sm-inline-block"
              ></b-icon>
              <p id="cancel-label">
                A videó megtekintéséhez kérem engedélyezze a YouTube által
                használt sütiket! ↓
              </p>
              <p style="font-size: 12px">
                Vagy a videót a YouTube oldalán is elérheti a
                <a href="https://www.youtube.com/watch?v=7XFOUAdqHmU"
                  >https://www.youtube.com/watch?v=7XFOUAdqHmU</a
                >
                linken.
              </p>
              <b-button
                ref="cancel"
                variant="outline-success"
                size="sm"
                @click="enableYoutubeCookies"
              >
                YouTube által használt sütik engedélyezése
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
      introText: this.$store.state.introText,
    };
  },
  computed: {
    isYoutubeEnabled() {
      return this.$store.state.cookies.youtube.toggle.enabled;
    },
    src() {
      if (this.$store.state.cookies.youtube.toggle.enabled === true) {
        return "https://www.youtube.com/embed/7XFOUAdqHmU";
      }
      return "";
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