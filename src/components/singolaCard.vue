<script>
    import { store } from '../store';
    export default {
        name: 'singolaCard',
        props: ['elementoArray'],
        data() {
            return {
                store
            }    
        },
        methods: {
            checkType() {
                if (this.elementoArray.media_type == 'movie' || this.elementoArray.original_title )
                {
                    store.idFilm = this.elementoArray.id
                    store.typeId = 'movie'
                    console.log("ciao")
                } else {

                    store.idFilm = this.elementoArray.id
                    store.typeId = 'tv'
                    console.log('altro')
                }
            },
            voto() {
                return Math.ceil(this.elementoArray.vote_average / 2)
            },
            titolo() {
                if (this.elementoArray.name) {
                    return this.elementoArray.name
                } else {
                    return this.elementoArray.title
                }
            },
            titoloOriginale() {
                if (this.elementoArray.original_name) {
                    return this.elementoArray.original_name
                } else {
                    return this.elementoArray.original_title
                }
            },
            bandiera(){
                let bandiera = this.elementoArray.original_language
                if (bandiera == 'en' || bandiera == 'uk' || bandiera == 'he') {
                    bandiera = 'gb'
                }
                else if (bandiera == 'ja'){
                    bandiera = 'jp'
                }
                else if (bandiera == 'da'){
                    bandiera = 'dk'
                }
                else if (bandiera == 'cs'){
                    bandiera = 'cz'
                }
                else if (bandiera =='hi'){
                    bandiera = 'in'
                }
                else if (bandiera == 'zh'){
                    bandiera = 'tw'
                }
                else if ( bandiera == 'ko'){
                    bandiera = 'kr'
                }
                return "https://flagcdn.com/w20/" + bandiera +".jpg"
            }
        }
    }
</script>

<template>
    <div v-if="elementoArray.poster_path" class="boxcard" >
        <div v-if="elementoArray.media_type && elementoArray.media_type == 'movie' " class="movietype">
            FILM
        </div>
        <div v-else-if="elementoArray.media_type && elementoArray.media_type == 'tv' " class="movietype">
            SERIE
        </div>
        <img :src="store.pathImageBig+elementoArray.poster_path" alt="">
        <div class="descrizione" @click="checkType">
            <div>
                <p>
                    <b>TITOLO:</b> <br>
                    {{ titolo() }}
                </p>
                
                <p v-if="titolo() !== titoloOriginale()">
                    <b>TITOLO ORIGINALE:</b> <br>
                    {{ titoloOriginale()}}
                </p>
                <p v-if="elementoArray.original_language">
                    <p>LINGUA ORIGINALE:</p>
                    <img :src="bandiera()" alt="">
                </p>     
                <p class="voto">
                    <b>VOTO :</b>
                    <span v-for="n in 5" :style="(n <= voto()) ? 'color: gold;':'' ">
                        &#9733;
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
                    line-height: 0.8rem;

                }
                img {
                    width: 30px;;
                }
                
            }

        }
    }


</style>