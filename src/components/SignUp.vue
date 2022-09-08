<template>
    <div class="text-center pl-64">
        <div class="flex flex-col w-96 my-20 mx-auto text-center rounded-xl border border-slate-400 p-7">
        <h1 class="font-bold text-3xl text-center mb-5">Sign Up</h1>
        <label class="text-start font-bold" for="name">Name:</label>
        <input v-model="name" class="border rounded p-3 m-1 focus:bg-slate-200" type="text" placeholder="Enter name" />
        <label class="text-start font-bold" for="email">Email:</label>
        <input v-model="email" class="border rounded p-3 m-1 focus:bg-slate-200" type="email" placeholder="Enter Email" />
        <label class="text-start font-bold" for="password">Password:</label>
        <input v-model="password" class="border rounded p-3 m-1 focus:bg-slate-200" type="password" placeholder="Enter Password" />
        <button v-on:click="signUp" class="bg-slate-700 hover:bg-slate-900 text-slate-100 border rounded border-none p-3 mt-2 cursor-pointer ">Sign Up</button>
        <div class="mt-5">
            <p class="text-center font-light">If you already have an account, go to</p>
            <p class="underline text-center mt-2 text-blue-600 text-lg hover:text-blue-900 ">
                <router-link to="/">Login</router-link>
            </p>
        </div>
    </div>
    </div>
    
</template>

<script>
    export default {
        name:'SignUp'
    }
</script>