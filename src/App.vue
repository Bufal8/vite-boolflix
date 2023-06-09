<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';




export default{
  components: {
    AppHeader,
    AppMain,


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
        personalURL += `?api_key=${store.apiKey}&query=${store.searchMovie}`
      }

      axios.get(personalURL)
      .then(res => {
        store.movieList = res.data.results;
      })

      let personalURLTvShow = store.apiTvShowURL + `?api_key=${store.apiKey}&query=`;
      if(store.searchMovie !== ""){
        personalURLTvShow += `?api_key=${store.apiKey}&query=${store.searchMovie}`
      }
      axios.get(personalURLTvShow)
      .then(res => {
        store.tvShowList = res.data.results;
        store.allContentList = store.movieList.concat(store.tvShowList);
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
  <AppHeader @mysearch="getMovies"/>
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
