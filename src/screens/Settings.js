import React from 'react';
import {View, Linking, Share} from 'react-native';
import {ListItem} from 'react-native-elements';
import rateApp from '../utils/rateApp';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {colors} from '../utils/styles';

const moreApps = () => {
  Linking.openURL(
    'http://play.google.com/store/apps/dev?id=4753238511708918696',
  );
};

const shareAppWithFriends = () => {
  Share.share({
    message:
      'Hi, Try this amazing app \n http://play.google.com/store/apps/details?id=com.mutaidev.bbi',
  });
};

const contactUs = () => {
  Linking.openURL('mailto:mutaidev@gmail.com');
};

const privacyPolicy = () => {
  Linking.openURL('https://sites.google.com/view/mutaidev-policy/home');
};

const list = [
  {
    name: 'More Apps',
    icon: 'apps',
    press: moreApps,
  },
  {
    name: 'Share with Friends',
    icon: 'share',
    press: shareAppWithFriends,
  },
  {
    name: 'Rate this App',
    icon: 'star',
    press: rateApp,
  },
  {
    name: 'Contact us',
    icon: 'mail',
    press: contactUs,
  },
  {
    name: 'Privacy Policy',
    icon: 'accessibility',
    press: privacyPolicy,
  },
  {
    name: 'Version',
    icon: 'play-for-work',
    press: () => {},
    version: '2.0.1',
  },
];

const Settings = () => {
  return (
    <View>
      {list.map((item, i) => (
        <ListItem
          key={i}
          leftAvatar={() => (
            <MaterialIcons name={item.icon} size={24} color={colors.primary} />
          )}
          title={item.name}
          subtitle={item.version}
          bottomDivider
          onPress={item.press}
        />
      ))}
    </View>
  );
};

export default Settings;
