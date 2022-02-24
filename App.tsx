import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import PlantillaInsta from "./components/Fotos";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './components/Home'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ReduxProvider store={store}>
      <StatusBar hidden style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name= 'Home' component={Home} />
          <Stack.Screen
            name="PlantillaInsta"
            component={PlantillaInsta}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
