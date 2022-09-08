<template>
  <div class="text-center w-full h-full pl-64">
        <img class="w-full h-64" src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
<div class="flex-1 overflow-auto ..."></div>
          <div class="flex justify-center m-4">
      <input type="text" placeholder="SEARCH" class="rounded-md w-56 bg-gray-100 pl-4 ">
      <button class="bg-zinc-800 p-2 text-2xl rounded-md ml-4 text-white w-36">Search</button>
    </div>
  <h3 class="">Welcome to Movies tv</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio autem repellendus excepturi, iure impedit corporis expedita iste, deleniti est aliquam! Omnis laudantium tenetur voluptatem cum libero vero rerum voluptas.</p>


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
