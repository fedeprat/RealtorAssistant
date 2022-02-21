import { CheckBox, Input } from "react-native-elements";
import { connect } from "react-redux";
import { addIcon, descripcion } from "../../../redux/actions";
import { View } from "react-native";

interface CHECKBOXITO {
  name: "icono1" | "icono2" | "icono3" | "icono4" | "icono5" | "icono6";
  iconos: {
    icono1: boolean;
    icono2: boolean;
    icono3: boolean;
    icono4: boolean;
    icono5: boolean;
    icono6: boolean;
    descripcion1: string;
    descripcion2: string;
    descripcion3: string;
    descripcion4: string;
    descripcion5: string;
    descripcion6: string;
  };
  titulo: string;
  addIcon: (name: string) => {};
  placeholder: string;
  descripcion: (name: string, texto: string) => {};
  cual:
    | "descripcion1"
    | "descripcion2"
    | "descripcion3"
    | "descripcion4"
    | "descripcion5"
    | "descripcion6";
}

const Checkboxito = ({
  name,
  iconos,
  titulo,
  addIcon,
  placeholder,
  descripcion,
  cual,
}: CHECKBOXITO) => {
  return (
    <View style={{ backgroundColor: "rgb(240,240,240)", marginTop: 30 }}>
      <CheckBox
        center
        title={titulo}
        checked={iconos[name]}
        onPress={(e: {}) => addIcon(name)}
      />
      <Input
        placeholder={placeholder}
        onChangeText={(texto) => descripcion(texto, cual)}
      >
        {iconos[cual]}
      </Input>
    </View>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    addIcon: (name: string) => dispatch(addIcon(name)),
    descripcion: (texto: string, name: string) =>
      dispatch(descripcion(texto, name)),
  };
}
function mapStateToProps(state: {
  iconos: {
    icono1: boolean;
    icono2: boolean;
    icono3: boolean;
    icono4: boolean;
    icono5: boolean;
    icono6: boolean;
    descripcion1: string;
    descripcion2: string;
    descripcion3: string;
    descripcion4: string;
    descripcion5: string;
    descripcion6: string;
  };
}) {
  return {
    iconos: state.iconos,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkboxito);
