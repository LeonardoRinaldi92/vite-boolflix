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
                if (store.typeId == 'movie'){
                    axios.get(store.pathAPI + store.pathMovieScheda + store.idFilm + "?" +store.pathKey + store.pathLanguage)
                    .then ( (res) => {
                        store.elementOnScreen =  res.data
                    })
                    axios.get(store.pathAPI + store.pathMovieScheda + store.idFilm + "/casts?" + store.pathKey )
                    .then ( (res) => {
                        store.actorsOnScreen = res.data
                        console.log(store.actorsOnScreen)
                    })
                } else {
                    axios.get(store.pathAPI + store.pathTvScheda + store.idFilm + "?" +store.pathKey + store.pathLanguage)
                    .then ( (res) => {
                        store.elementOnScreen =  res.data
                    })
                    // console.log(store.pathAPI + store.pathTvScheda + store.idFilm + "/credits?" + store.pathKey)
                    // axios.get(store.pathAPI + store.pathTvScheda + store.idFilm + "/credits?" + store.pathKey )
                    // .then ( (res) => {
                    //     store.actorsOnScreen = res.data
                    //     console.log(store.actorsOnScreen)
                    // })
                }
            },
            titolo(){
                if(store.elementOnScreen.title){
                    return store.elementOnScreen.title
                }else {
                    return store.elementOnScreen.name
                }
            },
            titoloOriginale(){
                if(store.elementOnScreen.original_title){
                    return store.elementOnScreen.original_title
                }else {
                    return store.elementOnScreen.original_name
                }
            },
            dataMessaInOnda(){
                if(store.elementOnScreen.first_air_date){
                    return store.elementOnScreen.first_air_date.split("-").reverse().join('/')
                }else if(store.elementOnScreen.release_date) {
                    return store.elementOnScreen.release_date.split("-").reverse().slice(2).join()
                }
            }
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
            <div class="box-interno">
                <div class="struttura">
                    <div>
                        <h1>
                            {{ titolo() }}
                        </h1>
                        <h3 v-if="store.elementOnScreen.tagline" class="tagline">
                            <i>"{{ store.elementOnScreen.tagline }}"</i>
                        </h3>
                        <h3 v-if="titoloOriginale() !== titolo()">
                            Titolo originale : {{ titoloOriginale() }}
                        </h3>
                        <h3 v-if="store.elementOnScreen.release_date">
                            Anno: {{ dataMessaInOnda()}}
                        </h3>
                        <p>
                            {{ store.elementOnScreen.overview }}
                        </p>
                        <h3 v-if="store.elementOnScreen.runtime">
                            Durata: {{ store.elementOnScreen.runtime }} min.
                        </h3>
                        <h3 v-if="store.elementOnScreen.number_of_seasons">
                            Stagioni: {{ store.elementOnScreen.number_of_seasons }}
                        </h3>
                        <h3 v-if="store.elementOnScreen.number_of_episodes">
                            Epidosi totali: {{ store.elementOnScreen.number_of_episodes }}
                        </h3>
                        <h3 v-if="store.elementOnScreen.episode_run_time && store.elementOnScreen.episode_run_time.length">
                            Duarata episodi : {{ store.elementOnScreen.episode_run_time[0] }} min.
                        </h3>
                        <h3>
                            Genere:
                        </h3>
                        <div>
                            <span v-for="(element, index) in store.elementOnScreen.genres" class="generi">
                                {{ element.name }}
                            </span>
                        </div>
                        <h3 v-if=" store.typeId == 'movie'">
                            Cast:
                        </h3>
                        <div v-if=" store.typeId == 'movie'" class="cast">
                            <span v-for="n in 5" :key="index">
                                {{ store.actorsOnScreen.cast[n].name }} 
                                <i>nel ruolo di:</i> 
                                {{ store.actorsOnScreen.cast[n].character }}
                            </span>
                        </div>
                        <h3 v-if="store.elementOnScreen.first_air_date">
                            Data prima messa in onda: {{ dataMessaInOnda() }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/partials/variable";
    .containerScheda{
        background-color: rgba(0, 0, 0, 0.192);
        width: 100%;
        z-index: 100;
        position: absolute;
        .boxDescription {
            width: 100%;
            margin: 0 auto;
            height: 89vh;
            background-color: black;
            overflow: hidden;
            position: relative;
            img {
                height: 89vh;
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
            .box-interno{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                .struttura {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    div {
                        flex-basis: 50%;
                        .tagline {
                            color: #ffffff;
                            text-shadow: none;

                        }
                        h1 {
                            color: $red;
                            font-size: 3rem;
                            margin-left: 50px;
                            text-shadow: -1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
                        }
                        p,
                        h3 {
                            margin-top: 1rem;
                            color: white;
                            margin-left: 50px;
                            font-size: 1rem;
                            text-shadow: -0.5px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
                        }
                        div {
                            margin-left: 50px;
                            span {
                                margin-right: 20px;
                                color: white;
                                text-shadow: -0.5px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
                            }
                            
                        }
                        .cast {
                            span {
                                display:block;
                            }
                        }
                        
                    }
                }
            }
        }
    }
</style>
