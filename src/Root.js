import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, View, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ExitOnDoubleBack from './utils/ExitOnDoubleBack';
import Navigator from './Navigator';
import {colors} from './utils/styles';
import OfflineNotice from './components/OfflineNotice';
import {checkNetwork, incrementAdCounter} from './redux/actions';
import AdManager from './utils/AdManager';

const Root = ({ads, isConnected, checkConnection, nav, incrementAd}) => {
  useEffect(() => {
    SplashScreen.hide();
    checkConnection();
    console.log(ads.adCount);
  }, [checkConnection, ads]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.statusBarSecondary}
        barStyle="light-content"
      />

      <ExitOnDoubleBack exitableRoutes={['Home']} nav={nav}>
        <Navigator screenProps={{ads, incrementAd}} />
      </ExitOnDoubleBack>

      {!isConnected && <OfflineNotice />}

      {ads.showBanner && <AdManager />}
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
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Root);
