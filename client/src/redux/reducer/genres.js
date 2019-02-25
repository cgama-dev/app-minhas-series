import { createReducer } from 'reduxsauce'
import { Types } from '../actions';

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
    saved: false,
    isSaving: false
}

export const getGenreRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isLoading: true,
        error: false
    }
}

export const getGenreSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: false,
        data: action.genres
    }
}
export const createGenreRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
        error: false
    }
}

export const createGenteSuccess = (state = INITIAL_STATE, action) => {
    console.log("ACTION", action)
    return {
        ...state,
        isSaving: false,
        saved: true,
        error: false
    }
}

export default createReducer(INITIAL_STATE, {
    [Types.GET_GENRE_REQUEST]: getGenreRequest,
    [Types.GET_GENRE_SUCCESS]: getGenreSuccess,
    [Types.CREATE_GENRE_REQUEST]: createGenreRequest,
    [Types.CREATE_GENRE_SUCCESS]: createGenteSuccess
})