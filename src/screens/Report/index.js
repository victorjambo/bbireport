import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import data, {images} from '../../db/data';
import Item from './Item';
import {colors} from '../../utils/styles';
import shuffle from '../../utils/shaffle';

const updateImgUrl = reports => {
  const imgs = shuffle(images);

  reports.forEach((x, i) => {
    x.image = imgs[i];
  });

  return reports;
};

const Report = ({navigation}) => {
  const reports = updateImgUrl(data);

  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        style={styles.flatlist}
        data={reports}
        renderItem={({item}) => <Item item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});

export default Report;
