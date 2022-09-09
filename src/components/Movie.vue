<template>
  <div class="border rounded bg-midnight ">
  <router-link to="/moviedetials/1">
    <img class="hover:opacity-75 transition easy-in-out duration-150" :src="posterPath" alt="">
    <h3 class="font-bold pl-2 my-2 text-zinc-400 text-2xl">{{ movie.title }}</h3>
    <div class="my-2 pl-2 flex flex-col">
      <span class="font-bold "> Release year | <span class="text-zinc-300 ml-2">{{ movie.release_date }}</span> </span>
      <span class="font-bold "> Language | <span class="text-zinc-300 ml-2">{{ movie.original_language }}</span></span>
      <span class="font-bold ">  <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-600" /> <span class="text-zinc-300 ml-2">{{ movie.vote_average }}</span></span>
     
    </div>
  </router-link>
  </div>
</template>

<script>
export default {
    name: 'Movie',
    props: {
      movie: {
        required: true,
      }
    },
    computed: {
        posterPath(){
          return "https://image.tmdb.org/t/p/w1280" + this.movie.poster_path

        }
    }
}
</script>

<style>

</style>