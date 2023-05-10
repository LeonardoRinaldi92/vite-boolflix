<script>
    import axios from 'axios';
    import {store} from '../store';
    export default {
        name: 'searchbar',
        data() {
            return{
                store,
            }

        },
        methods: {
            GoHome(){
                if(!store.home){
                    store.search = false
                    store.home = true
                    store.serie = false
                    store.film = false
                    store.textSearched = ''
                }else{
                    store.textSearched = ''
                }
            },
            GoSerie(){
                if(!store.serie){
                    store.search = false
                    store.serie = true
                    store.home = false
                    store.film = false
                    store.textSearched = ''
                }else{
                    store.textSearched = ''
                }

                this.chiamataGeneriTv();
            },
            GoFilm(){
                if(!store.film){
                    store.search = false
                    store.film = true
                    store.home = false
                    store.serie = false
                    store.textSearched = ''
                }else{
                    store.textSearched = ''
                }
                this.chiamataGeneriFilm();
            },
            chiamataGeneriFilm(){
                if(!store.ArrayFilmConGeneri.length) {
                    store.ArrayGeneriFilm.forEach(element => {
                        axios.get(store.pathAPI + store.pathDiscover + store.pathMovie + store.pathKey + store.pathLanguage  + store.pathGeneri + element.id)
                        .then( (res)=> {
                        store.ArrayFilmConGeneri.push(res.data.results)
                        })
                    });   
                }
            },
            chiamataGeneriTv(){
                if(!store.ArrayTvConGeneri.length) {
                    store.ArrayGeneriTv.forEach(element => {
                        axios.get(store.pathAPI + store.pathDiscover + store.pathTV + store.pathKey + store.pathLanguage  + store.pathGeneri + element.id)
                        .then( (res)=> {
                        store.ArrayTvConGeneri.push(res.data.results)
                        })
                    });   
                }
            }

            }
        }

</script>

<template>
    <div>
        <div class="logo">
            <img src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">

        </div>
        <div class="search" >
            <span :class="store.home  ? 'active' : ''" @click="GoHome"> 
                Home
            </span>
            <span :class="store.serie  ? 'active' : ''" @click="GoSerie">
                serie tv
            </span>
            <span :class="store.film  ? 'active' : ''" @click="GoFilm">
                film
            </span>
            <span v-if="!store.search" @click="store.search = true">
                cerca
            </span>
            <input v-if="store.search" type="text" placeholder="Cerca qui..." v-model="store.textSearched"  @change="$emit('ricerca')">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/partials/variable";
    div {
        height: 10vh;
        width: 100%;
        background-color: $black;
        padding: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .logo {
            flex-basis: 10%;
            img{
                height: 40px;
            } 
        }
        .search {
            span {
                color: white;
                text-transform: capitalize;
                font-size: 1.2rem;
                margin-right: 20px;
                cursor: pointer;
                opacity: 0.6;
                &:hover {
                    opacity: 1;
                }

            }
            input {
                height: 50px;
                border: 0;
                background-color: $grey;
                border: 2px solid white;
                font-size: 1.6rem;
                color: white;
                padding: 0px 10px;
                width: 500px;
                &:focus {
                    box-shadow: none;
                    outline: none;
            }  
            } 
        }
        .category {
            span {
                color: white;
                text-transform:capitalize;
                font-size: 1.2rem;

            }
        }
    }

</style>