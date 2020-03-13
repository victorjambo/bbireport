import NetInfo from '@react-native-community/netinfo';
import functions from '@react-native-firebase/functions';

import {HIDE_BANNER, NETWORK, HIDE_SPLASH} from '../utils/constants';

const setConnection = status => ({
  type: NETWORK,
  payload: status,
});

export const checkNetwork = () => {
  return dispatch => {
    NetInfo.addEventListener(state =>
      dispatch(setConnection(state.isConnected)),
    );
  };
};

export const hideBanner = () => ({
  type: HIDE_BANNER,
  payload: false,
});

const hideSplash = () => ({
  type: HIDE_SPLASH,
});

const setAdID = payload => ({
  type: NETWORK,
  payload,
});

export const adNetwork = () => {
  return (dispatch, getState) => {
    const {isConnected} = getState();
    if (isConnected) {
      try {
        if (__DEV__) {
          return fetch('http://localhost:3000/bbi')
            .then(res => console.log(res))
            .catch(error => console.error(error));
        }
        functions()
          .httpsCallable('adNetwork')
          .then(res => {
            dispatch(setAdID(res.bbi));
            dispatch(hideSplash());
          })
          .catch(err => console.error('ERROR_FETCHING_AD_IDS', err));
      } catch (e) {
        console.error(e);
      }
    }
  };
};
