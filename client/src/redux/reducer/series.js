import { createReducer } from 'reduxsauce'
import { Types } from '../actions';

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
    saved: false,
    isSaving: false
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
        error: false
    }
}

export default createReducer(INITIAL_STATE, {
    [Types.GET_SERIE_REQUEST]: getSerieRequest,
    [Types.GET_SERIE_SUCCESS]: getSerieSuccess,
    [Types.CREATE_SERIE_REQUEST]: createSerieRequest,
    [Types.CREATE_SERIE_SUCCESS]: createSerieSuccess
})