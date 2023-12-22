import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import { HomeStyles } from "../styles";
import { HomeStyle, TitleText, CenterContainer, CardContainer, MainContainer } from "../styles/Home";
import { CustomInput, QuizCard } from "../components";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={ HomeStyle }>
      <View style={ CenterContainer}>
        <Text style={ TitleText }>Feed</Text>
      </View>
      <View style={[ CenterContainer, MainContainer ]}>
        <CustomInput type='text' inputValue={searchQuery} setInputValue={setSearchQuery} />
        <View style={CardContainer}>
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </View>        
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
