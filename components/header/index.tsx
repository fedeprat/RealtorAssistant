import React, { FC, useState } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import { addTitle } from "../../redux/actions";
import { styles } from "./header.styles";

interface HEADER {
  estilos: {};
  addTitle: (data: string) => {};
  titulo: string;
}

const Header = ({ estilos, addTitle, titulo }: HEADER) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity style={estilos} onPress={() => setVisible(true)}>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        transparent={true}
        statusBarTranslucent={true}
      >
        <View style={styles.viewBackground}>
          <View style={styles.textModal}>
            <Text style = {styles.textoTitulo}>ESCRIBE UN TITULO</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Titulo"
                style={styles.input}
                onChangeText={(text) => addTitle(text)}
              >
                {titulo}
              </TextInput>
            </View>
            <Button
              title="Listo"
              onPress={() => {
                setVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <Text
        style={{
          fontSize: 30,
          color: "white",
          fontFamily: "Roboto",
          fontWeight: "bold",
        }}
      >
        {titulo}
      </Text>
    </TouchableOpacity>
  );
};

function mapStateToProp(state: { titulo: string }) {
  return { titulo: state.titulo };
}

export default connect(mapStateToProp, { addTitle })(Header);
