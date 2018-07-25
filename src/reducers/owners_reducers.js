import { LIKE_TENANT, DISLIKE_TENANT, LIKE_HOUSE } from '../actions/owners_action'
import { owners } from '../lib/owners_lib'

// state is the tenants database

export default (state = owners, action = []) => {
    let newState = [...state]
    switch (action.type) {
        case LIKE_TENANT:
            console.log("LIKE_TENANT_OWNER")
            newState[action.payload[1]].like = newState[action.payload[1]].like.concat(action.payload[0])
            newState[action.payload[1]].likeByTenant.splice(newState[action.payload[1]].likeByTenant.indexOf(action.payload[0]), 1)
            return newState

        case DISLIKE_TENANT:
            console.log("DISLIKE_TENANT_OWNER")
            newState[action.payload[1]].dislike = newState[action.payload[1]].dislike.concat(action.payload[0])
            newState[action.payload[1]].likeByTenant.splice(newState[action.payload[1]].likeByTenant.indexOf(action.payload[0]), 1)
            return newState

        case LIKE_HOUSE:
            console.log("LIKE_HOUSE_OWNER")
            newState[action.payload[1]].likeByTenant = newState[action.payload[1]].likeByTenant.concat(action.payload[0])
            return newState
        default:
            return state
    }
}