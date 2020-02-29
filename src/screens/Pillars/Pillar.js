import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

const Pillar = ({navigation}) => {
  const {desc} = navigation.state.params;

  return (
    <ScrollView>
      <Text style={[styles.container, styles.text]}>{desc}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 35,
  },
});

export default Pillar;
