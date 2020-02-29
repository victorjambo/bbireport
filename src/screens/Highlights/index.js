import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';

import {highlights} from '../../db/highlights';
import {colors} from '../../utils/styles';

const Highlights = ({navigation}) => {
  return (
    <View>
      {highlights.map(item => (
        <ListItem
          key={item.id}
          title={item.title}
          bottomDivider
          topDivider
          onPress={() => navigation.navigate('Highlight', {...item})}
          chevron={{
            color: colors.gray,
            size: 30,
          }}
        />
      ))}
    </View>
  );
};

export default Highlights;
