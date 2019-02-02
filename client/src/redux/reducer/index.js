import { combineReducers } from 'redux'

import series from './series'
import genres from './genres'

const reducers = combineReducers({ series, genres })

export default reducers
