import {combineReducers} from 'redux';
import getCurrentRouteName from 'redux-ga-screen-tracker/utils/transformer.utils';
import {NavigationActions} from 'react-navigation';

import Navigator from '../Navigator';
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
});
