<template>
    <div class="sidebar fixed text-white w-64 bg-zinc-900 min-h-screen z-100">
        <div class="mt-8 text-start">
            <span class="h-10 p-8 text-white text-3xl font-bold">MoviesTV</span>
        </div>
        <div class="mt-5">
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex hover:bg-zinc-600"
                to="/">Home</router-link>
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex hover:bg-zinc-600"
                to="/">Your List</router-link>
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex  hover:bg-zinc-600"
                to="/about"> About us</router-link>
        </div>

        <div class="h-px w-full bg-white my-8"> </div>

        <div class="m-2 px-6 py-2">
            <h1 class="tracking-widest uppercase mb-4 font-bold">Lists</h1>
            <button
                class="rounded-md border py-1 px-4  hover:bg-zinc-200 hover:text-zinc-800 font-bold">Create
                List</button>
        </div>
        <div class="h-px w-full bg-white my-8"> </div>

        <div class="m-2 px-6 py-2">
            <h1 class="tracking-widest uppercase mb-4 font-bold">Registration</h1>
            <button
                class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold">Sign Up
                </button>
                <button
                class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold ml-4">Login
                </button>
        </div>
        <div class="h-px w-full bg-white my-8"> </div>

        <div class="flex gap-4 text-2xl justify-center">
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="hover:text-blue-600 hover:scale-150" /> 
            <font-awesome-icon icon="fa-brands fa-youtube" class="hover:text-red-500 hover:scale-150" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="hover:text-pink-600 hover:scale-150"/>
            <font-awesome-icon icon="fa-brands fa-twitter" class="hover:text-blue-300 hover:scale-150" />
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