import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/configureStore';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import TabStack from './src/navigations/TabStack';
import DrawerStack from './src/navigations/DrawerStack';
import MainNav from './src/navigations/MainNav';
import SplashScreen from 'react-native-splash-screen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EF3651',
    surface: '#2A2C36',
    text: '#F5F5F5',
    background: '#1E1F28',
    placeholder: '#ABB4BD',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            {/* <Text>home</Text> */}
            {/* <Login /> */}
            {/* <Home /> */}
            {/* <DrawerStack /> */}
            {/* <TabStack /> */}
            <MainNav />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
