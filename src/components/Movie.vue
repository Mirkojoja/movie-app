<template>
  <div class="border rounded bg-midnight ">
  <router-link to="/moviedetials/1">
    <img class="hover:opacity-75 transition easy-in-out duration-150" src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 " alt="">
    <h3 class="font-bold pl-2 my-2 text-zinc-400 text-2xl">Name Movie</h3>
    <div class="my-2 pl-2">
      <span> Release year | </span><br />
      <span> Type</span>
     
    </div>
  </router-link>
  </div>
</template>

<script>
export default {
    name: 'Movie',
}
</script>

<style>

</style>