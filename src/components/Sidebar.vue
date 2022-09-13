<template>
    <div class="sidebar text-white w-64 bg-zinc-900 min-h-screen z-100">
        <div class="mt-8 text-start">
            <span class="h-10 p-8 text-white text-3xl font-bold">Movies<span class="text-red-600">TV</span></span>
        </div>
        <div class="my-7">
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex hover:bg-zinc-600 items-center"
                to="/home"><font-awesome-icon class="mr-4" icon="fa-solid fa-house" />Home</router-link>
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex hover:bg-zinc-600 items-center"
                to="/your-list"><font-awesome-icon class="mr-4" icon="fa-solid fa-list-ol" />Your List</router-link>
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex  hover:bg-zinc-600 items-center"
                to="/about"><font-awesome-icon class="mr-4" icon="fa-solid fa-address-card" /> About us</router-link>
                  <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex  hover:bg-zinc-600 items-center"
                to="/toprated"><font-awesome-icon icon="fa-solid fa-star" class="text-yellow-600 mr-4"/> Top Rated</router-link>
        </div>

        
        <div class="h-px w-full bg-white my-4"> </div>

        <div class="flex gap-5 text-2xl justify-center p-2">
            <a href="http://www.facebok.com" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook-f" class="hover:text-blue-600 hover:scale-150 cursor-pointer" /></a> 
            <a href="http://www.youtube.com" target="_blank"><font-awesome-icon icon="fa-brands fa-youtube" class="hover:text-red-500 hover:scale-150 cursor-pointer" /></a>
            <a href="http://www.instagram.com" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" class="hover:text-pink-600 hover:scale-150 cursor-pointer"/></a>
            <a href="http://www.twitter.com" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" class="hover:text-blue-300 hover:scale-150 cursor-pointer" /></a>
    </div>
</div>
</template>

<script>


export default {
    name: 'Sidebar',
}

</script>

<style>
</style>