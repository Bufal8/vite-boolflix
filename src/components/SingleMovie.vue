<script>
export default {
    name : "cardMovie",
    props: {
        details: Object 
    }
}
</script>

<template>

    

    <div class="card">

        <img :src="`https://image.tmdb.org/t/p/w500${details.poster_path}`" alt="info image">

        <ul class="info_movie">

            <li v-if="details.title" class="name"><h4>{{ details.title }}</h4></li>
            <li v-else class="name">{{ details.name }}</li>

            <li v-if="details.original_title" class="original_name">{{ details.original_title }}</li>
            <li v-else class="original_name">{{ details.original_name }}</li>

            <li class="language">
                <!-- {{ details.original_language }} -->
                <img v-if=" details.original_language === 'it' " :src="`../../public/flags/${details.original_language}.png`" alt="info language">
                <img v-else-if=" details.original_language === 'en' " :src="`../../public/flags/${details.original_language}.png`" alt="info language">
                <p v-else>Original language: {{ details.original_language }}</p>
                
            </li>

            <li class="overall">{{ details.vote_average }}</li>

        </ul>

    </div>

</template>

<style scoped lang="scss">
@import "../styles/partials/variables";

    .card{
        height: 500px;
        width: calc((100% / 5) - 30px);
        background-color: $quinto;
        

        img{
            height: 300px;
            max-width: 100%;
        }

        .info_movie{
            padding: 20px;
            color: $terzo;
            font-weight: 600;
            font-size: 14px;
            list-style: none;
            max-height: 100%;

            li{
                margin: 15px 0;
            }

            .language{

                img{
                    width: 20px;
                    height: 20px;
                }
            }

        }
    }

</style>