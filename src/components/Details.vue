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
        <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster"
            class="movie-poster" />

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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
}

body {
    background-color: #e9f1f7;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px 0 70px;
}

.movie-detail {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.movie-title {
    font-size: 36px;
    font-weight: bold;
    color: #305a8a;
    margin-bottom: 10px;
}

.movie-overview {
    font-size: 18px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 20px;
}

.movie-release-date {
    font-size: 16px;
    color: #305a8a;
    margin-bottom: 15px;
}

.movie-site {
    font-size: 18px;
    color: #4073ad;
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-block;
    transition: color 0.3s;
}

.movie-site:hover {
    color: #305a8a;
}

.movie-poster {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 30px;
}

.trailers-title {
    font-size: 28px;
    font-weight: bold;
    color: #305a8a;
    margin-bottom: 20px;
    text-align: center;
}

.trailers-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
}

.trailer-tile {
    width: calc(33.333% - 10px);
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.trailer-tile:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.trailer-thumbnail {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
}
</style>