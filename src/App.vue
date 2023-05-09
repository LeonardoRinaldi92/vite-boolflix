<script >
        import axios from 'axios';
    import searchbar from './components/searchbar.vue';
    import thumbBox from './components/thumbBox.vue';
    import { store } from './store';
    
    export default {
      name: 'App',
      data() {
        return{
          store,
          textSearch : '',
        }
      },
      components: {
        searchbar,
        thumbBox,
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
  <main>
      <searchbar/>
      <thumbBox/>
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
  } 
</style>
