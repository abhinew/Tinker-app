import { LIKE_TENANT, DISLIKE_TENANT, LIKE_HOUSE } from '../actions/owners_action'
import { owners } from '../lib/owners_lib'

// state is the tenants database

export default (state = owners, action = {}) => {
    switch (action.type) {
        case LIKE_TENANT:
            return [
                ...state,
                state.like.concat(action.payload)
                // remove from likeByTenant
            ]
            case DISLIKE_TENANT:
            return [
                ...state,
                state.dislike.concat(action.payload)
                // remove from likeByTenant
            ]
            case LIKE_HOUSE:
            return [
                ...state,
                state.likeByTenant.concat(action.payload)
            ]
        default:
            return state
    }
}