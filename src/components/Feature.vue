<script setup>

</script>

<template>
    <h3>Most Popular Movies</h3>

    <div class="movie-gallery">
        <img src="/src/assets/Movie Images/joker.jpg" alt="Joker Movie Poster">
        <img src="/src/assets/Movie Images/dune two.jpg" alt="Dune Part Two Movie Poster">
        <img src="/src/assets/Movie Images/avatar.webp" alt="Avatar Movie Poster">
        <img src="/src/assets/Movie Images/matrix.webp" alt="The Matrix Movie Poster">
        <img src="/src/assets/Movie Images/the dark knight.jpg" alt="The Dark Knight Movie Poster">
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
