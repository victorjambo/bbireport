import NetInfo from '@react-native-community/netinfo';
import functions from '@react-native-firebase/functions';

import {
  NETWORK,
  HIDE_SPLASH,
  AD_STATE,
  INCREMENT_AD_COUNTER,
  REWARDED_IS_READY,
  REWARDED_IS_NOT_READY,
  INTERSTITIAL_IS_READY,
  INTERSTITIAL_IS_NOT_READY,
} from '../utils/constants';
import {logEvent} from '../utils/Analytics';

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

const hideSplash = () => ({
  type: HIDE_SPLASH,
});

const setAdState = payload => ({
  type: AD_STATE,
  payload,
});

const logerror = error => {
  if (__DEV__) {
    console.log('ERROR_FETCHING_APPSTATE', error);
  } else {
    logEvent('ERROR_FETCHING_APPSTATE', {
      error: error.toString(),
      errorObj: JSON.stringify(error),
    });
  }
};

export const adNetwork = () => {
  return (dispatch, getState) => {
    const {connection} = getState();
    if (connection.isConnected) {
      try {
        const request = functions().httpsCallable('appstate');
        request()
          .then(res => {
            dispatch(setAdState(res.data.bbi));
            dispatch(hideSplash());
          })
          .catch(error => {
            dispatch(hideSplash());
            logerror(error);
          });
      } catch (error) {
        logerror(error);
        dispatch(hideSplash());
      }
    } else {
      dispatch(hideSplash());
    }
  };
};

/**
 * AD v2
 */
export const incrementAdCounter = () => ({
  type: INCREMENT_AD_COUNTER,
});

export const adLoadedRewarded = () => ({type: REWARDED_IS_READY});
export const resetAdLoadedRewarded = () => ({type: REWARDED_IS_NOT_READY});
export const adLoadedInterstitial = () => ({type: INTERSTITIAL_IS_READY});
export const resetAdLoadedInterstitial = () => ({
  type: INTERSTITIAL_IS_NOT_READY,
});
