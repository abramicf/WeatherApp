import axios from 'axios';
import API_KEY from '../../API_KEYS';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Prevents us from having to copy and paste or retype strings...prevents bugs!
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //return action (object with a type and a payload)
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  //axios returns a promise.  We're returning the promise as the payload.  Redux promise looks at the payload property.  If it is a promise, promise stops the action entirely until the promise is received back (the data is received).  Once the result is received, it dispatches an action of the SAME TYPE, with the payload being the actual data as the promise.  It unwraps the promise so we dont have to do async in the reducers!

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}


//Doing AJAX requests in redux is complicated the first time we do it!

//middlewares are functions that take an action, and depending on the action's type and payload, the middleware can let the action pass through, manipulate it or stop it alltogether before they reach any reducer!  They're gatekeepers!

//middlewares allow us to do interesting things by intercepting the actions!  All actions that we create flow through the middleware step.  We can have many different steps of middleware in the applications!  Actions pass through them one after the other before hitting the reducer!

//redux-promise helps us deal with http requests inside of redux! (aync!)

//we only change application state through reducers and actions!

//axios is a library that is solely used to make ajax requests from the front end.  Works almost exactly like jquery