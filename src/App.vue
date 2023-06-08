<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';



export default{
  components: {
    AppHeader,
    AppMain,
    AppFooter

  },
  data(){
    return{
      store,
    }
  },
  methods: {
    getMovies(){
      // Aggiungo all'URL base dell'API la mia chiave personale
      let personalURL = store.apiURL + `?api_key=${store.apiKey}&query=`;

      // se la barra di ricerca non è vuota
      if(store.searchMovie !== ""){
        // Aggiungi all'Url il valore inserito nella barra di ricerca
        personalURL += `${store.searchMovie}`
      }

      axios.get(personalURL)
      .then(res => {
        store.movieList = res.data.results;
      })
      .catch(err => {
        console.log(err);
      })

      store.searchMovie = "" ;
    },
  },
  created() {
    this.getMovies();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
