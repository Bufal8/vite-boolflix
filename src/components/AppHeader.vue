<script>
import { store } from '../store.js';
export default {
    name : "AppHeader",
    data() {
        return{
        // ACCESSO AI DATI DELLO STORAGE PRINCIPALE
        store
        }
    }
}
</script>

<template>

    <header>

        <h1>BOOLFIX</h1>

        <div class="search">
            <input type="search" placeholder="Ricerca film" v-model.trim="store.searchMovie">
            <button @click.prevent="$emit('mysearch')">INVIA</button>
        </div>

    </header>

</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';


    header{
        height: 100px;
        background-color: $secondo;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1{
            color: $primo;
            font-weight: 800;
            margin-left: 100px;
        }

        .search{
            margin-right: 100px;

            input{
                height: 40px;
                outline: none;
                border: none;
            }
            
            button{
                height: 40px;
                width: 60px;
                background-color: red;
                color: black;
                font-weight: 800;
                border: none;
            }
        }
    }
</style>