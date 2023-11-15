import axios from 'axios';
import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME_DETAIL, CLEAN_DETAIL } from './actions-types';


const URL = 'http://localhost:3001/videogames';

export const getAllVideogames = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(URL);
            return dispatch({ type: GET_ALL_VIDEOGAMES, payload: data});
        } catch (error) {
            console.log(error);
        }
    }
}

export const getVideogameDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL}${id}`);
            return dispatch({ type: GET_VIDEOGAME_DETAIL, payload: data })
        } catch (error) {
            console.log(error);
        }
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}