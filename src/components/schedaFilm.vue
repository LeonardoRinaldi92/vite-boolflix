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
                console.log(store.elementOnScreen)
            }
        },
        created() {
            this.chiamataFilm()
        }
    }
</script>

<template>
    <div class="containerScheda">

        
    </div>
</template>

<style lang="scss" scoped>
    .containerScheda{
        background-color: rgba(0, 0, 0, 0.192);
        height: 100%;
        width: 100%;
        z-index: 9999;
        position: absolute;
    }
</style>
