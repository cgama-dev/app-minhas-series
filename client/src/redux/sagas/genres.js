
import api from './../../services/api'

import { put } from 'redux-saga/effects'

import ActionsCreators from './../actions/index'

export function* getGenres() {

    const genres = yield api.get('genres')

    yield put(ActionsCreators.getGenreSuccess(genres.data.data))
}