<template>
      <div class="flex flex-col">
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
