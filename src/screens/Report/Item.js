import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';

import {colors} from '../../utils/styles';
import adinstance from '../../utils/showAds';
import {bindActionCreators} from 'redux';
import {incrementAdCounter} from '../../redux/actions';
import {connect} from 'react-redux';

const Item = ({item, navigation, incrementAd}) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.itemContainer}
      onPress={() => {
        adinstance.showAds(incrementAd);
        navigation.navigate('PDFViewer', {title: item.title, uri: item.uri});
      }}>
      <View style={styles.itemContent}>
        <Image style={styles.itemImage} source={{uri: item.image}} />
        <View style={styles.itemOverlay} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubTitle}>{item.headline}</Text>
        <Text style={styles.itemSections}>{item.sections}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingBottom: 10,
    backgroundColor: colors.white,
    marginVertical: 5,
  },
  itemContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: 0,
  },
  itemTitle: {
    color: colors.white,
    fontSize: 20,
  },
  itemSubTitle: {
    color: colors.white,
    fontSize: 15,
    marginVertical: 5,
  },
  itemSections: {
    color: colors.white,
    fontSize: 20,
  },
  itemImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
});

const mapDispatchToProps = dispatch => ({
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Item);
