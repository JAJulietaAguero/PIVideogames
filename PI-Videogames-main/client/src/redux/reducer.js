import { GET_ALL_VIDEOGAMES } from "./actions-types";
import { GET_VIDEOGAME_DETAIL } from "./actions-types";
import { CLEAN_DETAIL } from "./actions-types";

const initialState = {
    videogameDetail: [],
    allVideogames: [],
    videogameId: [],
    genres: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
            }

        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                videogameDetail: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                videogameDetail: {}
            }
        default: 
        return {...state}
    }
}

export default reducer;