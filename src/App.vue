<script >

    import searchbar from './components/searchbar.vue';
    
    export default {
      name: 'App',
      components: {
        searchbar,
      }
    }

</script>

<template>
  <main>
      <searchbar/>

  </main>
</template>

<style lang="scss">
@use './style/main.scss';
  main {
    height: 100vh;
    width: 100%;
    background-color: #141414;
  } 
</style>
