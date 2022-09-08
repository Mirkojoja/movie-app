<template>
      <div id="app" class="fixed flex w-full h-full">
            <Sidebar />
          <router-view />
      </div>
</template>



<script>
import Sidebar from "./components/Sidebar.vue"
export default {
  components: {
    Sidebar
  },
}
</script>
<style>
html {
  @apply bg-zinc-600;
}
</style>
