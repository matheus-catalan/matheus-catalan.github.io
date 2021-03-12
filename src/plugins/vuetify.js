import Vue from "vue"
import Vuetify from "vuetify/lib/framework"

Vue.use(Vuetify)

import en from "../locales/en"
import pt from "../locales/pt"

export default new Vuetify({
  lang: {
    locales: {
      en,
      pt,
    },
    current: "pt",
  },
})
