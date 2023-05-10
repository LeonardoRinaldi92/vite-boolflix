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
    <div v-if="elementoArray.poster_path" class="boxcard">
        <div v-if="elementoArray.media_type && elementoArray.media_type == 'movie' " class="movietype">
            FILM
        </div>
        <div v-else-if="elementoArray.media_type && elementoArray.media_type == 'tv' " class="movietype">
            SERIE
        </div>
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
                <p v-if="elementoArray.original_language">
                    <p>LINGUA ORIGINALE:</p>
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
    @import "../style/partials/variable";
    .boxcard {
        margin-bottom: 2px;
        flex-basis: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        position: relative;

        &:hover .movietype {
            display: none;
        }
        &:hover .descrizione{
            display: block;
        }

        .movietype {
                position: absolute;
                top: 2px;
                left: 2px;
                font-size: 0.8rem;
                color: white;
                background-color: $red;
                padding: 2px 6px;
                display: block;
            }

        img {
            width:100%;
            height: 100%;
        }
        .descrizione {
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            background-color: rgba(0, 0, 0, 0.742);
            color: white;
            display: none;
            overflow: hidden;
            div {
                width: 80%;
                margin: 0 auto;
                p {
                    font-size: 0.8rem;
                    margin-top: 10px;
                    line-height: 0.6rem;

                }
                img {
                    width: 30px;;
                }
                
            }

        }
    }


</style>