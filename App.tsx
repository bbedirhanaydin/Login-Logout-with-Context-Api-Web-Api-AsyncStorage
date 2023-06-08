import React from 'react';
import {StatusBar} from 'react-native';
import Rooter from './src/pages/Rooter';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Rooter />
    </AuthProvider>
  );
};

export default App;
