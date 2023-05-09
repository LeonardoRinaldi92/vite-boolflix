import { reactive } from "vue";

export const store = reactive (
    { 
        pathAPI : 'https://api.themoviedb.org/3/',
        pathSearch : 'search/',
        pathDiscover : 'discover/',
        pathMulti : 'multi?',
        pathMovie : 'movie?',
        pathTV: 'tv?',
        pathKey : 'api_key=553a5f7d4578dcd45e775fe2ac050910',
        pathPopularity: '&sort_by=popularity.desc',
        pathRicerca : '&query=',
        pathLanguage: '&language=it-IT',
        pathItaly: '&with_status=0&with_type=0',
        pathRegion: '&watch_region=IT',
        pathGenerTv : 'https://api.themoviedb.org/3/genre/tv/list?api_key=553a5f7d4578dcd45e775fe2ac050910&language=it-IT',
        pathGenerMovie : 'https://api.themoviedb.org/3/genre/movie/list?api_key=553a5f7d4578dcd45e775fe2ac050910&language=it-IT',
        pathImageBig: 'https://image.tmdb.org/t/p/w500',
        ArrayOnScreenMovie : [],
        ArrayOnScreenTv: [],
        ArrayOnScreenSearched: [],
        textSearched: '',
        urlBandiere : "https://www.unknown.nu/flags/images/",
        isSearching: false,
    }   
 
)