
import api from './../../services/api'

import { put } from 'redux-saga/effects'

import ActionsCreators from './../actions/index'

export function* getSeriesByGenre(action) {

    const genreId = action.genre

    const series = yield api.get('series/genre/' + genreId)

    yield put(ActionsCreators.getSerieSuccess(series.data.data))
}

export function* getSeriesById(action) {

    const serieId = action.id

    const series = yield api.get('series/' + serieId)

    yield put(ActionsCreators.getSerieSuccess(series.data.data))
}