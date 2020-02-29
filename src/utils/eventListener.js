import React from 'react';
import {BackHandler} from 'react-native';

import {adsInstance} from './Ads';

const eventListener = Component => props => {
  BackHandler.addEventListener(
    'hardwareBackPress',
    adsInstance.showFullScreenAd,
  );
  return <Component {...props} />;
};

export default eventListener;
