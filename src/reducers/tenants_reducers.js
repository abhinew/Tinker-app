import { LIKE_HOUSE, DISLIKE_HOUSE, THINK_HOUSE } from '../actions/tenants_action'
import { tenants } from '../lib/tenants_lib'

// state is the tenants database

export default (state = tenants, action = []) => {
    let newState = [...state]
    switch (action.type) {

        case LIKE_HOUSE:
            console.log("LIKE_HOUSE_TENANT")
            newState[action.payload[0]].like = newState[action.payload[0]].like.concat(action.payload[1])
            newState[action.payload[0]].lastOwnerIDSeen = newState[action.payload[0]].lastOwnerIDSeen + 1
            return newState

        case DISLIKE_HOUSE:
            console.log("DISLIKE_HOUSE_TENANT")
            newState[action.payload[0]].dislike = newState[action.payload[0]].dislike.concat(action.payload[1])
            newState[action.payload[0]].lastOwnerIDSeen = newState[action.payload[0]].lastOwnerIDSeen + 1
            return newState

        case THINK_HOUSE:
            console.log("THINK_HOUSE_TENANT")
            newState[action.payload[0]].thinking = newState[action.payload[0]].thinking.concat(action.payload[1])
            newState[action.payload[0]].lastOwnerIDSeen = newState[action.payload[0]].lastOwnerIDSeen + 1
            return newState

        default:
            return state
    }
}