import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const persistor = (reducers:any) => {
  const persistedReducer = persistReducer({
      key: 'app',
      storage: AsyncStorage,
      whitelist: [],
  }, reducers);

  return persistedReducer;
};

export default persistor;
