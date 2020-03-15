import NetInfo from '@react-native-community/netinfo';
import functions from '@react-native-firebase/functions';

import {
  HIDE_BANNER,
  NETWORK,
  HIDE_SPLASH,
  SHOW_FULLSCREEN_AD,
  HIDE_FULLSCREEN_AD,
  INCREMENT_AD_COUNTER,
  RESET_AD_COUNTER,
  REWARDED_IS_READY,
  REWARDED_IS_NOT_READY,
  INTERSTITIAL_IS_READY,
  INTERSTITIAL_IS_NOT_READY,
  SHOW_INTERSTITIAL,
  HIDE_INTERSTITIAL,
} from '../utils/constants';

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

/**
 * AD v2
 */
export const setShowFullscreenAd = () => ({
  type: HIDE_FULLSCREEN_AD,
});

export const setHideFullscreenAd = () => ({
  type: SHOW_FULLSCREEN_AD,
});

export const incrementAdCounter = () => ({
  type: INCREMENT_AD_COUNTER,
});

export const resetAdCounter = () => ({
  type: RESET_AD_COUNTER,
  payload: 0,
});

export const getPermit = () => {
  return (dispatch, getState) => {
    const {adCount, fequency} = getState();
    const allow = adCount < fequency;
    if (!allow) {
      dispatch(resetAdCounter());
    }
    return allow;
  };
};

export const toggleInterstitial = () => ({type: HIDE_INTERSTITIAL});
export const hideInterstitial = () => ({type: SHOW_INTERSTITIAL});
export const adLoadedRewarded = () => ({type: REWARDED_IS_READY});
export const resetAdLoadedRewarded = () => ({type: REWARDED_IS_NOT_READY});
export const adLoadedInterstitial = () => ({type: INTERSTITIAL_IS_READY});
export const resetAdLoadedInterstitial = () => ({
  type: INTERSTITIAL_IS_NOT_READY,
});
