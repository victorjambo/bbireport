import {combineReducers} from 'redux';
import getCurrentRouteName from 'redux-ga-screen-tracker/utils/transformer.utils';
import {NavigationActions} from 'react-navigation';

import Navigator from '../Navigator';
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
import initialState from './initialState';

const appStateReducer = (state = initialState.appState, action) => {
  switch (action.type) {
    case HIDE_SPLASH:
      return {
        ...state,
        hideSplash: true,
      };
    default:
      return state;
  }
};

const adReducer = (state = initialState.ads, action) => {
  switch (action.type) {
    case AD_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case INCREMENT_AD_COUNTER:
      return {
        ...state,
        adCount: state.adCount + 1,
      };
    case REWARDED_IS_READY:
      return {
        ...state,
        isRewardedReady: true,
      };
    case REWARDED_IS_NOT_READY:
      return {
        ...state,
        isRewardedReady: false,
      };
    case INTERSTITIAL_IS_READY:
      return {
        ...state,
        isInterstitialReady: true,
      };
    case INTERSTITIAL_IS_NOT_READY:
      return {
        ...state,
        isInterstitialReady: false,
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

const navigationActions = [
  NavigationActions.BACK,
  NavigationActions.RESET,
  NavigationActions.NAVIGATE,
  NavigationActions.INIT,
  NavigationActions.SET_PARAMS,
  NavigationActions.URI,
];
const navState = Navigator.router.getStateForAction({
  type: NavigationActions.INIT,
});

const nav = (state = navState, action) => {
  if (navigationActions.includes(action.type)) {
    if (action.type === NavigationActions.NAVIGATE) {
      const currentScreen = getCurrentRouteName(state.routes[0]);
      /*
      Passing only closed Drawer stack to get the currentScreen.
      Otherwise it might return OpenDrawer as a screen name if the drawer is open
    */
      if (currentScreen === action.routeName) {
        return {...state, index: 0}; // index: 0 defines the state of the drawer. 1 will open and 0 will close.
      }
    }

    /*
    Handling navigation on logout success which requires
    reseting nav state and redirecting to LandingPage
  */
    const newState = Navigator.router.getStateForAction(action, state) || state;
    let drawerLockMode = 'unlocked';
    // Check if any base route has a nested route open
    const drawerEnable = newState.routes[0].routes.find(elem => elem.index > 0);
    if (drawerEnable) {
      drawerLockMode = 'locked-closed';
    }
    return {...newState, drawerLockMode};
  }
  return state;
};

export default combineReducers({
  ads: adReducer,
  connection: networkReducer,
  nav,
  appState: appStateReducer,
});
