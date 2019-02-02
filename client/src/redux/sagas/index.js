
import { put, takeLatest } from 'redux-saga/effects'

import { Types } from './../actions/index'

import { getGenres } from './genres'

export default function* rootSagas() {

    yield takeLatest(Types.GET_GENRE_REQUEST, getGenres)
    
}