import { combineReducers } from 'redux'
import tenant from './tenants_reducers'
import owner from './owners_reducers'

export default combineReducers({
    tenant,
    owner
})