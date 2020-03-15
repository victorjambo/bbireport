import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

import {logEvent} from './Analytics';
import {
  adLoadedRewarded,
  adLoadedInterstitial,
  resetAdLoadedInterstitial,
  resetAdLoadedRewarded,
  incrementAdCounter,
} from '../redux/actions';

import {
  ERROR_AD_NOT_READY,
  ERROR_AD_ALREADY_LOADED,
  ERROR_CODE_NETWORK_ERROR,
  ERROR_CODE_INTERNAL_ERROR,
  ERROR_CODE_NO_FILL,
  AM_I_FAILED_TO_LOAD,
  AM_R_FAILED_TO_LOAD,
  AM_B_FAILED_TO_LOAD,
  ADMOBINTERSTITIAL,
  ADMOBREWARDED,
} from './errors';

class AdManager extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {ads} = this.props;

    // PublisherBanner
    PublisherBanner.simulatorId = ads.banner;

    this.admobInterstitial();

    this.admobRewarded();

    // Request either Rewarded or Interstitial
    if (ads.showInterstitial) {
      AdMobInterstitial.requestAd().catch(error =>
        this.errorHandler(ERROR_AD_ALREADY_LOADED, error),
      );
    } else {
      AdMobRewarded.requestAd().catch(error =>
        this.errorHandler(ERROR_AD_ALREADY_LOADED, error),
      );
    }
  }

  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
    AdMobInterstitial.removeAllListeners();
  }

  admobInterstitial = () => {
    const {ads, incrementAd} = this.props;
    // AdMobInterstitial
    AdMobInterstitial.simulatorId = ads.interstetial;
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(ads.interstetial);

    AdMobInterstitial.addEventListener('adLoaded', () => {
      this.props.adLoadedInterstitial();
      this.logSuccess(ADMOBINTERSTITIAL, 'AdMobInterstitial adLoaded success');
    });
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      this.errorHandler(`${ADMOBINTERSTITIAL}AdFailedToLoad`, error),
    );
    AdMobInterstitial.addEventListener('adOpened', () => {
      incrementAd();
      this.logSuccess(ADMOBINTERSTITIAL, 'AdMobInterstitial adOpened success');
    });
    AdMobInterstitial.addEventListener('adClosed', () => {
      this.props.resetAdLoadedInterstitial();
      AdMobInterstitial.requestAd().catch(error =>
        this.errorHandler(ERROR_AD_ALREADY_LOADED, error),
      );
      this.logSuccess(ADMOBINTERSTITIAL, 'AdMobInterstitial adClosed success');
    });
  };

  admobRewarded = () => {
    const {ads, incrementAd} = this.props;
    // AdMobRewarded
    AdMobRewarded.simulatorId = ads.reward;
    AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
    AdMobRewarded.setAdUnitID(ads.reward);

    AdMobRewarded.addEventListener('rewarded', reward =>
      this.logSuccess(
        `${ADMOBREWARDED}OnRewarded`,
        'AdMobRewarded rewarded success',
      ),
    );
    AdMobRewarded.addEventListener('adOpened', () => {
      incrementAd();
      this.logSuccess(ADMOBREWARDED, 'AdMobRewarded adOpened success');
    });
    AdMobRewarded.addEventListener('adLoaded', () => {
      this.props.adLoadedRewarded();
      this.logSuccess(ADMOBREWARDED, 'AdMobRewarded adLoaded success');
    });
    AdMobRewarded.addEventListener('adFailedToLoad', error =>
      this.errorHandler(`${ADMOBREWARDED}AdFailedToLoad`, error),
    );
    AdMobRewarded.addEventListener('adClosed', () => {
      this.props.resetAdLoadedRewarded();
      AdMobRewarded.requestAd().catch(error =>
        this.errorHandler(ERROR_AD_ALREADY_LOADED, error),
      );
      this.logSuccess(ADMOBREWARDED, 'AdMobRewarded adClosed success');
    });
    // log churn rate
    AdMobRewarded.addEventListener('adLeftApplication', () =>
      this.logSuccess(
        `${ADMOBREWARDED}AdLeftApplication`,
        'AdMobRewarded adClosed success',
      ),
    );
  };

  errorHandler = (msg, error) => {
    if (error.toString() === ERROR_CODE_NETWORK_ERROR) {
      // TODO
      console.log('change frequency to 1');
    }

    if (__DEV__) {
      console.log(msg, error.toString());
    } else {
      logEvent(msg, {
        error: error.toString(),
        errorObj: JSON.stringify(error),
      });
    }
  };

  logSuccess = (title, success) => {
    if (__DEV__) {
      console.log(title, success);
    } else {
      logEvent(title, {success});
    }
  };

  render() {
    const {ads} = this.props;

    return (
      <PublisherBanner
        adSize="smartBanner"
        adUnitID={ads.banner}
        testDevices={[PublisherBanner.simulatorId]}
        onAdFailedToLoad={error =>
          this.errorHandler(AM_B_FAILED_TO_LOAD, error)
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
});

const mapDispatchToProps = dispatch => ({
  adLoadedRewarded: bindActionCreators(adLoadedRewarded, dispatch),
  adLoadedInterstitial: bindActionCreators(adLoadedInterstitial, dispatch),
  resetAdLoadedRewarded: bindActionCreators(resetAdLoadedRewarded, dispatch),
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
  resetAdLoadedInterstitial: bindActionCreators(
    resetAdLoadedInterstitial,
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdManager);
