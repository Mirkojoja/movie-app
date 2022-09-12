import { createStore } from 'vuex'
import axios from 'axios'
import { API_URL } from '@/config/env'

export default createStore({

  state: {
    popularMovies: [],
    trendMovies: [],
    movieDetail: {},
    cast: {}
  },


  getters: {
    getPopularMovies: (state) => state.popularMovies,

    getTrendMovies: (state) => state.trendMovies,
  },


  mutations: {
    SET_POPULAR_MOVIES(state, popularMovies) {
      state.popularMovies = popularMovies
    },
    SET_TREND_MOVIES(state, trendMovies) {
      state.trendMovies = trendMovies
    },
 
  },


  actions: {
      getPopularMovies({commit}) {
          axios.get(`${API_URL}/movie/popular`)
          .then(result =>  {
              console.log(result.data)
        const movies = result.data.results.splice(0,12)
        commit('SET_POPULAR_MOVIES', movies)
      })
  
      .catch((error) => {
        console.log(error)
      })
      },

      getTrendMovies({commit}) {
        axios.get(`${API_URL}/movie/top_rated`)
        .then(result =>  {
          console.log(result.data)
          const movies = result.data.results.splice(0,12)
          commit('SET_TREND_MOVIES', movies)
        })
    
        .catch((error) => {
          console.log(error)
        })
        },
  //       async getSearchResult({ commit }, query) {
  //         console.log(query);
  //         const response = await axios
  //         .get(`https://api.themoviedb.org/3/search/movie?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&language=en-US=${query}`)
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //         .finally(() => (this.loading = false));
  //         commit("SET_SEARCH_RESULT", response.data.results)
  //         console.log(response.data.result)
  // },
},
  modules: {
  }
})
