<template>
    <div v-if="movies.length" class="grid gap-4 grid-cols-2 md:grid-cols-4">
        <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </div>
</template>
<script setup>
import MovieCard from './MovieCard.vue';
defineProps({ movies: Array })
</script>