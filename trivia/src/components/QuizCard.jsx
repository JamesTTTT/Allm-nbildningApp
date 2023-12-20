import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  InnerContainer,
  OuterContainer,
  QuizCardStyle,
  TextStyle,
  TitleStyle,
} from "../../src/styles/QuizCard";

const QuizCard = () => {
  return (
    <View style={OuterContainer}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1592487501226-7ed5e5dc80f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        resizeMode='cover'
        style={QuizCardStyle}
      ></ImageBackground>
      <View style={InnerContainer}>
        <Text style={[TextStyle, TitleStyle]}>QuizCard</Text>
      </View>
    </View>
  );
};

export default QuizCard;

const styles = StyleSheet.create({});
