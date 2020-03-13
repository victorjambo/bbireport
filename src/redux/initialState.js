import _ from '../utils/constants';

export default {
  ads: {
    showRewarded: false,
    showInterstitial: false,
    showBanner: true,
    banner: _.ADMOB_BANNER_ID,
    interstetial: _.ADMOB_INTERSTITIAL_ID,
    reward: _.ADMOB_REWARDED,
    fequency: '5',
    show: 'BEFORE',
    enabled: true,
    isHome: true,
    adCount: 1,
  },
  connection: {
    isConnected: true,
  },
  appState: {
    hideSplash: false,
  },
};
