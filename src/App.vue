<script >

    import searchbar from './components/searchbar.vue';
    import thumb from './components/thumb.vue';
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
        thumb,
      },
    }

</script>

<template>
  <main>
      <searchbar/>
      <thumb/>
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
