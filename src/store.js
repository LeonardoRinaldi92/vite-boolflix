import { reactive } from "vue";

export const store = reactive (
    { 
        pathAPI : 'https://api.themoviedb.org/3/',
        pathSearch : 'search/',
        pathDiscover : 'discover/',
        pathMovie : 'movie?',
        pathTV: 'tv?',
        pathKey : 'api_key=553a5f7d4578dcd45e775fe2ac050910',
        pathRicerca : '&query=',
        pathLanguage: '&language=it-IT',
        pathGenerTv : 'https://api.themoviedb.org/3/genre/tv/list?api_key=553a5f7d4578dcd45e775fe2ac050910&language=it-IT',
        pathGenerMovie : 'https://api.themoviedb.org/3/genre/movie/list?api_key=553a5f7d4578dcd45e775fe2ac050910&language=it-IT',
        arrayOnScreenMovie : [],
        ArrayonScreenTv: [],
        textSearched: '',
    }   
 
)