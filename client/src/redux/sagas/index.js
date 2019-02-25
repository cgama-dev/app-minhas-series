
import { put, takeLatest } from 'redux-saga/effects'

import { Types } from './../actions/index'

import { getGenres } from './genres'

import { getSeriesByGenre, getSeriesById } from './series'

export default function* rootSagas() {

    yield takeLatest(Types.GET_GENRE_REQUEST, getGenres)
    yield takeLatest(Types.GET_SERIE_BY_GENRE_REQUEST, getSeriesByGenre)
    yield takeLatest(Types.GET_SERIE_BY_ID_REQUEST, getSeriesById)

}