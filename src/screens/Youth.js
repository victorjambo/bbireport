import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

import data from '../db/youth';
import {colors} from '../utils/styles';
import adinstance from '../utils/showAds';
import { bindActionCreators } from 'redux';
import { incrementAdCounter } from '../redux/actions';
import { connect } from 'react-redux';

const {height, width} = Dimensions.get('window');

const Youth = ({incrementAd}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [desc, setDesc] = useState('');

  const toggle = () => setIsModalVisible(!isModalVisible);

  return (
    <View>
      {data.map(item => (
        <ListItem
          key={item.id}
          title={item.title}
          bottomDivider
          topDivider
          onPress={() => {
            toggle();
            setDesc(item.desc);
          }}
          chevron={{
            color: colors.gray,
            size: 30,
          }}
        />
      ))}

      <View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggle}
          deviceWidth={width}
          deviceHeight={height}
          style={styles.view}
          onSwipeComplete={toggle}
          swipeDirection={['down']}>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>{desc}</Text>
            <Button
              title="Close"
              type="solid"
              size={25}
              onPress={() => {
                adinstance.showAds(incrementAd);
                toggle();
              }}
              buttonStyle={styles.btnClose}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
    lineHeight: 30,
    textAlign: 'center',
  },
  btn: {
    color: '#EC2E53',
  },
  btnClose: {
    width: width / 2,
    backgroundColor: '#EC2E53',
  },
});

const mapDispatchToProps = dispatch => ({
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Youth);
