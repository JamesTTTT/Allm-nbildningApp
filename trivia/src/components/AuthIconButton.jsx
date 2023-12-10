import { StyleSheet, Text, View, Pressable, Image } from "react-native";
// import { ButtonStyle } from "../styles";
import { AppleContainer, AuthButtonText, AuthIconButtonStyle, FacebookContainer, GoogleContainer, IconTextStart, InnerAuthContainer, WhiteText } from "../styles/Buttons";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const AuthIconButton = ({ icon }) => {
  const getContainerStyle = () => {
    return icon === 'google' ? GoogleContainer : icon === 'facebook' ? FacebookContainer : icon === 'apple' ? AppleContainer : '';
  };
  const getTextColor = () => {
    return icon === 'facebook' || icon === 'apple' ? WhiteText : '';
  };

  return (
    <Pressable style={[ AuthIconButtonStyle, getContainerStyle() ]}>
      <View style={ InnerAuthContainer }>
        {
          icon === 'google' ? (
            <Image style={{ width: 30, aspectRatio: 1 / 1 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png'}} />
          ) : icon === 'facebook' ? (
            <FontAwesome5 name='facebook' size={30} color='white' />
          ) : icon === 'apple' ? (
            <Image style={{ width: 30, aspectRatio: 1 / 1, objectFit: 'contain' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png'}} />
          ) : (<></>)
        }
        <Text style={[ IconTextStart, getTextColor() ]}>Continue with <Text style={ AuthButtonText }>{ icon }</Text></Text>
      </View>
      {/* <Ionicons name={ icon } size={30} color={ icon === 'logo-facebook' ? 'blue' : icon === 'logo-instagram' ? 'black' : icon === 'logo-google' ? 'gray' : 'black' } /> */}
    </Pressable>
  );
};

export default AuthIconButton;

const styles = StyleSheet.create({});
