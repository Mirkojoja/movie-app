<template>
<div class="pl-96 pr-48 absolute ">

    <div class=" flex mx-auto mt-20">
    <!-- <img class="w-64 rounded-md " :src=" 'https://image.tmdb.org/t/p/w1280' + getMovieDetial.poster_path" alt=""> -->

      <!-- description -->

        <div class="w-90 ml-36">
            <h3 class="text-3xl uppercase text-white">{{getMovieDetial.title}}</h3>
        <div class="mt-10">
          <span class="mt-10">Date realise: </span><span class="text-white"> {{ getMovieDetial.release_date}}</span><br />
            <span> <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-600" /> {{ getMovieDetial.vote_average * 10}} %</span>
            <p class="mt-5 text-white justify-content">{{ getMovieDetial.overview }}</p>
          
        </div>
            <!-- buttouns -->
          
            <div class="mt-5">
            <button type="submit" class="inline-flex items-center py-2.5 px-3 m-2 text-sm font-medium text-white bg-zinc-900 rounded-lg border border-zinc-300  hover:text-zinc-800 hover:bg-zinc-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-700 dark:hover:bg-zinc-300 dark:focus:ring-blue-800">
                <font-awesome-icon icon="fa-solid fa-circle-play" class="pr-2" /> Watch Trailer
            </button>
            <button type="submit" class="inline-flex items-center py-2.5 px-3 m-2 text-sm font-medium text-white bg-zinc-900 rounded-lg border border-zinc-300  hover:text-zinc-800 hover:bg-zinc-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-700 dark:hover:bg-zinc-300 dark:focus:ring-blue-800">
                <font-awesome-icon icon="fa-solid fa-heart" class="pr-2 hover:text-red-700"/> Favourite
            </button>
          </div>

        </div>
        
  </div>
  <div class="h-px w-full bg-white my-8"> </div>
</div>
</template>

<script>
// import axios from 'axios'

import {mapGetters} from "vuex"
export default {
  name: 'MovieDetial',

  created() {
      this.$store.dispatch("getMovieDetial", this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      getMovieDetial: 'getMovieDetial'
    })
  }

// data() {
//   return {
//     movie: [],
//   }
// },
  // mounted() {
  //  this.getMovieDetial(this.$route.params.id)
  // },

  // methods: {
  //       getMovieDetial(id) {
  //     axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&language=en-US`)
  //         .then(result =>  {

  //             console.log(result.data);
  //             this.movie = result.data;
  //             })

  //     .catch((error) => {
  //           console.log(error)
  //         })
  //   }
  // },
}
</script>

<style>

</style>