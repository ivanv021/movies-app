import Vue from 'vue'
import Vuex from 'vuex'
import { moviesService } from './../services/MoviesService'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {

    movies: [],
    searchTerm: ''


  },

  mutations: {

    setMovies(state, movies) {

      state.movies = movies

    },

    setSearchTerm(state, { term }) {

      state.searchTerm = term


    }



  },

  actions: {
    async fetchMovies(context) {
      try {
      const response = await moviesService.getAll()
      context.commit('setMovies', response.data)
      return response.data


    } catch (error) {} // eslint-disable-line

  }

 


  },

  getters: {

    filteredMovies(state) {

      return state.movies.filter((movie) => movie.title.toLowerCase().includes(state.searchTerm.toLowerCase()));


    }


  }


})

export default store
