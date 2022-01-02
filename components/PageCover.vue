<template>
    <b-row class="page-cover justify-content-center">
        <b-col class="page-cover-img" cols="4" md="4">
            <b-img src="~assets/img/tunder.png" fluid alt="DIOO tündér"></b-img>
        </b-col>
        <b-col md="8" class="cover-page-text">
            <b-row align-h="center" class="page-cover-title">
                <b-col cols="auto">
        <b-overlay show="true" opacity="0">
                    <b-img src="~assets/img/DIOO_name.png" fluid alt="DIOO"></b-img>
                    
          <template #overlay>
            <div class="page-cover-stamp">
              <b-img src="~assets/img/innovacios-nagydij_stamp.png" fluid alt="Responsive image"></b-img>
            </div>
          </template>
        </b-overlay>
                </b-col>
            </b-row>
            <b-row align-h="center" class="page-cover-subtitle">
                <b-col cols="auto">Digitális OkosJáték Óvodásoknak</b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="auto">
                    <b-button pill class="button-outline-brand-color" href="#contact">Üzenjen nekünk</b-button>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>