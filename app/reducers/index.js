import { combineReducers } from 'redux-immutablejs';
import user from 'reducers/user';
import topic from 'reducers/topic';
import message from 'reducers/message';
import routing from 'reducers/routing';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  message,
  routing
});

export default rootReducer;
