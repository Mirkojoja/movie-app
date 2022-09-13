<template>
  <div>
    <div v-if="!isLogged">
      <Welcome />
    </div>
    <div v-else>
      <div
        class="h-[200px] cover text-white px-6 py-2 bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
        <div class="flex felx-col justify-between opacity-95 mt-5">
          <h1 class="text-[1.2rem] font-bold text-zinc-900 bg-white py-2 px-4 border border-zinc-500 rounded-lg">Hello
            <span class="text-red-600">{{name}}</span> ,
            welcome to Movies<span class="text-red-600 font-bold">TV</span>
          </h1>
          <button v-on:click="logout()"
            class="text-[1.2rem] font-bold bg-zinc-900 py-2 px-4 border border-zinc-500 rounded-lg hover:bg-zinc-700 hover:text-white ">Logout</button>
        </div>


        <!-- Search bar -->
        <div class="flex mt-14">
          <div class="relative text-black">
            <div class="flex absolute inset-y-0  items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="voice-search"
              class="lg:w-[550px] pl-10 p-2.5 w-full text-[1.2rem]  bg-white py-2 px-4 border border-zinc-500 rounded-lg"
              placeholder="Search Movies" required @keyup.enter="submit" v-model="query">
          </div>
          <div>
            <button type="submit"
              class="ml-5 inline-flex items-center  text-[1.2rem]  bg-zinc-900 py-2 px-4 border text-white  border-zinc-500 rounded-lg hover:bg-zinc-700 hover:text-white">
              <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>Search
            </button>
          </div>

        </div>




        <div v-if="false" class="absolute w-96 rounded  mt-12">
          <ul class="mt-6">
            <li class=" bg-zinc-800 p-3 flex tex-center border-b  ">

              <img class="h-36 "
                src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="">
              <div class="flex flex-col pt-4">
                <span class="text-white font-bold font-lg  items-center pl-10">TItle</span>
                <span class="text-white font-bold font-lg  items-center pl-10">Genre</span>
                <span class="text-white font-bold font-lg  items-center pl-10">Relese date</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <PopularMovies />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex";
import PopularMovies from "../components/movies/PopularMovies"
import Welcome from "./Welcome.vue"


export default {
  name: 'HomeView',
  components: {
    PopularMovies,
    Welcome
  },
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
    }
  }

}
</script>
