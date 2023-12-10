import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomButton, CustomInput } from '../components';
// import { LoginStyles } from '../styles';
import { LoginStyle, LoginTitle } from "../styles/Login";

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleLogin = () => {};

  return (
    <View style={ LoginStyle }>
      <View style={{ flex: 1, alignItems: 'cenmter', width: '100%' }}>
        <Text style={ LoginTitle }>Log In</Text>
        <View style={{ gap: 16 }}>
          <CustomInput inputValue={emailValue} setInputValue={setEmailValue} type='Email' />
          <CustomInput inputValue={passwordValue} setInputValue={setPasswordValue} type='Password' />
        </View>
      </View>
      <View style={{ width: '100%' }}>
        <Pressable onPress={handleLogin}>
          <CustomButton buttonText='Log In' />
        </Pressable>
        <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 16, color: '#7E5EFF', fontWeight: '600' }}>Forgot Your Password?</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
