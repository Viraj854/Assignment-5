<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
</script>

<template>
    <h3>Most Popular Movies</h3>
    <div class="movie-gallery">
        <div v-for="movie in response.data.results" :key="movie.id" class="movie-card">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
            <p class="movie-title">{{ movie.title }}</p>
        </div>
    </div>
</template>

<style scoped>
h3 {
    color: #305a8a;
    text-align: center;
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%
}


.movie-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    width: 100%
}

.movie-gallery img {
    width: 180px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s;
}

.movie-gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
