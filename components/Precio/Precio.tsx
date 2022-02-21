import { Text, TouchableOpacity } from "react-native";
import { cambiarPrecio } from "../../redux/actions";

interface PRECIO {
  precio: {};
  estiloView: {};
  estiloTexto: {};
  setVisible: (hola: boolean) => void;
}

const Precio = ({ precio, estiloView, estiloTexto, setVisible }: PRECIO) => {
  return (
    <TouchableOpacity
      style={estiloView}
      onPress={() => setVisible(true)}
    >
      <Text style={estiloTexto}>{precio}</Text>
    </TouchableOpacity>
  );
};

export default Precio;
