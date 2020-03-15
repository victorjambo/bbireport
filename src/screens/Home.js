import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import bbi from '../../assets/bbi-pic.jpg';
import {colors} from '../utils/styles';
import rateApp from '../utils/rateApp';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={bbi}
          style={[styles.section, styles.header]}>
          <View style={styles.overlay} />
          <View style={styles.imgBg}>
            <Text style={[styles.title, styles.shadow]}>BBI Report</Text>
            <View>
              <Text style={[styles.position, styles.shadow]}>
                Building Bridges to a United Kenya
              </Text>
              <Text style={[styles.company, styles.shadow]}>
                From a nation of blood ties to a nation of ideals
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Report')}
            style={styles.item}>
            <Icon name="clipboard-list" size={40} color={colors.primary} />
            <Text style={styles.itemText}>Full Report</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Highlights')}
            style={styles.item}>
            <AntDesign name="bulb1" size={40} color={colors.primary} />
            <Text style={styles.itemText}>Swahili Highlights</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Pillars')}
            style={styles.item}>
            <MaterialCommunityIcons
              name="pillar"
              size={40}
              color={colors.primary}
            />
            <Text style={styles.itemText}>The Pillars</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Youth')}
            style={styles.item}>
            <Entypo name="slideshare" size={40} color={colors.primary} />
            <Text style={styles.itemText}>Youth</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Abbr')}
            style={styles.item}>
            <MaterialIcons name="language" size={40} color={colors.primary} />
            <Text style={styles.itemText}>Abbreviations</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={rateApp} style={styles.item}>
            <MaterialIcons
              name="rate-review"
              size={40}
              color={colors.primary}
            />
            <Text style={styles.itemText}>Rate App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const imageBackgroundStyles = {
  banner: {
    position: 'absolute',
    bottom: 0,
  },
  imgBg: {
    flex: 1,
    justifyContent: 'center',
  },
  imgBgView: {
    flexDirection: 'row',
  },
  btn: {
    marginLeft: 20,
  },
  title: {
    color: colors.white,
    fontSize: 25,
    letterSpacing: 0.04,
    marginBottom: 10,
  },
  position: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 3,
  },
  company: {
    color: colors.white,
    fontSize: 14,
  },
  header: {
    padding: 20,
  },
  section: {
    position: 'relative',
    height: width > height ? height / 4 : width / 2.5,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  shadow: {
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
  },
  itemImage: {
    height: 35,
  },
  ...imageBackgroundStyles,
});

export default Home;
