import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countryDataUrl: null
    },
    mounted() {
      this.fetchCountry();
    },
    methods: {
      fetchCountry: function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.countryDataUrl = data.name)
        // .then(data => this.countryDataUrl = data.flag)
        .catch(err => console.err);

      }
    }
  })

console.log('yoyoyo');
});
