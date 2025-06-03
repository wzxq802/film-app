<template>
  <router-link :to="`/movie/${movie.imdbID}`" class="movie-card">
    <img :src="movie.Poster" :alt="movie.Title" class="w-full h-auto object-cover rounded-md shadow-md" />
    <h3 class="mt-2 text-lg font-semibold text-center">{{ movie.Title }}</h3>
  </router-link>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.movie-card {
  display: block;
  transition: transform 0.2s ease;
}
.movie-card:hover {
  transform: scale(1.03);
}
</style>
