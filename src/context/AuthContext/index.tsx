import React, {createContext, useState, useEffect} from 'react';
import {BASE_URL, BASE_URL_REGISTER} from '../../../Config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export const AuthProvider = ({children}: any) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (email: any, username: any, password: any) => {
    setIsLoading(true);
    axios
      .post(BASE_URL_REGISTER, {
        username,
        password,
        email,
        name: {
          firstname: 'John',
          lastname: 'Doe',
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: '1-570-236-7033',
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('info', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (username: any, password: any) => {
    setIsLoading(true);
    axios
      .post(BASE_URL, {
        username,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem(`userInfo`, JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem(`userInfo`);
      if (userInfo != null) {
        userInfo = JSON.parse(userInfo);
      }
      if (userInfo) {
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    } catch (error) {
      setSplashLoading(false);
      console.log(`is logged in error ${error} `);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{register, isLoading, userInfo, login, logout, splashLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
