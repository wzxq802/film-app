<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Поиск фильмов</h1>
    <div class="flex gap-2 mb-4">
      <input
        v-model="query"
        @keyup.enter="searchMovies"
        placeholder="Введите название фильма"
        class="border p-2 flex-1 rounded"
      />
      <button @click="searchMovies" class="bg-blue-500 text-white px-4 rounded">
        Поиск
      </button>
    </div>
    <div v-if="loading">Загрузка...</div>
    <div v-if="error" class="text-red-600">{{ error }}</div>
      <MovieList :movies="movies" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import MovieList from '../components/MovieList.vue'

const query = ref('')
const movies = ref([])
const loading = ref(false)
const error = ref('')

const API_KEY = '8d3cf8b0';

async function searchMovies() {
  let res

try {
  res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query.value.trim()}&type=movie&page=1`)
  if (res.data.Error === 'Too many results.') {
    res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${query.value.trim()}`)
    if (res.data.Response === 'True') {
      movies.value = [res.data]
    } else {
      error.value = res.data.Error
    }
    return
  }
  if (res.data.Response === 'True') {
    movies.value = res.data.Search
  } else {
    error.value = res.data.Error || 'Фильмы не найдены'
  }

} catch (err) {
  error.value = 'Ошибка при загрузке данных'
} finally {
  loading.value = false
}

}
</script>