
import api from './../../services/api'

import { put } from 'redux-saga/effects'

import ActionsCreators from './../actions/index'

export function* saveSerie(action) {

    const serie = yield api.post('series', action.serie)

    yield put(ActionsCreators.createSerieSuccess(serie.data.data))
}

export function* getSeriesByGenre(action) {

    const genreId = action.genre

    const series = yield api.get('series/genre/' + genreId)

    yield put(ActionsCreators.getSerieSuccess(series.data.data))
}

export function* getSeriesById(action) {

    const serieId = action.id

    const serie = yield api.get('series/' + serieId)

    yield put(ActionsCreators.getSerieSuccess([serie.data.data]))
}

export function* updateSerie(action) {

    const serie = yield api.put('series/' + action.id, action.serie)

    const newSerie = { ...serie.data.data, genre: { _id: serie.data.data.genre } }

    yield put(ActionsCreators.updateSerieSuccess(newSerie))

}