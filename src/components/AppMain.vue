<script>
// CHIAMATA AL FILE JS STORE COME STORAGE DI RIFERIMENTO
import { store } from '../store.js'
import SingleMovie from './SingleMovie.vue';


export default {
    name : "AppMain",
    components: {
    SingleMovie
},
    data() {
        return{
        // ACCESSO AI DATI DELLO STORAGE PRINCIPALE
        store
        }
    }
}
</script>

<template>

    <main>

        <div class="card_container">

            <SingleMovie v-for="(movie, index) in store.allContentList" :key="movie.id" :details="movie"/>

        </div>

    </main>

</template>

<style scoped lang="scss">

    .card_container{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin: 50px 50px;
        text-align: center;
    }

</style>