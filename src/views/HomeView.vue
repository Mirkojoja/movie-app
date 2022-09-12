<template>
  <div class=" w-full h-full pl-64">

    <!-- top img -->

  <img class="w-full h-[40vh]" src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">


      
          <div class="flex-1 overflow-auto ..."></div>
          <div class="flex justify-center flex-wrap m-4">

      <!-- Search bar -->

          <form class="">   
            <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" class="lg:w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies" required>
        <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
  
</form>

<!-- <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-zinc-900 rounded-lg border border-zinc-300  hover:text-zinc-800 hover:bg-zinc-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-700 dark:hover:bg-zinc-300 dark:focus:ring-blue-800">
        <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button> -->

   <!-- search results -->

   <div class="absolute w-96 rounded  mt-12">
        <ul class="mt-6">
            <li class=" bg-zinc-800 p-3 flex tex-center border-b  ">
              
            <img class="h-36 " src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
             <div class="flex flex-col pt-4">
              <span class="text-white font-bold font-lg  items-center pl-10">Dragon</span>
              <span class="text-white font-bold font-lg  items-center pl-10">Genre</span>
              <span class="text-white font-bold font-lg  items-center pl-10">Relese date</span>
             </div>
            </li>
            <li class=" bg-zinc-800 p-3 flex tex-center border-b  ">
              
              <img class="h-36 " src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
               <div class="flex flex-col pt-4">
                <span class="text-white font-bold font-lg  items-center pl-10">Dragon</span>
                <span class="text-white font-bold font-lg  items-center pl-10">Genre</span>
                <span class="text-white font-bold font-lg  items-center pl-10">Relese date</span>
               </div>
              </li>

        </ul>
    </div>

    </div>


  <h3 class="text-center">Welcome to Movies tv</h3>
       <p class="text-center justify-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio autem repellendus excepturi, iure impedit corporis expedita iste, deleniti est aliquam! Omnis laudantium tenetur voluptatem cum libero vero rerum voluptas.</p>

 <Movies />
  
  </div>
</template>

<script>
// @ is an alias to /src

import Movies from "../components/Movies"

export default {
  name: 'HomeView',
  components: {
    Movies
  },


}
</script>
