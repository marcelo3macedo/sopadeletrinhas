import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes/index.routes';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalTheme from '@themes/Provider';
import { persistor, store } from './src/store';
import './src/translations/i18n';

export default function App() {
  return (
    <GlobalTheme>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GlobalTheme>
  );
}
