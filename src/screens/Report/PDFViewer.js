import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {logEvent} from '../../utils/Analytics';

const {width, height} = Dimensions.get('window');

const PDFViewer = ({navigation}) => {
  const source = {uri: navigation.state.params.uri, cache: true};

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onError={error => {
          logEvent('PDFViewer', {
            error: error.toString(),
            errorObj: JSON.stringify(error),
          });
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width,
    height,
  },
});

export default PDFViewer;
