import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./components/Fotos";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";


export default function App() {
  return (
    <ReduxProvider store={store}>

        <View style={styles.container}>
          <StatusBar style="auto" />
          <Home />
        </View>

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
