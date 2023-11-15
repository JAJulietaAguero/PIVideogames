import { GET_ALL_VIDEOGAMES } from "./actions-types";

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
        default: 
        return {...state}
    }
}

export default reducer;