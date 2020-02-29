import React from 'react';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';

import {highlights} from '../../db/highlights';
import {colors} from '../../utils/styles';

const Highlights = ({navigation}) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default Highlights;
