<template>
  <div class=" py-3 px-2 mt-4 content-wrapper">
    <h1 class="text-yellow-500 uppercase text-xl font-bold my-5 ">Upcoming movies</h1>
    <div class="w-full flex justify-center">
      <div class="flex justify-around flex-wrap py-6 w-full sm:max-w-extraMonster md:w-14/15   md:max-w-extraLargeMonster lg:max-w-full lg:min-w-full xl:w-full xl:min-w-godzila xl:max-w-extraLargeGodzila">
      <div v-for="(movie, index) in upcomingMovies" :key="index" class="flex flex-col justify-evenly px-3 py-3 mx-3 lg:mx-1 mb-4 w-2/5 lg:w-2/13 min-w-smaller max-w-smallMed lg:max-w-smaller rounded bg-background-pozadina text-copy-tekst transition-all duration-300 cursor-pointer transform hover:border-narandza hover:opacity-30 overflow-hidden relative group" :class="getTheme" @click="sendToParent(movie.id)">
        <p class="text-center font-medium truncate mb-4 transform group-hover:-translate-x-48 transition duration-500">{{movie.title}}</p>
        
        <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path + '?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd'" @error="defaultImage" class="rounded mt-2 max-w-full transform group-hover:scale-150 transition duration-700">
        <div class="mt-2 text-tiny transform group-hover:translate-x-48 transition duration-500">
          <p><i class="fas fa-star text-zuta"></i> {{movie.vote_average}}/10</p>
          <p><i class="far fa-calendar-alt text-narandza"></i> {{movie.release_date}}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>