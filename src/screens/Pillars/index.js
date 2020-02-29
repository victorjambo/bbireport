import React from 'react';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';

import data from '../../db/pillars';
import {colors} from '../../utils/styles';

const Pillars = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        {data.map(item => (
          <ListItem
            key={item.id}
            title={item.title}
            bottomDivider
            topDivider
            subtitle={`${item.desc.slice(0, 50)}...`}
            onPress={() => navigation.navigate('Pillar', {...item})}
            chevron={{
              color: colors.gray,
              size: 30,
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Pillars;
