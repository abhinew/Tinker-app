import { LIKE_TENANT, DISLIKE_TENANT, LIKE_HOUSE, ADD_OWNER } from '../actions/owners_action'
import { owners } from '../lib/owners_lib'

// state is the tenants database

export default (state = owners, action = []) => {
    let newState = [...state]
    switch (action.type) {
        case LIKE_TENANT:
            console.log("LIKE_TENANT_OWNER")
            newState[action.payload[1]].like = newState[action.payload[1]].like.concat(action.payload[0])
            newState[action.payload[1]].likeByTenant.splice(newState[action.payload[1]].likeByTenant.indexOf(action.payload[0]), 1)
            newState[action.payload[1]].lastTenantIDSeen = newState[action.payload[1]].lastTenantIDSeen + 1
            return newState

        case DISLIKE_TENANT:
            console.log("DISLIKE_TENANT_OWNER")
            newState[action.payload[1]].dislike = newState[action.payload[1]].dislike.concat(action.payload[0])
            newState[action.payload[1]].likeByTenant.splice(newState[action.payload[1]].likeByTenant.indexOf(action.payload[0]), 1)
            newState[action.payload[1]].lastTenantIDSeen = newState[action.payload[1]].lastTenantIDSeen + 1
            return newState

        case LIKE_HOUSE:
            console.log("LIKE_HOUSE_OWNER")
            newState[action.payload[1]].likeByTenant = newState[action.payload[1]].likeByTenant.concat(action.payload[0])
            return newState

        case ADD_OWNER:
        newState.push({
            ownerID: newState.length,
            name: action.payload[0],
            location: action.payload[1],
            pricePerMonth: action.payload[2],
            size: action.payload[3],
            bathrooms: action.payload[4],
            bedrooms: action.payload[5],
            url: action.payload[6],
            likeByTenant: action.payload[7],
            like: action.payload[8],
            dislike: action.payload[9],
            lastTenantIDSeen: action.payload[10]
        });
        return newState;    
        
        default:
            return state
    }
}