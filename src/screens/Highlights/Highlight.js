import React from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import HTMLView from 'react-native-htmlview';

import {mapper} from '../../db/highlights';
import {colors} from '../../utils/styles';

const {height} = Dimensions.get('window');

const Highlight = ({navigation}) => {
  const {id} = navigation.state.params;
  const desc = mapper(id);

  return (
    <ScrollView style={styles.container}>
      <HTMLView value={desc} stylesheet={styles} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  div: {
    paddingTop: height / 4,
    color: colors.grey,
    fontSize: 50,
    textAlign: 'center',
  },
  p: {
    textAlign: 'justify',
    lineHeight: 20,
  },
  ol: {
    textAlign: 'justify',
    marginTop: -40,
  },
});

export default Highlight;
