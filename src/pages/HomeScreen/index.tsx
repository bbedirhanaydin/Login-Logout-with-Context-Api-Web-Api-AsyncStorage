import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {AuthContext} from '../../context/AuthContext';

const HomeScreen = () => {
  const {isLoading, logout}: any = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Text style={styles.text}>Welcome</Text>
      <Pressable style={styles.button} onPress={logout}>
        <Text style={styles.button_text}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontSize: 20,
    color: 'white',
  },
});

export default HomeScreen;
