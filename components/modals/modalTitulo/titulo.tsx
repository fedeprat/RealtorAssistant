import { Modal, View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "./titulo.styles";
import { ACTIONS } from "../../../redux/actions";
import {
  desplazar,
  desplazarSubtitle,
  desplazarTituloVertical,
  desplazarSubTituloVertical,
} from "../../../redux/actions";
import { connect } from "react-redux";
import { Input, Button, Divider } from "react-native-elements";
import BotonTextoBoton from "./botonTextoBoton";
import React from "react";

interface MODALTITULO {
  visible: boolean;
  setVisible: (boolean: boolean) => void;
  title: string;
  subtitle: string;
  addTitle: (text: string) => {};
  addSubtitle: (text: string) => {};
  aumentarFuente: () => void;
  disminuirFuente: () => void;
  desplazar: (key: string) => void;
  aumentarFuenteSubtitulo: () => void;
  disminuirFuenteSubtitulo: () => void;
  desplazarSubtitle: (key: string) => void;
  desplazarTituloVertical: (data: string) => void;
  desplazarSubTituloVertical: (data: string) => void;
}

const ModalTitulo = ({
  visible,
  setVisible,
  title,
  addTitle,
  addSubtitle,
  aumentarFuente,
  disminuirFuente,
  desplazar,
  desplazarSubtitle,
  subtitle,
  aumentarFuenteSubtitulo,
  disminuirFuenteSubtitulo,
  desplazarTituloVertical,
  desplazarSubTituloVertical,
}: MODALTITULO) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => setVisible(false)}
      transparent={true}
      statusBarTranslucent={true}
    >
      <KeyboardAvoidingView behavior="height" style={styles.viewBackground}>
        <ScrollView style={styles.textModal}>
          <View>
            <View style={{ margin: 30 }}>
              <Input
                placeholder="Titulo"
                style={styles.inputContainer}
                onChangeText={(text) => addTitle(text)}
              >
                {title}
              </Input>
            </View>
            <View style={{ width: "100%", alignItems: "center" }}>
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
                onPress={() => {
                  setVisible(false);
                }}
              />
            </View>
            <BotonTextoBoton
              accionMas={aumentarFuente}
              accionMenos={disminuirFuente}
              texto={"Tamaño de la fuente"}
              titleBotonMas={"+"}
              titleBotonMenos={"-"}
            />

            <BotonTextoBoton
              accionMas={() => desplazar(ACTIONS.DESPLAZAR_DERECHA)}
              accionMenos={() => desplazar(ACTIONS.DESPLAZAR_IZQUIERDA)}
              texto={"Desplazar titulo"}
              titleBotonMas={'- >'}
              titleBotonMenos={"< -"}
            />
          
            {/* ---------------------------------------------------------------------- */}

            <BotonTextoBoton
              accionMas={() =>
                desplazarTituloVertical(ACTIONS.DESPLAZAR_TITULO_ABAJO)
              }
              accionMenos={() =>
                desplazarTituloVertical(ACTIONS.DESPLAZAR_TITULO_ARRIBA)
              }
              texto={"Desplazar titulo en eje y"}
              titleBotonMas={"+"}
              titleBotonMenos={"-"}
            />
          </View>
          {/* ------------------------------------------------------------------------- */}

          <Divider
            width={5}
            color={"rgb(134, 133, 133)"}
            style={{ marginTop: 20, marginBottom: 20 }}
          />

          <View style={{ marginBottom: 30, marginLeft: 20, marginRight: 30 }}>
            <View>
              <Input
                placeholder="Subtitulo"
                style={styles.inputContainer}
                onChangeText={(text) => addSubtitle(text)}
              >
                {subtitle}
              </Input>
            </View>
            <View style={{ width: "100%", alignItems: "center" }}></View>

            <BotonTextoBoton
              accionMas={aumentarFuenteSubtitulo}
              accionMenos={disminuirFuenteSubtitulo}
              texto={"Tamaño de la fuente"}
              titleBotonMas = {'+'}
              titleBotonMenos = {'-'}
            />

            <BotonTextoBoton accionMas={() => {desplazarSubtitle(ACTIONS.DESPLAZAR_DERECHA_SUBTITLE)}}
            accionMenos = {() => desplazarSubtitle(ACTIONS.DESPLAZAR_IZQUIERDA_SUBTITLE)}
            texto = {'Desplazar subtitulo'}
            titleBotonMas = {'- >'}
            titleBotonMenos = {'< -'}
            />
          
            {/* ---------------------------------------------------------------------- */}

            <BotonTextoBoton accionMas={() => desplazarSubTituloVertical(ACTIONS.DESPLAZAR_SUBTITULO_ABAJO)}
            accionMenos = {() => desplazarSubTituloVertical(ACTIONS.DESPLAZAR_SUBTITULO_ARRIBA)}
            texto = {'Desplazar subtitulo en eje y'}
            titleBotonMas = {'+'}
            titleBotonMenos = {'-'}
            />
            {/* ---------------------------------------------------------------------------- */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default connect(null, {
  desplazar,
  desplazarSubtitle,
  desplazarTituloVertical,
  desplazarSubTituloVertical,
})(ModalTitulo);
