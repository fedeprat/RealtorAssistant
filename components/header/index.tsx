import React, { FC, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  addTitle,
  biggerFont,
  smallerFont,
  addSubTitle,
  biggerFontSubtitulo,
  smallerFontSubtitle,
} from "../../redux/actions";
import ModalTitulo from "../modals/modalTitulo/titulo";

interface HEADER {
  estilos: {};
  addTitle: (data: string) => {};
  addSubTitle: (data: string) => {};
  title: string;
  top: string;
  right: string;
  fontSize: number;
  biggerFont: () => void;
  smallerFont: () => void;
  subtitle: string;
  rightSubtitulo: string;
  topSubtitulo: string;
  fontSizeSubtitulo: number;
  biggerFontSubtitulo: () => void;
  smallerFontSubtitle: () => void;
}

const Header = ({
  estilos,
  addTitle,
  title,
  top,
  right,
  fontSize,
  smallerFont,
  biggerFont,
  addSubTitle,
  subtitle,
  topSubtitulo,
  rightSubtitulo,
  fontSizeSubtitulo,
  biggerFontSubtitulo,
  smallerFontSubtitle,
}: HEADER) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity style={estilos} onPress={() => setVisible(true)}>
      <ModalTitulo
        visible={visible}
        setVisible={setVisible}
        addTitle={addTitle}
        title={title}
        aumentarFuente={biggerFont}
        disminuirFuente={smallerFont}
        subtitle={subtitle}
        aumentarFuenteSubtitulo={biggerFontSubtitulo}
        disminuirFuenteSubtitulo={smallerFontSubtitle}
        addSubtitle={addSubTitle}
      />
      <Text
        style={{
          fontSize: fontSize,
          color: "white",
          fontFamily: "Roboto",
          fontWeight: "bold",
          position: "absolute",
          top: top,
          right: right,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: fontSizeSubtitulo,
          color: "white",
          fontFamily: "Roboto",
          fontWeight: "bold",
          position: "absolute",
          top: topSubtitulo,
          right: rightSubtitulo,
        }}
      >
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
};

interface MAP {
  state: {};
  titulo: {
    titulo: string;
    position: {
      top: string;
      right: string;
    };
    fontSize: number;
  };
  subtitulo: {
    subtitulo: string;
    position: {
      top: string;
      right: string;
    };
    fontSize: number;
  };
}

function mapStateToProp(state: MAP) {
  return {
    title: state.titulo.titulo,
    top: state.titulo.position.top,
    right: state.titulo.position.right,
    fontSize: state.titulo.fontSize,

    subtitle: state.subtitulo.subtitulo,
    topSubtitulo: state.subtitulo.position.top,
    rightSubtitulo: state.subtitulo.position.right,
    fontSizeSubtitulo: state.subtitulo.fontSize,
  };
}

export default connect(mapStateToProp, {
  addTitle,
  biggerFont,
  smallerFont,
  addSubTitle,
  biggerFontSubtitulo,
  smallerFontSubtitle,
})(Header);
