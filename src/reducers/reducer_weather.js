import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
    
    //console.log('Action Received in Reducer: ', action);

    switch(action.type) {
        case FETCH_WEATHER:
        // we dont mutate actual array instead return new array. we can also use concat
          return [action.payload.data, ...state]
    }

    return state;

}