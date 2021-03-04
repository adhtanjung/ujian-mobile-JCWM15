import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const persistConfif = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['isSignedIn'],
};
const persistedReducer = persistReducer(persistConfif, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
