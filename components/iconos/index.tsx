import React from "react";
import { View, Image, ImageSourcePropType, Text } from "react-native";

interface FOTITO {
  foto: ImageSourcePropType;
  styles: {};
  estiloIcono: {};
  estiloContainer: {}
}

const Fotito = ({ foto, styles, estiloIcono, estiloContainer }: FOTITO) => {
  return (
    <View style={estiloContainer}>
      <Image
        style={estiloIcono}
        source={foto}
      />
      <Text style={styles}>1</Text>
    </View>
  );
};

export default Fotito;
