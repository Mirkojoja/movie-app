<template>
    <div class="sidebar fixed text-white w-64 bg-zinc-900 min-h-screen z-100">
        <div class="mt-8 text-start">
            <span class="h-10 p-8 text-white text-3xl font-bold">MoviesTV</span>
        </div>
        <div class="mt-5">
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex hover:bg-zinc-600 items-center"
                to="/"><font-awesome-icon class="mr-4" icon="fa-solid fa-house" />Home</router-link>
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex hover:bg-zinc-600 items-center"
                to="/"><font-awesome-icon class="mr-4" icon="fa-solid fa-list-ol" />Your List</router-link>
            <router-link class="text-white uppercase font-bold rounded m-2 px-6 py-2 flex  hover:bg-zinc-600 items-center"
                to="/about"><font-awesome-icon class="mr-4" icon="fa-solid fa-address-card" /> About us</router-link>
        </div>

        <div class="h-px w-full bg-white my-8"> </div>

        <div class="m-2 px-6 py-2  items-center">
            <h1 class="tracking-widest uppercase mb-4 font-bold">Lists</h1>
            <button
                class="rounded-md border py-1 px-4  hover:bg-zinc-200 hover:text-zinc-800 font-bold">Create
                List <font-awesome-icon class="ml-1" icon="fa-solid fa-plus" /></button>
        </div>
        <div class="h-px w-full bg-white my-8"> </div>

        <div class="m-2 px-6 py-2">
            <h1 class="tracking-widest uppercase mb-4 font-bold">Registration <font-awesome-icon icon="fa-solid fa-user" /></h1>
            <button
                class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold"><router-link to="/sign-up">
                    Sign Up
                </router-link>
                </button>
                <button
                class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold ml-4"><router-link to="/login">Login</router-link>
                </button>
        </div>
        <div class="h-px w-full bg-white my-8"> </div>

        <div class="flex gap-4 text-2xl justify-center">
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="hover:text-blue-600 hover:scale-150 cursor-pointer" /> 
            <font-awesome-icon icon="fa-brands fa-youtube" class="hover:text-red-500 hover:scale-150 cursor-pointer" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="hover:text-pink-600 hover:scale-150 cursor-pointer"/>
            <font-awesome-icon icon="fa-brands fa-twitter" class="hover:text-blue-300 hover:scale-150 cursor-pointer" />
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