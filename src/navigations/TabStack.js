import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home';
import LiveUpdate from '../screens/LiveUpdate';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'update') {
            iconName = 'update';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} type="material" color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'black',
        },
      }}
      initialRouteName="home">
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="update" component={LiveUpdate} />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
