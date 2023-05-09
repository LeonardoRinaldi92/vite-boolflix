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
        <div class="lane">
            <span class="titleCategory">
                Scopri le serie TV...
            </span>
            <div>
               <singolaCard v-for="(element, index) in store.ArrayOnScreenTv" :array="element" />  
            </div>
        </div>
        <div class="lane">
            <span class="titleCategory">
                Scopri i film...
            </span>
            <div>
                <singolaCard v-for="(element, index) in store.ArrayOnScreenMovie" :array="element" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scooped>
    .box {
        height: 80vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        .lane {
            flex-basis: calc(100% / 3);
            padding: 50px;
            .titleCategory{
                color: white;
                font-size: 2rem;
                text-transform: capitalize;
                margin-bottom: 50px;

            }
        }

    }

</style>

