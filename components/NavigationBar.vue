<template>
  <b-navbar sticky toggleable="lg">
    <b-navbar-brand href="#top">
      <img src="~/assets/img/DIOO_name-navbar.png" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav pills card-header slot="header" v-b-scrollspy="150">
            <b-nav-item href="#intro">Mi a DIOO?</b-nav-item>
            <b-nav-item href="#contact">Kapcsolat</b-nav-item>
        </b-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>