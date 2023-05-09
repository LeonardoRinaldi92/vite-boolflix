<script>
    import {store} from '../store';
    export default {
        name: 'searchbar',
        data() {
            return{
                store,
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
            <input type="text" placeholder="Cerca qui..." v-model="store.textSearched"  @change="$emit('ricerca')">

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
        .logo {
            flex-basis: 30%;
            img{
                width: 80%;
            } 
        }
        .search {
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
    }

</style>