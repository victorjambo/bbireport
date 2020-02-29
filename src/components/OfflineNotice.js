import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const OfflineNotice = () => {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#EC2E53',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    opacity: 0.7,
  },
  offlineText: {
    color: '#fff',
  },
});

export default OfflineNotice;
