import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';

import data from '../../db/pillars';
import {colors} from '../../utils/styles';
import showAds from '../../utils/showAds';

const Pillars = ({navigation, ads}) => {
  useEffect(() => showAds(ads));

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

const mapStateToProps = state => ({
  ads: state.ads,
});

export default connect(mapStateToProps)(Pillars);
