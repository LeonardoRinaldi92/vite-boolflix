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
        
        <img :src="store.pathImageBig+elementoArray.poster_path" alt="">
        <div class="descrizione">
            <div>
                <p v-if="elementoArray.name">
                    {{ elementoArray.name }}
                </p>
                <p v-else>
                    {{ elementoArray.title }}
                </p>
            </div>
            
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .boxcard {
        margin-bottom: 5px;
        flex-basis: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        position: relative;
        &:hover .descrizione{
            display: block;
        }

        img {
            width:100%;
            height: 100%;
        }
        .descrizione {
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            background-color: rgba(0, 0, 0, 0.742);
            color: white;
            display: none;
            div {
                width: 80%;
                margin: 0 auto;
                p {
                    margin-top: 10px;
                }
            }
        }
    }


</style>