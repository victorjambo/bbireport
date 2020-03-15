import {AdMobInterstitial, AdMobRewarded} from 'react-native-admob';
import {logEvent} from './Analytics';
import {ADMOBINTERSTITIAL, ADMOBREWARDED} from './errors';
import {BackHandler} from 'react-native';

const errorHandler = (msg, error) => {
  if (__DEV__) {
    console.log(msg, error.toString());
  } else {
    logEvent(msg, {
      error: error.toString(),
      errorObj: JSON.stringify(error),
    });
  }
};

export const withAds = ads => {
  if (ads.featureswitch) {
    if (ads.showInterstitial) {
      if (ads.isInterstitialReady) {
        AdMobInterstitial.showAd().catch(error =>
          errorHandler(`Error${ADMOBINTERSTITIAL}ShowAd`, error),
        );
      }
    } else {
      if (ads.isRewardedReady) {
        AdMobRewarded.showAd().catch(error =>
          errorHandler(`Error${ADMOBREWARDED}ShowAd`, error),
        );
      }
    }
  }
};

const showAds = ads => {
  BackHandler.addEventListener('hardwareBackPress', () => withAds(ads));
};

export default showAds;
