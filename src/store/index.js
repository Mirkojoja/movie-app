import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    movies: []
  },
  getters: {
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies
    }
  },
  actions: {
        getMovies({commit}) {

      axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
      .then(result =>  {

        console.log(result.data)

        const movies = result.data.results
        commit('SET_MOVIES', movies)
      })
      
      .catch((error) => {
        console.log(error)
      })
      }
  },
  modules: {
  }
})
