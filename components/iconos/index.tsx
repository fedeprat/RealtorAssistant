import React from "react";
import { View, Image, ImageSourcePropType, Text } from "react-native";
import { connect, useSelector } from "react-redux";

interface FOTITO {
  foto: ImageSourcePropType;
  styles: {};
  estiloIcono: {};
  estiloContainer: {};
  numero:
    | "descripcion1"
    | "descripcion2"
    | "descripcion3"
    | "descripcion4"
    | "descripcion5"
    | "descripcion6";
}

interface ESTADO {
  iconos: {
    descripcion1: string;
    descripcion2: string;
    descripcion3: string;
    descripcion4: string;
    descripcion5: string;
    descripcion6: string;
  };
}

interface DESCRIPCION {
  descripcion1: string;
  descripcion2: string;
  descripcion3: string;
  descripcion4: string;
  descripcion5: string;
  descripcion6: string;
}

const Fotito = ({
  foto,
  styles,
  estiloIcono,
  estiloContainer,
  numero,
}: FOTITO) => {
  const descripcion: DESCRIPCION = useSelector((state: ESTADO) => state.iconos);

  return (
    <View style={estiloContainer}>
      <Image style={estiloIcono} source={foto} />
      <Text style={styles}>{descripcion[numero]}</Text>
    </View>
  );
};

function mapStateToProps(state: {
  iconos: {
    descripcion1: string;
    descripcion2: string;
    descripcion3: string;
    descripcion4: string;
    descripcion5: string;
    descripcion6: string;
  };
}) {
  return {
    descripcion: state.iconos,
  };
}

export default connect(mapStateToProps, null)(Fotito);
