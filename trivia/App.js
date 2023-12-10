import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home, Profile, Login, Registration } from "./src/views";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
      <Registration />
      {/* <Login /> */}
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: "#F6F6F6",
  },
});
