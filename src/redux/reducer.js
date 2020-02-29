import {combineReducers} from 'redux';

import {HIDE_BANNER, NETWORK} from '../utils/constants';
import initialState from './initialState';

const adReducer = (state = initialState.ads, action) => {
  switch (action.type) {
    case HIDE_BANNER:
      return {
        ...state,
        showBanner: action.payload,
      };
    default:
      return state;
  }
};

const networkReducer = (state = initialState.connection, action) => {
  switch (action.type) {
    case NETWORK:
      return {
        ...state,
        isConnected: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  ads: adReducer,
  connection: networkReducer,
});
