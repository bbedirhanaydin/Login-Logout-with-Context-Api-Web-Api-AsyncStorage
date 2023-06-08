import React, {useContext, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const LoginScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login, isLoading}: any = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.container_body}>
        <Spinner visible={isLoading} />
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Pressable
          style={styles.button}
          onPress={() => login(username, password)}>
          <Text style={styles.text_button}>Login</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={{color: '#569DAA', marginLeft: 5}}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  container_body: {
    padding: 20,
    height: Dimensions.get('window').height / 2.3,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#569DAA',
    alignItems: 'center',
    padding: 10,
    borderRadius: 3,
  },
  text_button: {
    fontSize: 18,
    color: '#ffffff',
  },
  input: {
    borderWidth: 0.6,
    borderColor: '#a4a4a4',
    borderRadius: 3,
    color: '#a3a3a3',
  },
});

export default LoginScreen;
