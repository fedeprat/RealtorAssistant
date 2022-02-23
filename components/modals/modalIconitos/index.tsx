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
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalIconitos;