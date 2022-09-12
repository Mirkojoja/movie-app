<template>
<div class="w-full pl-64 h-screen bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
    <div class="bg-zinc-900 w-[800px] mx-auto border rounded-lg text-center mt-5 text-white opacity-95 p-4">
        <h1 class="text-[3rem]">Welcome to MovieTV App</h1>
        <div class="m-2 px-6 py-4">
            <h1 class="tracking-widest text-xl mb-4 font-bold text-white"> Please SingUp to view content</h1> 
            <router-link to="/sign-up">
            <button
                class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold">
                    Sign Up
                </button>
            </router-link>
            <router-link to="/login">
                <button
                class="rounded-md border py-1 px-4 hover:bg-zinc-200 hover:text-zinc-800 font-bold ml-4">Login
                </button>
            </router-link>
        </div>
    </div>
</div>
</template>


<script>
    export default {
        name: 'Welcome'
    }
</script>