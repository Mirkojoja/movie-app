<template>
    <div class="lg:flex items-center justify-center p-5 text-center h-screen bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] absolute md:relative">
        <form @submit.prevent="signUp">
            <div
                class="flex flex-col w-[22rem] md:w-96 mx-auto text-center text-white border rounded-xl p-7 bg-black bg-opacity-70">
                <h1 class="font-bold text-3xl text-center mb-5">Sign Up</h1>
                <label class="text-start font-bolder ml-3" for="name">Name:</label>
                <input v-model="name" class="border rounded-xl p-3 m-1 focus:bg-black bg-gray-700" type="text"
                    placeholder="Enter name" required />
                <label class="text-start font-bolder ml-3" for="email">Email:</label>
                <input v-model="email" class="border rounded-xl p-3 m-1 focus:bg-black bg-gray-700" type="email"
                    placeholder="Enter Email" required/>
                <label class="text-start font-bolder ml-3" for="password">Password:</label>
                <input v-model="password" class="border rounded-xl p-3 m-1 focus:bg-black bg-gray-700" type="password"
                    placeholder="Enter Password" required/>
                <button type="submit" value="send"
                    class="bg-blue-600 hover:bg-blue-900 border rounded-xl border-black p-3 mt-3 cursor-pointer ">Sign
                    Up</button>
                <div class="mt-5">
                    <p class="text-center font-light">If you already have an account, go to</p>
                    <p class="underline text-center mt-2 text-blue-600 text-lg hover:text-blue-900 ">
                        <router-link to="/login">Login</router-link>
                    </p>
                </div>
            </div>
        </form>
        </div>
                

</template>

<script>
import axios from 'axios';


export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp() {
            let response = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            

            if(response.status==201) {
                localStorage.setItem('user-info', JSON.stringify(response.data))
                this.$router.push({ name:'HomeView'});
                this.$store.commit('SET_LOGIN', true);
            }
      
        }
}
}

</script>