<script>
    import {store} from '../store';

    export default {
        name: 'thumbBox',
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
                
            </div>
        </div>
        <div class="lane">
            <span class="titleCategory">
                Scopri i film...
            </span>
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

