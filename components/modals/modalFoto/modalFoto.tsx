import { KeyboardAvoidingView, Modal, View } from "react-native";
import { styles } from "./modalFoto.styles";
import { Button, Input } from "react-native-elements";
import {cambiarPrecio} from '../../../redux/actions'
import {useDispatch} from 'react-redux'

interface ModalFoto {
  visibleFoto: boolean;
  setVisibleFoto: (boolean: boolean) => void;
  precio: string
}

const ModalFoto = ({ visibleFoto, setVisibleFoto, precio }: ModalFoto) => {
  const dispatch = useDispatch()
  return (
    <Modal
      visible={visibleFoto}
      animationType="slide"
      onRequestClose={() => setVisibleFoto(false)}
      transparent={true}
      statusBarTranslucent={true}
    >
      <KeyboardAvoidingView behavior="height" style={styles.viewBackground}>
        <View style={styles.container}>
          <View
            style={{
              width: "90%",
              height: "20%",
              marginTop: "20%",
            }}
          >
            <Input
            onChangeText={(text: string) => dispatch(cambiarPrecio(text))}
            >{precio}</Input>
          </View>
          <View style={styles.butonContainer}>
            <Button
              title="Listo"
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => setVisibleFoto(false)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalFoto;
