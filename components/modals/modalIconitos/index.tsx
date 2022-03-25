import { ScrollView, Modal, View, KeyboardAvoidingView } from "react-native";
import { styles } from "./modalIconitos.styles";
import Checkboxito from "./checkBox";

interface ICONITOS {
  visible: boolean;
  setVisible: (hola: boolean) => void;
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
      <KeyboardAvoidingView behavior="height" style={styles.viewBackground}>
        <ScrollView style={styles.textModal} contentOffset={{ x: 20, y: -20 }}>
          <Checkboxito
            name={"icono1"}
            titulo={"covered surface"}
            placeholder={"square meters"}
            cual={'descripcion1'}
          />
          <Checkboxito
            name={"icono2"}
            titulo={"total surface"}
            placeholder={"square meters"}
            cual={'descripcion2'}
          />
          <Checkboxito
            name={"icono3"}
            titulo={"full bathrooms"}
            placeholder={"how many"}
            cual={'descripcion3'}
          />
          <Checkboxito
            name={"icono4"}
            titulo={"bathrooms"}
            placeholder={"how many"}
            cual={'descripcion4'}
          />
          <Checkboxito
            name={"icono5"}
            titulo={"bedrooms"}
            placeholder={"how many"}
            cual={'descripcion5'}
          />
          <Checkboxito
            name={"icono6"}
            titulo={"garage"}
            placeholder={"how many"}
            cual={'descripcion6'}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalIconitos;
