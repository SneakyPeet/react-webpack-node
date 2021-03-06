import { fromJS } from 'immutable';
import {
  LOGIN_SUCCESS_USER,
  SIGNUP_SUCCESS_USER,
  DISMISS_MESSAGE
} from 'types';

const initalState = fromJS({
  message: '',
  type: 'SUCCESS'
});

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
export default function message(state = initalState, action = {}) {
  switch (action.type) {
    // case LOGIN_SUCCESS_USER:
    // case SIGNUP_SUCCESS_USER:
    //   return Object.assign({}, state, {
    //     message: action.message,
    //     type: 'SUCCESS'
    //   });
    // case DISMISS_MESSAGE:
    //   return Object.assign({}, state, {
    //     message: '',
    //     type: 'SUCCESS'
    //   });
    default:
      return state;
  }
}
