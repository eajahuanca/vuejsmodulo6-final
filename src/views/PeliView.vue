<template>
    <div class="container text-light">
        <form method="post" class="form">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="film" id="series" value="serie" checked />
                <label class="form-check-label" for="series">
                    Series
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="film" id="movie" value="option2" />
                <label class="form-check-label" for="movie">
                    Pelicula
                </label>
            </div>
            <label for="movie-name" class="form-label">Nombre de la serie:</label>
            <input type="text" name="movie-name" id="name" placeholder="Nombre de la serie" class="form-control" />
        </form>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    data() {
        return {
            film: {},
        };
    },
    created() {
        axios
            .get("http://localhost:3000/films/" + this.$route.params.id)
            .then((response) => (this.film = response.data))
            .catch((error) => console.log(error));
    },
};
</script>
  