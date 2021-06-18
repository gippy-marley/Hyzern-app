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
import {StatusBar, useColorScheme} from 'react-native';
import Routes from './src/routes';
import {ThemeProvider} from './src/styles/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <ThemeProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
