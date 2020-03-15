import {AdMobInterstitial, AdMobRewarded} from 'react-native-admob';
import {logEvent} from './Analytics';
import {ADMOBINTERSTITIAL, ADMOBREWARDED} from './errors';
import {BackHandler} from 'react-native';
import store from '../redux/store';
import {incrementAdCounter} from '../redux/actions';

// const errorHandler = (msg, error) => {
//   if (__DEV__) {
//     console.log(msg, error.toString());
//   } else {
//     logEvent(msg, {
//       error: error.toString(),
//       errorObj: JSON.stringify(error),
//     });
//   }
// };

// const isEven = ({adCount, fequency}) => {
//   return adCount % fequency === 0;
// };

// const showInterstitial = (ads, incrementAd) => {
//   if (ads.isInterstitialReady) {
//     AdMobInterstitial.showAd()
//       .then(() => {
//         console.log('incrementing ad count', ads.adCount);
//         incrementAd();
//       })
//       .catch(error => errorHandler(`Error${ADMOBINTERSTITIAL}ShowAd`, error));
//   }
// };

// const showRewarded = (ads, incrementAd) => {
//   if (ads.isRewardedReady) {
//     AdMobRewarded.showAd()
//       .then(() => {
//         console.log('incrementing ad count', ads.adCount);
//         incrementAd();
//       })
//       .catch(error => errorHandler(`Error${ADMOBREWARDED}ShowAd`, error));
//   }
// };

// const showFullScreenAd = (ads, incrementAd) => {
//   if (!ads.isHome) {
//     const isInterstatial =
//       ads.showInterstitial && (isEven(ads) && ads.adCount !== 8);
//     const isRewarded = ads.isRewardedReady && ads.adCount % 8 === 0;

//     if (isInterstatial) {
//       showInterstitial(ads, incrementAd);
//     } else if (isRewarded) {
//       showRewarded(ads, incrementAd);
//     }
//   }
// };

// export const withAds = (ads, incrementAd) => {
//   if (ads.featureswitch) {
//     showFullScreenAd(ads, incrementAd);
//   }
// };

// const showAds = (ads, incrementAd) => {
//   BackHandler.addEventListener('hardwareBackPress', () =>
//     withAds(ads, incrementAd),
//   );
// };

// export default showAds;

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
      console.log('dispatch Counter');
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
