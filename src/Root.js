import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, View, StatusBar} from 'react-native';
import {PublisherBanner} from 'react-native-admob';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ExitOnDoubleBack from './utils/ExitOnDoubleBack';
import Navigator from './Navigator';
import {colors} from './utils/styles';
import _ from './utils/constants';
import OfflineNotice from './components/OfflineNotice';
import {checkNetwork} from './redux/actions';
import {logEvent} from './utils/Analytics';

const Root = ({ads, isConnected, checkConnection, nav}) => {
  useEffect(() => {
    SplashScreen.hide();
    checkConnection();
  }, [checkConnection]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.statusBarSecondary}
        barStyle="light-content"
      />

      <ExitOnDoubleBack exitableRoutes={['Home']} nav={nav}>
        <Navigator />
      </ExitOnDoubleBack>

      {!isConnected && <OfflineNotice />}

      {ads.showBanner && (
        <PublisherBanner
          adSize="smartBanner"
          adUnitID={_.ADMOB_BANNER_ID}
          testDevices={[PublisherBanner.simulatorId]}
          onAdFailedToLoad={error => {
            logEvent('AdBannerFailedToLoad', {
              error: error.toString(),
              errorObj: JSON.stringify(error),
            });
          }}
          onAppEvent={event => {
            logEvent('AdBannerFailedToLoad', {
              event: event.name,
              eventInfo: event.info,
            });
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  isConnected: state.connection.isConnected,
  ads: state.ads,
  nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
  checkConnection: bindActionCreators(checkNetwork, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Root);
