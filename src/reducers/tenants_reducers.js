import { LIKE_HOUSE, DISLIKE_HOUSE, THINK_HOUSE } from '../actions/tenants_action'
import { tenants } from '../lib/tenants_lib'

// state is the tenants database

export default (state = tenants, action = {}) => {
    switch (action.type) {
        case LIKE_HOUSE:
            return [
                ...state,
                state.like.concat(action.payload)
            ]
        case DISLIKE_HOUSE:
            return [
                ...state,
                state.dislike.concat(action.payload)
            ]
        case THINK_HOUSE:
            return [
                ...state,
                state.thinking.concat(action.payload)
            ]
        default:
            return state
    }
}