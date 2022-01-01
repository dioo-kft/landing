<template>
  <div :style="userStyle">
    <navigation-bar />
    
    <b-container class="color-picker">
      <b-row>
        <b-col>
          <b-form-group label="Márkaszín" label-for="input-1">
            <b-form-input id="input-1" v-model="form.brandColor" type="color" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Világos szín 1" label-for="input-2">
            <b-form-input id="input-2" v-model="form.lightBg" type="color" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Világos szín 2" label-for="input-3">
            <b-form-input id="input-3" v-model="form.lightAcc" type="color" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Sötét szín" label-for="input-4">
            <b-form-input id="input-4" v-model="form.darkBg" type="color" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Kiemelő szín" label-for="input-5">
            <b-form-input id="input-5" v-model="form.darkAcc" type="color" />
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
        <b-overlay show="true" opacity="0">
          <page-section>
              <page-cover />
          </page-section>
          <template #overlay>
            <div class="page-cover-stamp">
              <b-img src="~assets/img/innovacios-nagydij_stamp.png" fluid alt="Responsive image"></b-img>
            </div>
          </template>
        </b-overlay>
      <page-section id="intro">
        <page-intro />
      </page-section>
      <page-section id="contact">
        <page-contact />
      </page-section>
    </b-container>
    
    <page-footer />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          brandColor: '#FDD327',
          lightBg: '#F4F6F5',
          lightAcc: '#9DAABB',
          darkBg: '#233245',
          darkAcc: '#B32737',
        },
      }
    },
    computed: {
      userStyle () {
        return {
          '--brand-color': this.form.brandColor,
          '--light-bg-color': this.form.lightBg,
          '--light-accent-color': this.form.lightAcc,
          '--dark-accent-color': this.form.darkAcc,
          '--dark-bg-color': this.form.darkBg,
        }
      }
    },
  }
</script>

<style>
/* :root {
  --brand-color: var(--brand-color),
} */
</style>