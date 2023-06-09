<script>
export default {
    name : "SingleMovie",
    props: {
        details: Object 
    },
    methods : {
        votoInStelle() {
            
            this.details.vote_average = this.details.vote_average / 2;

            //tolgo la virgola
            rating = parseInt(this.details.vote_average.toFixed(0))

            // for (let i = this.details.vote_average; i <= 1 ; i--) {
            //     this.details.vote_average += "*";
            // }
        }
    },
    computed: {
        generateStarRating() {
            return (rating) => {
                const fullStars = Math.floor(rating);
                const emptyStars = 5 - fullStars;

                let stars = '';

                    for (let i = 0; i < fullStars; i++) {
                        stars += '<img class="stella" src="../../public/stars/stella_piena.svg" alt="Star solid width="20" height="20"">';
                    }

                    for (let i = 0; i < emptyStars; i++) {
                        stars += '<img class="stella" src="../../public/stars/stella_vuota.svg" alt="Star solid width="20" height="20"">';
                    }
               

                return stars;
            };
        },
    },

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

            <span class="stars" v-html="generateStarRating(details.vote_average / 2)"></span>

        </ul>

    </div>

</template>

<style scoped lang="scss">
@import "../styles/partials/variables";

    .card{
        
        width: calc((100% / 5) - 30px);
        background-color: $quinto;
        

        img{
            height: 300px;
            max-width: 100%;
        }

        .info_movie{
            display: none;
            padding: 20px;
            color: $terzo;
            font-weight: 600;
            font-size: 14px;
            list-style: none;
            max-height: 40%;
            overflow: scroll;

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
    
    .card:hover{
        .info_movie{
            display: block;
        }
    }
</style>