import { ScrollView, Modal, View } from "react-native";
import { styles } from "./modalIconitos.styles";
import Checkboxito from "./checkBox";

interface ICONITOS {
  visible: boolean;
  setVisible: (hola: boolean) => void;
  checked: {
    name: boolean;
    icono1: boolean;
    icono2: boolean;
    icono3: boolean;
    icono4: boolean;
    icono5: boolean;
    icono6: boolean;
  };
}

const ModalIconitos = ({ visible, setVisible }: ICONITOS) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => setVisible(false)}
      transparent={true}
      statusBarTranslucent={true}
    >
      <View style={styles.viewBackground}>
        <ScrollView style={styles.textModal} contentOffset={{ x: 20, y: -20 }}>
          <Checkboxito
            name={"icono1"}
            titulo={"superficie cubierta"}
            placeholder={"m2"}
            cual={'descripcion1'}
          />
          <Checkboxito
            name={"icono2"}
            titulo={"superficie total"}
            placeholder={"m2"}
            cual={'descripcion2'}
          />
          <Checkboxito
            name={"icono3"}
            titulo={"baños con ducha"}
            placeholder={"cantidad"}
            cual={'descripcion3'}
          />
          <Checkboxito
            name={"icono4"}
            titulo={"baños"}
            placeholder={"cantidad"}
            cual={'descripcion4'}
          />
          <Checkboxito
            name={"icono5"}
            titulo={"dormitorios"}
            placeholder={"cantidad"}
            cual={'descripcion5'}
          />
          <Checkboxito
            name={"icono6"}
            titulo={"garage"}
            placeholder={"cantidad"}
            cual={'descripcion6'}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalIconitos;
