import Rate, {AndroidMarket} from 'react-native-rate';
import {logEvent} from './Analytics';

const rateApp = () => {
  const options = {
    GooglePackageName: 'com.mutaidev.bbi',
    preferredAndroidMarket: AndroidMarket.Google,
  };
  Rate.rate(options, (success, error) => {
    if (success) {
      logEvent('SuccessRateApp', {
        success: success.toString(),
      });
    }
    if (error) {
      logEvent('ErrorRatingApp', {
        error: error.toString(),
        errorObj: JSON.stringify(error),
      });
    }
  });
};

export default rateApp;
