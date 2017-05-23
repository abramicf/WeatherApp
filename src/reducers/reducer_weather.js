import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //add onto the existing state!
      //don't ever manipulate state directly!
      //reducers instead return a completely new instance of state (all of the old stuff and the new stuff1)

      //concat doesn't manipulate the current array - it returns a new one!!
      return [ action.payload.data, ...state];
      //syntax is same as:  return state.concat([ action.payload.data ]);

  }

  return state;
}