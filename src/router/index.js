import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from "../components/registration/SignUp.vue"
import Login from "../components/registration/Login.vue"
import Forgot from "../components/registration/Forgot.vue"
import MovieDetials from "../components/pages/MovieDetials.vue"
import TrendMovies from "../components/movies/TrendMovies.vue"
import Sidebar from "../components/Sidebar.vue"
import Welcome from "../views/Welcome.vue"
import YourList from "../views/YourList.vue"
import UpcomingMovies from "../views/UpcomingMovies.vue"

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
    {
    path: '/moviedetials/:id',
    name: 'Moviedetials',
    component: MovieDetials
  },
  {
    path: '/toprated',
    name: 'TopRated',
    component: TrendMovies
  },
  {
    path: '/upcomingmovies',
    name: 'UpcomingMovies',
    component: UpcomingMovies
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: Sidebar
  },
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/your-list',
    name: 'YourList',
    component: YourList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
