<script >
        import axios from 'axios';
    import searchbar from './components/searchbar.vue';
    import thumbBox from './components/thumbBox.vue';
    import schedaFilm from './components/schedaFilm.vue';
    import { store } from './store';
    
    export default {
      name: 'App',
      data() {
        return{
          store,
        }
      },
      components: {
        searchbar,
        thumbBox,
        schedaFilm,
      },
      created() {
        this.chiamtaApi()
        this.chiamataGeneriFilm()
        this.chiamataGeneriTv()
      },
      methods: {
        chiamtaApi(){
          if(store.textSearched == ''){
          axios.get(store.pathAPI + store.pathDiscover + store.pathMovie + store.pathKey + store.pathLanguage + store.pathRegion + store.pathItaly)
          .then( (res) =>{
              store.ArrayOnScreenMovie = res.data.results
              console.log("movie", store.ArrayOnScreenMovie)
          })
          axios.get(store.pathAPI + store.pathDiscover + store.pathTV + store.pathKey + store.pathLanguage + store.pathPopularity + store.pathRegion + store.pathItaly)
          .then( (res) =>{
              store.ArrayOnScreenTv = res.data.results
              console.log("TV", store.ArrayOnScreenTv)
              console.log(store.pathAPI + store.pathDiscover + store.pathTV + store.pathKey + store.pathLanguage + store.pathPopularity + store.pathRegion + store.pathItaly)
          })
        }else {
          store.home = false
          store.serie = false
          store.film = false
          axios.get(store.pathAPI + store.pathSearch + store.pathMulti + store.pathKey +store.pathRicerca + store.textSearched + store.pathLanguage )
          .then( (res) =>{
              store.ArrayOnScreenSearched = res.data.results
              console.log(store.ArrayOnScreenSearched)
          })
        }
        },
        chiamataGeneriFilm(){
            axios.get(store.pathChiamataGeneriFilm).then ( (res)=>{
              store.ArrayGeneriFilm = res.data.genres
              console.log("generi FILM",store.ArrayGeneriFilm)
            })
        },
        chiamataGeneriTv(){
            axios.get(store.pathChiamataGeneriTv).then ( (res)=>{
              store.ArrayGeneriTv = res.data.genres
              console.log("generi TV",store.ArrayGeneriTv)
            })

        },
        
        
    
      },  
    }

</script>

<template>
  <main>
      <searchbar @ricerca="chiamtaApi()"/>
      <schedaFilm v-if="store.idFilm !== ''"/>
      <thumbBox v-else/>
  </main>
</template>

<style lang="scss">
@use './style/main.scss';
  @import "./style/partials/variable";
  main {
    height: 100vh;
    width: 100%;
    background-color: $grey;
    overflow: auto;
    position: relative;
  }
  
</style>
