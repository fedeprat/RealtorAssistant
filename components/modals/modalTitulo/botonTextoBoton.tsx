import { View, Text } from "react-native";
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
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <View style={{ width: "15%", backgroundColor: "red" }}>
        <Button onPress={accionMenos} title={titleBotonMenos} />
      </View>
      <Text style={{ margin: 3, fontSize: 20 }}>{texto}</Text>
      <View style={{ width: "15%" }}>
        <Button onPress={accionMas} title={titleBotonMas} />
      </View>
    </View>
  );
};

export default BotonTextoBoton;
