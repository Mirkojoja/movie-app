<template>
  <div class="sidebar  fixed text-white w-64 bg-zinc-900 min-h-screen z-100">
            <div>
                <span class="h-10 p-8 text-white text-3xl">MoviesTV</span>
            </div>
            <div class="m-6 mb-5">
                <router-link class="text-white uppercase font-bold w-full rounded m-2 px-6 py-2 flex items-center justify-start  hover:bg-zinc-600 " to="/">Home</router-link> 
                <router-link class="text-white uppercase font-bold w-full rounded m-2 px-6 py-2 flex items-center justify-start  hover:bg-zinc-600 " to="/">Your List</router-link> 
                <router-link  class="text-white uppercase font-bold w-full rounded m-2 px-6 py-2 flex items-center justify-start  hover:bg-zinc-600  " to="/about"> About us</router-link> 
            </div>

            <div class="h-px w-full bg-white my-8"> </div>
            <div class="mx-5">
                <h1 class="text-md text-lightest tracking-widest uppercase mb-4">Lists</h1>
                <button class="flex items-center justify-start rounded-md border p-1 px-4 w-28 hover:bg-zinc-200 hover:text-zinc-800">Create List</button>
            </div>
              <div class="h-px w-full bg-white my-8"> </div>
                <div class="mx-5">
                <h1 class="text-md text-lightest tracking-widest uppercase mb-4">Social media</h1>
            </div>
        </div>
</template>

<script>

export default {
components: {

}
}
</script>

<style>

</style>