import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
// import { ButtonStyles } from '../styles';
import { ButtonStyle, ButtonText } from '../styles/Buttons';

const CustomButton = ({ buttonText, press }) => {
  return (
    <Pressable onPress={press} style={ ButtonStyle }>
      <Text style={ ButtonText }>{ buttonText }</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
