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
                    <b>TITOLO:</b> <br>
                    {{ elementoArray.name }}
                </p>
                <p v-else>
                    <b>TITOLO:</b> <br>
                    {{ elementoArray.title }}
                </p>
                <p v-if="elementoArray.original_name">
                    <b>TITOLO ORIGINALE:</b> <br>
                    {{ elementoArray.original_name }}
                </p>
                <p v-else>
                    <b>TITOLO ORIGINALE:</b> <br>
                    {{ elementoArray.original_title }}
                </p>
                <p>
                    <b>LINGUA ORIGINALE:</b>
                    <img :src="store.urlBandiere+elementoArray.original_language+-100" alt="">
                </p>     
                <p class="voto">
                    <b>VOTO :</b>
                    <span v-if="elementoArray.vote_average > 8">
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                    </span>
                    <span v-else-if="elementoArray.vote_average > 6">
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span>&#9733;</span>
                    </span>
                    <span v-else-if="elementoArray.vote_average > 4">
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </span>
                    <span v-else-if="elementoArray.vote_average > 4">
                        <span style="color: gold;">&#9733;</span>
                        <span style="color: gold;">&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </span>
                    <span v-else-if="elementoArray.vote_average > 2">
                        <span>{{ elementoArray.vote_average }}</span>
                        <span style="color: gold;">&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </span>
                    <span v-else>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </span>
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
                    font-size: 0.8rem;
                    margin-top: 10px;
                    line-height: 0.8rem;

                }
                img {
                    width: 30px;
                    margin-top: 5px;
                }
                
            }

        }
    }


</style>