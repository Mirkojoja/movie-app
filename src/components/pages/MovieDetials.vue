<template>
  <div class="flex flex-col">
    <div class="w-full">
      <img
        :src="'https://image.tmdb.org/t/p/w1280' + getMovieDetial.backdrop_path + '?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd'"
        alt="movie_image" class="opacity-40 rounded top-0 left-0 object-cover w-screen h-[700px]">
    </div>
    <div class="md:flex px-5 py-7 lg:p-10 justify-center absolute">
      <img class="rounded-md h-96 lg:h-full" :src=" 'https://image.tmdb.org/t/p/w300' + getMovieDetial.poster_path" alt="">

      <!-- description -->
      <div class="md:ml-10  md:w-full">
        <h3 class="text-3xl uppercase text-white">{{getMovieDetial.title}}</h3>
        <div class="mt-10">
          <font-awesome-icon icon="fa-solid fa-calendar" class="text-lg" /> <span class="text-white ml-1 text-lg"> {{
          getMovieDetial.release_date}}</span><br />
          <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-600 text-lg" /> <span class="text-lg font-bold">
            {{ getMovieDetial.vote_average * 10}} %</span>
          <p class="mt-5 text-white justify-content ">{{ getMovieDetial.overview }}</p>

        </div>
        <!-- buttouns -->

        <div class="mt-5">
          <button type="submit"
            class="inline-flex items-center py-2.5 px-3 m-2 text-sm font-medium text-white bg-zinc-900 rounded-lg border border-zinc-300  hover:text-zinc-800 hover:bg-zinc-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-700 dark:hover:bg-zinc-300 dark:focus:ring-blue-800">
            <font-awesome-icon icon="fa-solid fa-circle-play" class="pr-2" /> Watch Trailer
          </button>
          <button @click="addToFavourite()" type="submit"
            class="inline-flex items-center py-2.5 px-3 m-2 text-sm font-medium text-white bg-zinc-900 rounded-lg border border-zinc-300  hover:text-zinc-800 hover:bg-zinc-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-700 dark:hover:bg-zinc-300 dark:focus:ring-blue-800">
            <font-awesome-icon icon="fa-solid fa-heart" class="pr-2 hover:text-red-700" /> Favourite
          </button>
        </div>

      </div>

    </div>

    <h1 class="text-3xl font-bold p-4 ml-10">Cast</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 justify-items-center mb-5">
      <div v-for="cast in getCast" :key="cast.id" class="text-center">
        <img :src=" 'https://image.tmdb.org/t/p/w154' + cast.profile_path"
          class="rounded mt-2 max-w-full transform group-hover:scale-150 transition duration-700">
        <div class="mt-2 text-tiny transform group-hover:translate-x-48 transition duration-500">
          <p class="text-zinc-300 italic "> {{cast.name}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import axios from 'axios'

import { mapGetters } from "vuex"
export default {
  name: 'MovieDetial',
  props:['movie'],

  created() {
    this.$store.dispatch("getMovieDetial", this.$route.params.id)
    this.$store.dispatch("getCast", this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      getMovieDetial: 'getMovieDetial',
      getCast: 'getCast'
    })
  },
  methods: {
    addFavourite() {
      this.$store.dispatch('addFavourites', {
        movie: this.movie,
        quantity: 1
      })
    }
  }
}
</script>

<style>

</style>