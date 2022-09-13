<template>
    <div class="p-5 text-center h-screen bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]">
            <div
                class="flex flex-col w-96 mx-auto text-center text-white border rounded-xl p-7 bg-black bg-opacity-70">
                <h1 class="font-bold text-3xl text-center mb-5">Forgot Password</h1>
                <label class="text-start font-bolder ml-3" for="email">Email:</label>
                <input v-model="email" class="border rounded-xl p-3 m-1 focus:bg-black bg-gray-700" type="email"
                    placeholder="Enter Email" />
                <button
                    class="bg-blue-600 hover:bg-blue-900 border rounded-xl border-black p-3 mt-3 cursor-pointer ">Submit
                </button>
                <div class="mt-5">
                    <p class="underline text-center mt-2 text-blue-600 text-lg hover:text-blue-900 ">
                        <router-link to="/login">Back to login</router-link>
                    </p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Forgot'
}
</script>