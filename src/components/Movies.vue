<template>
  <div class="">
    <h1>Movies list aa </h1>

 <ul v-for="movie in movies" :key="movie.id">
  <li  class="border p-4 bg-zinc-500">
    {{ movie.title}} <br />
    {{ movie.release_date}}
  </li>
 </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'Movies',

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