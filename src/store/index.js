import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        films: []
    },
    getters: {
        getAllFilms(state) {
            return state.films
        }
    },
    mutations: {
        allFilms(state, films) {
            return state.films = films
        },
        oneFilm(state, filmID) {
            console.log(filmID);
            return state.films.filter(film => film)
        }
    },
    actions: {
        getFilms(context) {
            axios.get("http://localhost:3000/films")
                .then(response => context.commit('allFilms', response.data))
                .catch(error => console.log(error))
        }
    },
    modules: {
    }
})
