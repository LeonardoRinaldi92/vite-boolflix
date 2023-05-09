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
              store.ArrayOnScreenMovie = res.data.results
              console.log("movie", store.ArrayOnScreenMovie)
          })
          axios.get(store.pathAPI + store.pathDiscover + store.pathTV + store.pathKey + store.pathLanguage)
          .then( (res) =>{
              store.ArrayOnScreenTv = res.data.results
              console.log("TV", store.ArrayOnScreenTv)

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
