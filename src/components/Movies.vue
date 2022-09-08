<template>
  <div class="">
    <h1 class="mt-5 text-yellow-500 uppercase text-xlg font-bold m-6">Popular movies</h1>

 <!-- <ul v-for="movie in movies" :key="movie.id">
  <li  class="border p-4 bg-zinc-500">
    {{ movie.title}} <br />
    {{ movie.release_date}}
  </li>
 </ul> -->

 <!-- https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 -->

 <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 m-4 gap-8">
  <Movie />
  <Movie />
   <Movie />
   <Movie />
   <Movie />
    <Movie />
     <Movie />
      <Movie />
 </div>
  </div>
</template>

<script>
import axios from 'axios'
import Movie from '../components/Movie'

export default {

name: 'Movies',

components: {
    Movie,
},

data() {
  return {
    movies: []
  }
},

mounted() {
  this.getMovies()
},

  methods: {
    getMovies: function() {

      axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
      .then((result)=>  {

        
          result.data.results.forEach((item) => {

            console.log(item)

            this.movies.push(item)
          })
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>