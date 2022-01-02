<template>
  <div>
    <navigation-bar />

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
  name: 'IndexPage'
}
</script>
