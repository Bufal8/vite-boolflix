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
  }
}
</script>

<template>
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
