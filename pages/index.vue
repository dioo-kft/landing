<template>
  <div>
    <navigation-bar />

    <b-container fluid>
          <page-section>
              <page-cover />
          </page-section>
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
