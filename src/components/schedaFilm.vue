<script>
    import axios from 'axios';
    import {store} from '../store';
    export default {
        name: 'schedaFilm',
        data() {
            return{
                store,
            }
        },
        methods: {
            chiamataFilm(){
                axios.get(store.pathAPI + store.pathMovieScheda + store.idFilm + "?" +store.pathKey + store.pathLanguage)
                .then ( (res) => {
                    store.elementOnScreen =  res.data
                })
                console.log(store.pathAPI + store.pathMovieScheda + store.idFilm + "?" +store.pathKey + store.pathLanguage)
                console.log(store.elementOnScreen)
            }
        },
        created() {
            this.chiamataFilm()
        }
    }
</script>

<template>
    <div>
        ciao
    </div>
</template>

