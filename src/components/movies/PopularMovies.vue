<template>
  <div class="p-5">
    <h1 class="text-yellow-500 uppercase text-xl font-bold my-5 ">Popular movies</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      <div class="border bg-midnight" v-for="movie in popularMovies" :key="movie.title">
        <router-link class="w-" :to="`/moviedetials/${movie.id}`">
          <img class="hover:opacity-75 transition easy-in-out duration-150 "
            :src=" 'https://image.tmdb.org/t/p/w1280' + movie.poster_path" alt="">
          <h3 class="font-bold pl-2 my-2 text-zinc-400 text-lg">{{ movie.title}}</h3>
          <div class="my-2 pl-2 flex flex-col">
            <span class="font-bold text-sm "> Release year | <span class="text-zinc-300 ml-2">{{ movie.release_date
            }}</span> </span>
            <span class="font-bold text-sm "> Language | <span class="text-zinc-300 ml-2">{{ movie.original_language
            }}</span></span>
            <span class="font-bold text-sm">
              <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-600" /> <span class="text-zinc-300 ml-2">{{
              movie.vote_average }}</span>
            </span>
            <span class="font-bold text-xs text-zinc-800 italic">Action</span>


          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {

  name: 'PopularMovies',

  mounted() {
    this.$store.dispatch('getPopularMovies')

  },

  computed: {
    ...mapState([
      'popularMovies'

    ]),

  }
}
</script>

<style>

</style>