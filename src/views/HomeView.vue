<template>
<<<<<<< HEAD
  <div class=" w-full h-full pl-64 ">


    <!-- top img -->
    <img class="w-full h-[40vh]"
      src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="">

    <div class=" mt-2 text-white opacity-95 px-6 py-2 flex justify-between">
      <h1 class="text-[1.2rem] font-bold">Hello {{name }}, welcome to MovieTV app</h1>
      <button v-on:click="logout()"
        class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold text-[1.2rem]">Logout</button>

    </div>
    <div class="flex-1 overflow-auto ..."></div>
    <div class="flex justify-center flex-wrap m-4">

      <!-- Search bar -->

      <form class="">
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" id="voice-search"
            class="lg:w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Movies" required
            
               >
=======
  <div>
      <div v-if="!isLogged" class="w-full h-full pl-64">
          neki drugi ekran
      </div>
      <div v-else class=" w-full h-full ">
    
    
        <!-- top img -->
        <img class="w-full h-[40vh]"
          src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="">
    
        <div class=" mt-2 text-white opacity-95 px-6 py-2 flex justify-between">
          <h1 class="text-[1.2rem] font-bold">Hello {{name}}, welcome to MovieTV app</h1>
          <button v-on:click="logout()"
            class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold text-[1.2rem]">Logout</button>
    
>>>>>>> d4e8dad57bf4e5229696e2af26e125f1b3997330
        </div>
        <div class="flex-1 overflow-auto ..."></div>
        <div class="flex justify-center flex-wrap m-4">
    
          <!-- Search bar -->
    
          <form class="">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" id="voice-search"
                class="lg:w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Movies" required
                  @keyup.enter="submit"
                  v-model="query">
            </div>
          </form>
    
          <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-zinc-900 rounded-lg border border-zinc-300  hover:text-zinc-800 hover:bg-zinc-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-700 dark:hover:bg-zinc-300 dark:focus:ring-blue-800">
            <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
        </button>
    
          
    
          <div v-if="false" class="absolute w-96 rounded  mt-12">
            <ul class="mt-6">
                <li  class=" bg-zinc-800 p-3 flex tex-center border-b  ">
                  
                <img class="h-36 " src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
                <div class="flex flex-col pt-4">
                  <span class="text-white font-bold font-lg  items-center pl-10">TItle</span>
                  <span class="text-white font-bold font-lg  items-center pl-10">Genre</span>
                  <span class="text-white font-bold font-lg  items-center pl-10">Relese date</span>
                </div>
                </li>
            </ul>
        </div>
        </div>
        <p class="text-center justify-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio autem
          repellendus excepturi, iure impedit corporis expedita iste, deleniti est aliquam! Omnis laudantium tenetur
          voluptatem cum libero vero rerum voluptas.</p>
    
        <PopularMovies />
    
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex";
import PopularMovies from "../components/movies/PopularMovies"


export default {
  name: 'HomeView',
  components: {
    PopularMovies
  },
<<<<<<< HEAD
 
  
  
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   this.name = JSON.parse(user).name;
  
  // },
  // methods: {
  //   logout() {
  //     localStorage.clear();
  //     this.$router.push({ name: 'Welcome' })
=======
  computed: {
    ...mapGetters({
      isLogged: 'login'
    })
  },
   data() {
    return {
     name: ''
    };
  },
  
  
  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = user ? JSON.parse(user).name : null;
    
  
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Welcome' })
      this.$store.commit('SET_LOGIN', false);
>>>>>>> d4e8dad57bf4e5229696e2af26e125f1b3997330

  //   }
  // }

}
</script>
