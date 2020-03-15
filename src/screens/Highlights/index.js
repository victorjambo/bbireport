import React from 'react';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';

import {highlights} from '../../db/highlights';
import {colors} from '../../utils/styles';
import adinstance from '../../utils/showAds';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementAdCounter} from '../../redux/actions';

const Highlights = ({navigation, incrementAd}) => {
  return (
    <ScrollView>
      <View>
        {highlights.map(item => (
          <ListItem
            key={item.id}
            title={item.title}
            bottomDivider
            topDivider
            onPress={() => {
              adinstance.showAds(incrementAd);
              navigation.navigate('Highlight', {...item});
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

const mapDispatchToProps = dispatch => ({
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Highlights);
