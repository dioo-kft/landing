<template>
  <b-navbar sticky toggleable="lg">
    <b-navbar-brand>
      <nuxt-link to="/">
        <img src="~/assets/img/DIOO_name-navbar.png" />
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto" v-b-scrollspy="0">
          <b-nav-item>
            <nuxt-link to="/#intro">Mi a DIOO?</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/#faq">Gy.I.K.</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/2020-1-1-1-KKV-START-2021-00400">Fejlesztések</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/#contact">Kapcsolat</nuxt-link>
          </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>