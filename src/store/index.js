// import Vue from 'vue'
// import Vuex from 'vuex'

// import character from '@/modules/character'

// Vue.use(Vuex); NOT SURE WHY IT'S NOT WORKING THIS VUE.USE 

// export default new Vuex.Store({
//   modules: {
//     character
//   },
//   strict: true
// });
// SO I LEAVE IT LIKE THIS : 

import { createStore } from 'vuex'
import character from '@/modules/character'



export default createStore({
  modules: {
    character
  },
  strict: true
});



