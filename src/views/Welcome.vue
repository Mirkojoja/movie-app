<template>
    <div
        class="lg:flex p-5 w-full h-screen bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
        <div class="bg-zinc-900 lg:w-[800px] mx-auto border rounded-lg text-center text-white opacity-95  p-5 lg:p-10 my-auto ">
            <h1 class="text-[3rem]">Welcome to <span class="font-bold">Movies</span><span
                    class="font-bold text-red-600">TV</span></h1>
            <div class="m-2 px-6 py-4">
                <h1 class="text-xl mb-4 font-bold text-white"> Please SingUp to view content</h1>
                <router-link to="/sign-up">
                    <button
                        class="text-[1.2rem] font-bold bg-zinc-900 py-2 px-4 border border-zinc-500 rounded-lg hover:bg-zinc-700 hover:text-white ">
                        Sign Up
                    </button>
                </router-link>
                <router-link to="/login">
                    <button
                        class="ml-5 text-[1.2rem] font-bold bg-zinc-900 py-2 px-4 border border-zinc-500 rounded-lg hover:bg-zinc-700 hover:text-white ">Login
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