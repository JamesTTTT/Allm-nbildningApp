import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Description, QuizImage, QuizStatsStyle, TextContainer, Title } from "../styles/QuizStats";

const QuizStats = ({ title, description, uri }) => {
  return (
    <View style={QuizStatsStyle}>
      <Image style={QuizImage} source={{ uri: uri }} />
      <View style={TextContainer}>
        <Text style={Title}>{ title }</Text>
        <Text style={Description}>{ description } This is just some text instead of a description</Text>        
      </View>
    </View>
  );
};

export default QuizStats;

const styles = StyleSheet.create({});
