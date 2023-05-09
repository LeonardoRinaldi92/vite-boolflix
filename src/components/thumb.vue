<script>
    import {store} from '../store';
    import axios from 'axios';

    export default {
        name: 'thumb',
        data(){
            return {
                store
            }
        },
        created() {
            this.chiamtaApi()
        },
        methods: {
            chiamtaApi(){
                axios.get(store.pathAPI + store.pathDiscover + store.pathMovie + store.pathKey + store.pathLanguage)
                .then( (res) =>{
                    store.arrayOnScreenMovie = res.data.results
                    console.log (store.arrayOnScreenMovies)
                })
                axios.get(store.pathAPI + store.pathDiscover + store.pathTV + store.pathKey + store.pathLanguage)
                .then( (res) =>{
                    store.arrayOnScreenTV = res.data.results
                    console.log (store.arrayOnScreenTV )
                })


            }
        },

    }

</script>
<template>
</template>