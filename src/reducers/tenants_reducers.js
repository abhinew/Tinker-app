import { LIKE_HOUSE, DISLIKE_HOUSE, THINK_HOUSE, ADD_TENANT } from '../actions/tenants_action'
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
        
        case ADD_TENANT:
            newState.push({
                tenantID: Math.ceil(Math.random()*10),
                name: action.payload[0],
                age: action.payload[1],
                occupation: action.payload[2],
                company: action.payload[3],
                incomePerMonth: action.payload[4],
                url: action.payload[5],
                like: action.payload[6],
                dislike: action.payload[7],
                thinking: action.payload[8],
                lastOwnerIDSeen: action.payload[9]
            });
            return newState;

        default:
            return state
    }
}