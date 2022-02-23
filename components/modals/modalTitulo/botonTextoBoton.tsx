import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

interface INTERFACE {
  accionMenos: () => void;
  accionMas: () => void;
  texto: string;
  titleBotonMenos: string;
  titleBotonMas: string;
}

const BotonTextoBoton = ({
  accionMenos,
  accionMas,
  texto,
  titleBotonMenos,
  titleBotonMas,
}: INTERFACE) => {
  let timer: NodeJS.Timeout;

  function addTimer(action: () => void) {
    action();

    timer = setTimeout(() => {
      addTimer(action);
    }, 100);
  }

  function eraseTimer() {
    clearTimeout(timer);
  }

  return (
    <View style={styles.viewContainer}>
      <View style={{ width: "15%", backgroundColor: "red" }}>
        <Button
          onPress={() => {}}
          onPressIn={() => addTimer(accionMenos)}
          onPressOut={eraseTimer}
          title={titleBotonMenos}
        />
      </View>
      <Text style={{ margin: 3, fontSize: 20 }}>{texto}</Text>
      <View style={{ width: "15%" }}>
        <Button
          onPress={() => {}}
          onPressIn={() => addTimer(accionMas)}
          onPressOut={eraseTimer}
          title={titleBotonMas}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
    alignItems: "center",
  },
});

export default BotonTextoBoton;
