import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import IcHomeOn from '../../assets/Icons/home-on.svg';
import IcHomeOff from '../../assets/Icons/home-off.svg';
import IcUploadOn from '../../assets/Icons/upload-on.svg';
import IcUploadOff from '../../assets/Icons/upload-off.svg';
import IcNotificationOn from '../../assets/Icons/notification-on.svg';
import IcNotificationOff from '../../assets/Icons/notification-off.svg';
import IcProfileOn from '../../assets/Icons/profile-on.svg';
import IcProfileOff from '../../assets/Icons/profile-off.svg';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <View style={styles.row}>
          <IcHomeOn />
          <Text style={styles.title('#1FCC79')}>Home</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <IcHomeOff />
          <Text style={styles.title('#9FA5C0')}>Home</Text>
        </View>
      );
    case 'Upload':
      return focus ? (
        <View style={styles.row}>
          <IcUploadOn />
          <Text style={styles.title('#1FCC79')}>Upload</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <IcUploadOff />
          <Text style={styles.title('#9FA5C0')}>Upload</Text>
        </View>
      );
    case 'Notification':
      return focus ? (
        <View style={styles.row}>
          <IcNotificationOn />
          <Text style={styles.title('#1FCC79')}>Notification</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <IcNotificationOff />
          <Text style={styles.title('#9FA5C0')}>Notification</Text>
        </View>
      );
    case 'Profile':
      return focus ? (
        <View style={styles.row}>
          <IcProfileOn />
          <Text style={styles.title('#1FCC79')}>Profile</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <IcProfileOff />
          <Text style={styles.title('#9FA5C0')}>Profile</Text>
        </View>
      );
    default:
      return <IcHomeOn />;
  }
};

export default function BottomNavigator({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPrevenDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={String(index)}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestId}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  row: {
    alignItems: 'center',
  },
  title: value => ({
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: value,
  }),
});
