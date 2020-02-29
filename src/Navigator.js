import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  Home,
  Abbr,
  Report,
  PDFViewer,
  Pillars,
  Pillar,
  Highlights,
  Highlight,
  Youth,
} from './screens';

import {colors} from './utils/styles';
import headerBackground from '../assets/topBarBg.png';
import arrowBack from '../assets/icons/arrow-back.png';
import {adsInstance} from './utils/Ads';
import withAnalytics from '../src/utils/Analytics';

const {width} = Dimensions.get('window');

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'BBI Report',
        headerLeft: () => {},
        headerBackground: () => (
          <Image
            style={styles.img}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Report: {
      screen: withAnalytics(Report),
      navigationOptions: {
        title: 'Full Report',
      },
    },
    PDFViewer: {
      screen: withAnalytics(PDFViewer),
      navigationOptions: {
        title: 'Full PDF',
      },
    },
    Abbr: {
      screen: withAnalytics(Abbr),
      navigationOptions: {
        title: 'Abbreviations and Acronyms',
      },
    },
    Pillars: {
      screen: withAnalytics(Pillars),
      navigationOptions: {
        title: 'Pillars',
      },
    },
    Pillar: {
      screen: withAnalytics(Pillar),
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.title,
      }),
    },
    Highlights: {
      screen: withAnalytics(Highlights),
      navigationOptions: {
        title: 'Swahili Highlights',
      },
    },
    Highlight: {
      screen: withAnalytics(Highlight),
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.title,
      }),
    },
    Youth: {
      screen: withAnalytics(Youth),
      navigationOptions: {
        title: 'Youth Section',
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: () => (
        <Image
          style={styles.img}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={() => {
            adsInstance.showFullScreenAd();
            props.onPress();
          }}
          style={styles.headerLeft}>
          <Image
            source={arrowBack}
            resizeMode="contain"
            style={styles.imgHeight}
          />
        </TouchableOpacity>
      ),
    }),
  },
);

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width,
  },
  headerLeft: {
    paddingLeft: 25,
  },
  imgHeight: {
    height: 20,
  },
});

export default createAppContainer(StackNavigator);
