<script>
    import { store } from '../store';
    export default {
        name: 'singolaCard',
        props: ['elementoArray'],
        data() {
            return {
                store
            }    
        }
    }
</script>

<template>
    <div class="boxcard">
        <!-- <span v-if="elementoArray.name">
            {{ elementoArray.name }}
        </span>
        <span v-else>
            {{ elementoArray.title }}

        </span> -->
        <img :src="store.pathImageBig+elementoArray.poster_path" alt="">


    </div>
</template>

<style lang="scss" scoped>
    .boxcard {
        flex-basis: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;

        img {
            width:100%;
            height: 100%;
        }
    }


</style>