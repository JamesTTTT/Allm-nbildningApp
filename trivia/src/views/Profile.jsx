import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import { ProfileStyles } from '../../src/styles';
import { ProfileStyle, TopContainer, BottomContainer, ImageStyle, ImageConatiner, Navbar, Title, H2, ButtonTab, PressableText, PressedText, PressableButtonActive, PressableButtonDefault, TopTextContainer, QuizContainer } from '../styles/Profile';
import { FontAwesome } from '@expo/vector-icons';
import { TextStyle } from "../styles/Profile";
import QuizStats from "../components/QuizStats";

const Profile = () => {
  const [tabState, setTabState] = useState('stats');

  const handleLogout = () => {console.log('logout')};

  return (
    <View style={ProfileStyle}>
      <View style={TopContainer}>
        <View style={Navbar}>
          <Pressable>
            <Text style={TextStyle}>Settings</Text>
          </Pressable>
          <Text style={Title}>Profile</Text>
          <Pressable onPress={handleLogout}>
            <Text style={TextStyle}>Logout</Text>
          </Pressable>
        </View>
        <View style={ImageConatiner}>
          {
            true ? (
              <Image
                style={ImageStyle} 
                source={{ 
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' 
                }} 
              />
            ) : (
              <FontAwesome name="user-circle-o" size={160} color="black" />
            )
          }

        </View>
      </View>
      <View style={BottomContainer}>
        <View style={TopTextContainer}>
          <Text style={H2}>Name</Text>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 500 }}>Example Stats or something</Text>          
        </View>
        <View style={ButtonTab}>
          <Pressable onPress={() => setTabState('stats')} style={tabState === 'stats' ? PressableButtonActive : PressableButtonDefault}><Text style={tabState === 'stats' ? PressedText : PressableText}>Stats</Text></Pressable>
          <Pressable onPress={() => setTabState('edit')} style={tabState === 'edit' ? PressableButtonActive : PressableButtonDefault}><Text style={tabState === 'edit' ? PressedText : PressableText}>Edit</Text></Pressable>
        </View>
        {
          tabState === 'stats' ? (
            <View style={QuizContainer}>
              <QuizStats title='Flag Quiz' description='' uri='https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsYWdzfGVufDB8fDB8fHww' />
              <QuizStats title='Europe Quiz' description='' uri='https://plus.unsplash.com/premium_photo-1674596362102-229f2b38fe1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhZ3MlMjBldXJvcGV8ZW58MHx8MHx8fDA%3D' />
              <QuizStats title='Africa Quiz' description='' uri='https://images.unsplash.com/photo-1655102718200-7230a1be8bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmxhZ3MlMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D' />
            </View>
          ) : tabState === 'edit' ? (
            <View>
              <Text>Edit</Text>
            </View>
          ) : <></>
        }
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
