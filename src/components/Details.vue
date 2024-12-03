<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const response = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`);
console.log(response.data);
</script>

<template>
    <div class="movie-detail">
        <h1 class="movie-title">{{ response.data.original_title }}</h1>
        <p class="movie-overview">{{ response.data.overview }}</p>
        <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
        <p class="movie-origin_county">Origin Country: {{ response.data.origin_country }}</p>
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster"
            class="movie-poster" />
        <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
        <h2 class="trailers-title">Trailers</h2>
        <div class="trailers-container">
            <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
                <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
                    <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
                        class="trailer-thumbnail" />
                </a>
            </div>
        </div>
    </div>
</template>


<style scoped>
.movie-detail {
    background-color: #ffffff;
    color: #10375c;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.movie-title {
    font-size: 40px;
    color: #10375c;
    margin-bottom: 20px;
}

.movie-overview {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.5;
}

.movie-release-date,
.movie-origin_county {
    font-size: 16px;
    color: #305a8a;
    margin-bottom: 10px;
}

.movie-poster {
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.movie-site {
    display: inline-block;
    font-size: 18px;
    color: #4073ad;
    text-decoration: none;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #4073ad;
    transition: background-color 0.3s, color 0.3s;
}

.movie-site:hover {
    background-color: #4073ad;
    color: #fff;
}

.trailers-title {
    color: #305a8a;
    font-size: 28px;
    margin-top: 40px;
    margin-bottom: 20px;
}

.trailers-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.trailer-tile {
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.trailer-thumbnail {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s;
}

.trailer-thumbnail:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>