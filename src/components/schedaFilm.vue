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
            },
            
        },
        created() {
            this.chiamataFilm()
        }
    }
</script>

<template>
    <div class="containerScheda">
        <div class="boxDescription">
            <img :src="`https://image.tmdb.org/t/p/original/${store.elementOnScreen.backdrop_path}`" alt="">

        </div>

        
    </div>
</template>

<style lang="scss" scoped>
    .containerScheda{
        background-color: rgba(0, 0, 0, 0.192);
        width: 100%;
        z-index: 9999;
        position: absolute;
        .boxDescription {
            width: 100%;
            margin: 0 auto;
            height: 89vh;
            background-color: black;
            overflow: hidden;
            img {
                height: 89vh;
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
    }
</style>
