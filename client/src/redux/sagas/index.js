
import { takeLatest } from 'redux-saga/effects'

import { Types } from './../actions/index'

import { getGenres } from './genres'

import { getSeriesByGenre, getSeriesById, updateSerie, saveSerie } from './series'

export default function* rootSagas() {
    yield takeLatest(Types.CREATE_SERIE_REQUEST, saveSerie)
    yield takeLatest(Types.GET_GENRE_REQUEST, getGenres)
    yield takeLatest(Types.GET_SERIE_BY_GENRE_REQUEST, getSeriesByGenre)
    yield takeLatest(Types.GET_SERIE_BY_ID_REQUEST, getSeriesById)
    yield takeLatest(Types.UPDATE_SERIE_REQUEST, updateSerie)

}