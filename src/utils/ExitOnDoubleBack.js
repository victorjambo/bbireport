import React from 'react';
import PropTypes from 'prop-types';
import {BackHandler, ToastAndroid} from 'react-native';
import {NavigationActions} from 'react-navigation';

class ExitOnDoubleBack extends React.Component {
  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);
  }
  timer = {
    ref: null,
    isTimerRunning: false,
  };
  getCurrentRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  };
  _handleExit = () => {
    if (!this.timer.isTimerRunning) {
      this.timer.isTimerRunning = true;
      const backInterval = this.props.doubleBackInterval;
      clearTimeout(this.timer.ref);
      this.timer.ref = setTimeout(
        () => (this.timer.isTimerRunning = false),
        backInterval,
      );
      ToastAndroid.show(this.props.toastMessage, ToastAndroid.SHORT);
      return true; // don't do anything
    }
    return this.props.onDoubleBack && this.props.onDoubleBack();
  };

  _handleBackPress = () => {
    const {nav, backHandler} = this.props;
    const currentRoute = this.getCurrentRouteName(nav);
    if (this.props.exitableRoutes.includes(currentRoute)) {
      // exit the app from landing page
      return this._handleExit();
    } else {
      // in all the other cases, navigate back
      backHandler();
      return true;
    }
  };
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
    clearTimeout(this.timer.ref);
    this.timer = {
      ref: null,
      isTimerRunning: false,
    };
  }

  render() {
    return this.props.children;
  }
}

ExitOnDoubleBack.defaultProps = {
  toastMessage: 'Tap again to exit',
  doubleBackInterval: 3000,
  exitableRoutes: ['Landing'],
  onDoubleBack: BackHandler.exitApp,
  backHandler: NavigationActions.back,
  nav: {},
};
ExitOnDoubleBack.propTypes = {
  toastMessage: PropTypes.string,
  doubleBackInterval: PropTypes.number,
  exitableRoutes: PropTypes.array,
  children: PropTypes.node,
  onDoubleBack: PropTypes.func,
  backHandler: PropTypes.func,
  nav: PropTypes.object,
};

export default ExitOnDoubleBack;
