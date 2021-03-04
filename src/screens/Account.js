import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {userLogoutAction} from '../redux/actions';

const Account = () => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <Button
        style={{backgroundColor: 'black'}}
        onPress={() => dispatch(userLogoutAction())}>
        LOGOUT
      </Button>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
