import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import { RegistrationStyles } from '../styles';
import { RegistrationStyle, RegistrationTitle, TitleBox, ExitButtonText, LoginButtonText, ForgotPassword } from "../styles/Registration";
import { CustomButton, CustomInput } from "../components";

const Registration = ({ navigation }) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleRegistration = () => {};

  return (
    <View style={ RegistrationStyle }>
      <View style={{ width: '100%' }}>
        <View style={ TitleBox }>
          <Pressable><Text style={ ExitButtonText }>&#10005;</Text></Pressable>
          <Text style={ RegistrationTitle }>Sign Up</Text>
          <Pressable onPress={ () => {navigation.navigate('Login')} }><Text style={ LoginButtonText }>Log In</Text></Pressable>
        </View>
        <View style={{ width: '100%', gap: 16 }}>
          <CustomInput inputValue={nameValue} setInputValue={setNameValue} type='Name' />
          <CustomInput inputValue={emailValue} setInputValue={setEmailValue} type='Email' />
          <CustomInput inputValue={passwordValue} setInputValue={setPasswordValue} type='Password' />        
        </View>        
      </View>
      <View style={{ width: '100%' }}>
        <CustomButton buttonText='Sign Up' press={handleRegistration} />
        <Text style={ ForgotPassword }>Forgot Your Password?</Text>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({});
