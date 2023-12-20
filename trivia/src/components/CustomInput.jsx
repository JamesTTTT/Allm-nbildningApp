import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
// import { InputStyles } from '../styles';
import { InputStyle } from "../styles/Inputs";
import { Pressable } from "react-native";

const CustomInput = ({ type, inputValue, setInputValue }) => {
  const [show, setShow] = useState(false);

  const handlePressShow = () => setShow(!show);

  return (
    <View style={{ position: 'relative', flexDirection: 'row' }}>
      <TextInput secureTextEntry={!show && type.toLowerCase() === 'password'} value={ inputValue } onChange={e => setInputValue(e.target.value)} style={ InputStyle } type={ type.toLowerCase() } placeholder={ type } />
      { type.toLowerCase() === 'password' && (
        <Pressable onPress={handlePressShow} style={{ position: 'absolute', top: 4, right: 0 }}>
          <Text style={{ color: '#7E5EFF', fontWeight: '600', backgroundColor: '#E8E8E8', paddingVertical: 12, paddingHorizontal: 16 }}>Show</Text>
        </Pressable>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
