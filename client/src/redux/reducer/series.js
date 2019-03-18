import { createReducer } from 'reduxsauce'
import { Types } from '../actions';

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
    saved: false,
    isSaving: false
}

export const getSerieByGenreRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isLoading: true,
        saved:false,
        error: false
    }
}

export const getSerieByIdRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isLoading: true,
        saved: false,
        error: false
    }
}

export const getSerieRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isLoading: true,
        error: false
    }
}

export const getSerieSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: false,
        data: action.series
    }
}
export const createSerieRequest = (state = INITIAL_STATE, actions) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
        error: false
    }
}

export const createSerieSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        error: false,
        data: [action.serie]
    }
}

export const updateSerieRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
        error: false
    }
}
export const updateSerieSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        error: false,
        data: action.serie
    }
}
export const updateSerieFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: action.error
    }
}


export const deleteSerieRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: false
    }
}

export const deleteSerieSuccess = (state = INITIAL_STATE, action) => {

    let series = [...state.data]

    series = series.filter((item) => item._id !== action.id)

    return {
        ...state,
        isSaving: false,
        data: series
    }
}

export const deleteSerieFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isSaving: false,
        error: true
    }
}


export default createReducer(INITIAL_STATE, {
    [Types.GET_SERIE_REQUEST]: getSerieRequest,
    [Types.GET_SERIE_BY_GENRE_REQUEST]: getSerieByGenreRequest,
    [Types.GET_SERIE_BY_ID_REQUEST]: getSerieByIdRequest,
    [Types.GET_SERIE_SUCCESS]: getSerieSuccess,
    [Types.CREATE_SERIE_REQUEST]: createSerieRequest,
    [Types.CREATE_SERIE_SUCCESS]: createSerieSuccess,
    [Types.UPDATE_SERIE_REQUEST]: updateSerieRequest,
    [Types.UPDATE_SERIE_SUCCESS]: createSerieSuccess,
    [Types.DELETE_SERIE_REQUEST]: deleteSerieRequest,
    [Types.DELETE_SERIE_SUCCESS]: deleteSerieSuccess,
    [Types.DELETE_SERIE_FAILURE]: deleteSerieFailure
})