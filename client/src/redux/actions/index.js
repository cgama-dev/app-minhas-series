import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    
    // ActionsCreators Series
    getSerieByIdRequest: ['id'],
    getSerieByGenreRequest: ['genre'],

    getSerieRequest: null,
    getSerieSuccess: ['series'],
    getSerieFailure: ['error'],
    
    createSerieRequest: ['serie'],
    createSerieSuccess: ['serie'],
    createSerieFailure: ['error'],
    
    updateSerieRequest: ['id'],
    updateSerieSuccess: ['id'],
    updateSerieFailure: ['error'],
    
    deleteSerieRequest: ['id'],
    deleteSerieSuccess: ['id'],
    deleteSerieFailure: ['error'],
    
    // ActionsCreators Generos
    getGenreRequest: null,
    getGenreSuccess: ['genres'],
    getGenreFailure: ['error'],
    
    createGenreRequest: ['genre'],
    createGenreSuccess: ['genre'],
    createGenreFailure: ['error'],
    
    updateGenreRequest: ['id'],
    updateGenreSuccess: ['id'],
    updateGenreFailure: ['error'],
    
    deleteGenreRequest: ['id'],
    deleteGenreSuccess: ['id'],
    deleteGenreFailure: ['error']

})


export default Creators