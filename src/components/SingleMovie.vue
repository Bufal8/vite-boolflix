<script>
export default{
    name: "SingleMovie",
    props: {
        details: Object
    }
}
</script>

<template>

    <div class="card">

        <img src="" alt="">

        <ul class="movie-info">
            <li class="name">{{ details.title }}</li>

            <li class="original-name">{{ details.original_title }}</li>

            <li class="language">{{ details.original_language }}</li>

            <li class="vote">{{ details.vote_average }}</li>
        </ul>
    </div>

</template>

<style scoped lang=""scss>

</style>