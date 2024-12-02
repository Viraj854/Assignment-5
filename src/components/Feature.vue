<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);
const numbers = ref([]);

numbers.value = (() => {
    const set = new Set();

    while (true) {
        set.add(Math.floor(Math.random() * 19));

        if (set.size === 3) {
            return set;
        }
    }
})();

onMounted(async () => {
    response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
})
</script>

<template>
    <h3>Now Playing</h3>
    <div class="movie-gallery">
        <div v-if="response" class="movie-list">
            <div v-for="number in numbers" :key="response.data.results[number].id" class="movie-card">
                <img :src="`https://image.tmdb.org/t/p/w500${response.data.results[number].poster_path}`"
                    alt="Movie Poster" class="movie-poster" />
                <p class="movie-title">{{ response.data.results[number].title }}</p>
            </div>
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
    width: 100%;
}

.movie-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 10px;
}

.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem
}

.movie-card {
    width: 200px;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease;
}

.movie-poster {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.movie-title {
    font-size: 16px;
    color: #333;
    padding: 10px;
    background-color: #f4f4f4;
    margin: 0;
}

.movie-card:hover {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .movie-card {
        width: 150px;
    }
}

@media (max-width: 480px) {
    .movie-card {
        width: 120px;
    }
}
</style>
