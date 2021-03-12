<template>
  <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :transition="transition"
      style="position: fixed;"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          fab
          icon
          :class="current"
        >
        </v-btn>
      </template>
      <v-btn
        fab
        small
        :class="btn1"
        @click="hangleChangeLanguage"
        >
      </v-btn>
      
    </v-speed-dial>
</template>

<script>
export default {

    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
      btn1: localStorage.getItem('lang') === 'en' ? 'pt' : 'en',
      current: localStorage.getItem('lang') || 'pt'
    }),

    methods : {
        hangleChangeLanguage() {
          localStorage.setItem('lang', this.btn1)
          this.btn1 = this.current
          this.current = localStorage.getItem('lang')
          this.$vuetify.lang.current = this.current
        }
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
}
</script>

<style>

    .en {
       background: url('../assets/usa.svg'); 
    }

    .france {
       background: url('../assets/france.png'); 
    }

    .pt {
       background: url('../assets/brazil.svg'); 
    }

    template {
      position: fixed !important;
      z-index: 9999;
      bottom: 0;
    }
</style>