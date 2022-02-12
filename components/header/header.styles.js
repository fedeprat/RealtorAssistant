import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textModal: {
    width: "100%",
    height: "60%",
    backgroundColor: "rgb(230,230,230)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  viewBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  input: {
    width: "90%",
    height: "100%",
    backgroundColor: "grey",
    borderRadius: 20,
    zIndex: 1000,
    position: "absolute",
    right: "5%",
  },
  inputContainer: {
    margin: 50,
    width: "80%",
    height: "10%",
    backgroundColor: "grey",
    borderRadius: 20,
    position: "relative",
  },
  textoTitulo: {
    fontFamily: "notoserif",
    fontWeight: "bold",
    position: "absolute",
    top: "5%",
    left: "17%",
  },
});
