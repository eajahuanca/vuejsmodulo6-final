<template>
    <div class="container-fluid bg-black text-light">
        <div class="row">
            <ul>
                <li v-for="item in films" :key="item" class="col-2 align-top">
                    <card-component>
                        <template #img>
                            <img :src="item.show.image.original" :alt="item.show.name" class="card-img-top">
                        </template>
                        <template #body>
                            <h3 class="card-title p-2">{{item.show.name}}</h3>
                            <p v-html="item.show.summary" class="card-text p-2"></p>
                            <div class="col .d-flex text-center mb-2">
                                <button type="button" class="btn btn-primary me-2">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </div>
                        </template>
                    </card-component>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import CardComponent from '@/components/CardComponent.vue'
export default {
    name: 'HomeComponent',
    components: {
        CardComponent
    },
    computed: {
        films() {
            return this.$store.getters['getAllFilms']
        },
    },
}
</script>
  
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
  