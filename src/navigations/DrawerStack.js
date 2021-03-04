import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {withTheme} from 'react-native-paper';
import TabStack from './TabStack';
import Account from '../screens/Account';
const Drawer = createDrawerNavigator();
const DrawerStack = (props) => {
  const {colors} = props.theme;
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={TabStack} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
};

export default withTheme(DrawerStack);

const styles = StyleSheet.create({});
