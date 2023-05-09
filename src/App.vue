<script >

    import searchbar from './components/searchbar.vue';
    import thumb from './components/thumb.vue';
    
    export default {
      name: 'App',
      components: {
        searchbar,
        thumb,
      }
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
  main {
    height: 100vh;
    width: 100%;
    background-color: #141414;
  } 
</style>
