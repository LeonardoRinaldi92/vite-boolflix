<script>
    import {store} from '../store';
    import singolaCard from './singolaCard.vue';

    export default {
        name: 'thumbBox',
        components: {
            singolaCard,
        },
        data(){
            return {
                store
            }
        },
    }

</script>

<template>
    <div class="box">
        <div v-if="store.textSearched == '' && store.home " class="lane">
            <p class="titleCategory">
                Scopri i film...
            </p>
            <div class="lineaInterna">
                <singolaCard v-for="(element, index) in store.ArrayOnScreenMovie" :elementoArray="element" />
            </div>
        </div>
        <div v-if="store.textSearched == '' && store.home" class="lane">
            <p class="titleCategory">
                Scopri le serie TV...
            </p>
            <div class="lineaInterna">
               <singolaCard v-for="(element, index) in store.ArrayOnScreenTv" :elementoArray="element" />  
            </div>
        </div>
        <div v-if="store.textSearched !== '' " class="lane">
            <p class="titleCategory">
                Hai cercato: {{ store.textSearched }}
            </p>
            <div class="lineaInterna">
               <singolaCard v-for="(element, index) in store.ArrayOnScreenSearched" :elementoArray="element" />  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .box {
        margin-top: 50px;
        height: 80vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        .lane {
            padding: 0px 50px 50px 50px;
            .titleCategory{
                color: white;
                font-size: 2rem;
                text-transform: capitalize;
                margin-bottom: 20px;
            }
            .lineaInterna {
                display: flex;
                flex-wrap: wrap;
            }
        }

    }

</style>

