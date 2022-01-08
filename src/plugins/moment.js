import Vue from 'vue';
import momentjs from 'moment-timezone'

Object.defineProperties(Vue.prototype, {
  $moment: {
      get() {
          return momentjs
      }
  }
});