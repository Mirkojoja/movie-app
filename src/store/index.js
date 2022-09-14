import { createStore } from 'vuex'
import axios from 'axios'
// import { API_URL } from '@/config/env'

export default createStore({

  state: {
    login: false,
    popularMovies: [],
    trendMovies: [],
    movieDetail: {},
    cast: {},
    searchResults: [],
    upcomingMovies: [],
    movie: null,
    favourite: [],
  },


  getters: {
    getPopularMovies: (state) => state.popularMovies,

    getTrendMovies: (state) => state.trendMovies,

    getMovieDetial: (state) => state.movieDetail,

    getCast: (state) => state.cast,

    getSearchResults: (state) => state.searchResults,

    getUpcomingMovies: (state) => state.upcomingMovies,

    login: (state) => state.login,
    

  },


  mutations: {
    SET_POPULAR_MOVIES(state, popularMovies) {
      state.popularMovies = popularMovies
    },
    SET_TREND_MOVIES(state, trendMovies) {
      state.trendMovies = trendMovies
    },
    SET_DETIAL_MOVIES(state, movieDetail) {
      state.movieDetail = movieDetail
    },
    SET_CAST(state, cast) {
      state.cast = cast
    },
    SET_SEARCH_RESULTS(state, searchResults) {
      state.searchResults = searchResults
    },
    SET_FAVOURITE(state, {movie, quantity}) {
      state.favourite.push({
        movie,
        quantity,
      })
    },
    SET_UPCOMING_MOVIES(state, upcomingMovies) {
      state.upcomingMovies = upcomingMovies
    },
    SET_LOGIN(state, status) {
      state.login = status;
    }
  },


  actions: {
    getPopularMovies({ commit }) {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&page=`)
        .then(result => {
          console.log(result.data)
          const movies = result.data.results.splice(0, 12)
          commit('SET_POPULAR_MOVIES', movies)
        })

        .catch((error) => {
          console.log(error)
        })
    },

    getTrendMovies({ commit }) {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&language=en-US&page=`)
        .then(result => {
          console.log(result.data)
          const movies = result.data.results.splice(0, 12)
          commit('SET_TREND_MOVIES', movies)
        })

        .catch((error) => {
          console.log(error)
        })
    },
    getMovieDetial({ commit }, id) {
      console.log(id, 'store')
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&language=en-US`)
        .then(result => {
          console.log(result.data)
          const movies = result.data
          commit('SET_DETIAL_MOVIES', movies)
        })

        .catch((error) => {
          console.log(error)
        })
    },
    getCast({ commit }, id) {
      console.log(id, 'store')
      axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&language=en-US`)
        .then(result => {
          commit('SET_CAST', result.data.cast.splice(0, 6))
        })
        .catch((error) => {
          console.log(error)
        })
    },
      getUpcomingMovies({ commit }) {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&language=en-US&page=`)
        .then(result => {
        
          commit('SET_UPCOMING_MOVIES',  result.data.results.splice(0, 12))
        })

        .catch((error) => {
          console.log(error)
        })
    },
    
  getSearchResult({ commit }, query) {
       
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a06cfa7f0853984e8a69e2db2fd1b8fd&language=en-US=${query}`)
            .then(result => {
              console.log('movies for search', query);
              commit("SET_SEARCH_RESULTS", result.data.results) 
            })
         
            .catch((error) => {
              console.log(error)
            })
   
    },
    addFavourite({commit}, {movie, quantity }) {
            commit("SET_FAVOURITE", {movie, quantity } )
    },
    
  },
  modules: {
  }
})
