import {AdMobInterstitial, AdMobRewarded} from 'react-native-admob';
import {logEvent} from './Analytics';
import {ADMOBINTERSTITIAL, ADMOBREWARDED} from './errors';
import store from '../redux/store';

export class Ads {
  constructor() {
    this.ads = {};
    this.incrementAd = () => {};
  }

  isEven = () => {
    return this.ads.adCount % this.ads.fequency === 0;
  };

  showInterstitial = () => {
    if (this.ads.isInterstitialReady) {
      AdMobInterstitial.showAd().catch(error =>
        this.errorHandler(`Error${ADMOBINTERSTITIAL}ShowAd`, error),
      );
    }
  };

  showRewarded = () => {
    if (this.ads.isRewardedReady) {
      AdMobRewarded.showAd().catch(error =>
        this.errorHandler(`Error${ADMOBREWARDED}ShowAd`, error),
      );
    }
  };

  showFullScreenAd = () => {
    const isInterstatial =
      this.ads.showInterstitial && (this.isEven() && this.ads.adCount !== 8);
    const isRewarded = this.ads.isRewardedReady && this.ads.adCount % 8 === 0;

    if (isInterstatial) {
      this.showInterstitial();
    } else if (isRewarded) {
      this.showRewarded();
    }
  };

  withAds = () => {
    if (this.ads.featureswitch) {
      this.showFullScreenAd();
      store.dispatch(this.incrementAd);
    }
  };

  showAds = incrementAd => {
    const state = store.getState();
    this.ads = state.ads;
    this.incrementAd = incrementAd;
    this.withAds();
  };

  errorHandler = (msg, error) => {
    if (__DEV__) {
      console.log(msg, error.toString());
    } else {
      logEvent(msg, {
        error: error.toString(),
        errorObj: JSON.stringify(error),
      });
    }
  };
}

const adinstance = new Ads();

export default adinstance;
