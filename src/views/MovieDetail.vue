<template>
    <div v-if="movie">
        <h1>{{ movie.title }}</h1>
        <img :src="movie.Poster">
        <p>{{ movie.Plot }}</p>
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import axios from 'axios'

    const route = useRoute();
    const movie = ref(null);
    const API_KEY = '8d3cf8b0';

    onMounted(async () => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${route.params.id}`);
        movie.value = res.data;
    });
</script>