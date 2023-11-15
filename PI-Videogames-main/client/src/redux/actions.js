import { GET_ALL_VIDEOGAMES } from './actions-types';
import axios from 'axios';

const URL = 'http://localhost:3001/videogames';

export const getAllVideogames = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(URL);
            return dispatch({ type: GET_ALL_VIDEOGAMES, payload: data});
        } catch (error) {
            console.log(error)
        }
    }
}