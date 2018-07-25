import { LIKE_HOUSE, DISLIKE_HOUSE, THINK_HOUSE } from '../actions/tenants_action'
import { tenants } from '../lib/tenants_lib'

// state is the tenants database

export default (state = tenants, action = []) => {
    let newState = [...state]
    switch (action.type) {
        
        case LIKE_HOUSE:
            return {
                
                like: state[0].like.concat(action.payload)
            }
        case DISLIKE_HOUSE:
            
            newState[action.payload[0]].dislike = newState[action.payload[0]].dislike.concat(action.payload[1])
            return newState

        case THINK_HOUSE:
            return {

                thinking: state[0].thinking.concat(action.payload)
            }
        default:
            return state
    }
}