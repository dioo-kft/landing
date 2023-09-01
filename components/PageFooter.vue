<template>
  <b-container fluid class="page-footer my-0 py-3">
    <b-row align-h="between">
      <b-col cols="auto">
        <p>Copyright © 2023 DIOO Digitális Oktató | Minden jog fenntartva.</p>
      </b-col>
      <b-col cols="auto">
        <b-row>
          <b-col cols="auto">
            <a href="https://system.dioo.hu/ovonok#login_form">Pedagógusi Felület</a>
          </b-col>
          <b-col cols="auto">
            <nuxt-link to="/cookie-tajekoztato">Cookie Tájékoztató</nuxt-link>
          </b-col>
          <b-col cols="auto">
            <nuxt-link to="/adatvedelmi-szabalyzat">GDPR Adatvédelmi Szabályzat</nuxt-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>