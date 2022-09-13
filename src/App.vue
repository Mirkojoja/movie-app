<template>
      <div class="flex">
          <Sidebar />
          <div class="overflow-auto layout_width">
            <router-view />
          </div>
      </div>
</template>



<script>
import Sidebar from "./components/Sidebar.vue"
export default {
  components: {
    Sidebar
  },
  methods: {
    checkIsLogged() {
      let isLogged = localStorage.getItem('user-info');
      if(isLogged) {
        this.$store.commit('SET_LOGIN', true);
      }
    }
  },  
  created() {

  }
}
</script>
<style>
html {
  @apply bg-zinc-600;
}
.layout_width {
  width: calc(100% - 256px);
}
</style>
