<template>
<div class="pl-96 pr-48">
    <div class=" flex mx-auto mt-20">
    <img class="w-64 rounded-md " src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">

      <!-- description -->

        <div class="w-90 ml-36">
            <h3 class="text-3xl uppercase text-white">Spiderman</h3>
        <div class="mt-10">
          <span class="mt-10">Date realise:</span><br />
            <span>Type:</span>
            <p class="mt-5 text-white justify-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quas alias debitis praesentium quidem molestiae ad repudiandae provident vitae aliquam saepe perferendis natus deleniti incidunt delectus commodi ipsam fugiat nostrum!</p>
          
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
export default {


  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>

<style>

</style>