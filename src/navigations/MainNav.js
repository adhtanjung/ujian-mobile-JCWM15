import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {keepLoginAction} from '../redux/actions';
import Login from '../screens/Login';
import DrawerStack from './DrawerStack';

const MainNav = () => {
  const dispatch = useDispatch();
  const {isSignedIn, username} = useSelector((state) => state.isSignedIn);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(keepLoginAction(username));
    }
  }, [dispatch, isSignedIn, username]);
  return <>{isSignedIn ? <DrawerStack /> : <Login />}</>;
};

export default MainNav;

const styles = StyleSheet.create({});
