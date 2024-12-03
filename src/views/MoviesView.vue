<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Genres from '../components/Genres.vue';

const genresList = [
  {
    id: 28,
    genreName: "Action"
  },
  {
    id: 12,
    genreName: "Adventure"
  },
  {
    id: 27,
    genreName: "Horror"
  },
  {
    id: 9648,
    genreName: "Mystery"
  },
  {
    id: 878,
    genreName: "Sci-Fi"
  },
]
</script>

<template>
  <Header />
  <Genres :genres="genresList" />
  <Footer />
</template>

<style scoped></style>
