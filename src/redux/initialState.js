import _ from '../utils/constants';

export default {
  ads: {
    rewardedFequency: 8,
    showInterstitial: true,
    showBanner: true,
    banner: _.ADMOB_BANNER_ID,
    interstetial: _.ADMOB_INTERSTITIAL_ID,
    reward: _.ADMOB_REWARDED,
    fequency: 2,
    adCount: 0,
    isRewardedReady: false,
    isInterstitialReady: false,
    featureswitch: true,
  },
  connection: {
    isConnected: true,
  },
  appState: {
    hideSplash: false,
  },
};
