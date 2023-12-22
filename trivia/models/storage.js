import * as SecureStore from "expo-secure-store";
export async function storeToken(token) {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    console.error("Error storing token", error);
  }
}
export async function readToken() {
  try {
    const credentials = await SecureStore.getItemAsync("token");
    return credentials ? credentials.password : null;
  } catch (error) {
    console.log("error retrieving token", error);
    return null;
  }
}
export async function deleteToken() {
  try {
    await SecureStore.deleteItemAsync("token");
    console.log("Token removed successfully.");
  } catch (error) {
    console.error("Error removing the token", error);
  }
}
