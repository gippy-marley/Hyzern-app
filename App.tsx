/**
 * React Native Remix
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';
import {theme} from './src/styles/theme';
import {darkTheme} from './src/styles/darkTheme';
import {ThemeProvider} from '@shopify/restyle';
import {AuthProvider} from './src/context/Auth';

const App = () => {
  const isDarkMode = true; // useColorScheme() === 'dark';
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
