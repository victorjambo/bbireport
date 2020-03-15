import React from 'react';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import data from '../../db/pillars';
import {colors} from '../../utils/styles';
import adinstance from '../../utils/showAds';
import {incrementAdCounter} from '../../redux/actions';

const Pillars = ({navigation, incrementAd}) => {
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
            onPress={() => {
              adinstance.showAds(incrementAd);
              navigation.navigate('Pillar', {...item});
            }}
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

const mapDispatchToProps = dispatch => ({
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pillars);
