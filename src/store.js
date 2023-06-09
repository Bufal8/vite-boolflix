// Global state manager della webapp
import { reactive } from "vue";

export const store = reactive({
    apiKey: "bba72584f4f341027aca32bfbdcd35b7",
    apiURL: "https://api.themoviedb.org/3/search/movie",
    apiTvShowURL : 'https://api.themoviedb.org/3/search/tv',
    searchMovie: "",
    movieList: [],
    tvShowList: [],
    allContentList: [],
})