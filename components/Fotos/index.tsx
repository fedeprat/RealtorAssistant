import React, { useState } from "react";
import { View, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { styles } from "./home.styles";
import bañera from "../iconos/bañera.png";
import superficieTotal from "../iconos/casa-terreno.png";
import superficieInterior from "../iconos/casa.png";
import dormitorio from "../iconos/dormitorio.png";
import garage from "../iconos/garage.png";
import inodoro from "../iconos/inodoro.png";
import Fotito from "../iconos";
import Foto from "../Foto";
import Header from "../header";
import Footer from "../footer";
import {
  estilosTexto,
  estilosIcono,
  estiloContainer,
} from "../iconos/iconos.styles";
import { connect } from "react-redux";
import ModalIconitos from "../modals/modalIconitos";
import TouchableImagen from "./Imagen";
import Precio from "../Precio/Precio";
import { useSelector } from "react-redux";
import ModalFoto from "../modals/modalFoto/modalFoto";

interface HOME {
  estado: {
    foto1: string;
    foto2: string;
    foto3: string;
    foto4: string;
    foto5: string;
    foto6: string;
  };
  icono: {
    icono1: boolean;
    icono2: boolean;
    icono3: boolean;
    icono4: boolean;
    icono5: boolean;
    icono6: boolean;
    name: boolean;
  };
}
interface STATE {
  precio: { precio: string };
}

const Home = ({ estado, icono }: HOME) => {
  const [iconitosVisible, setIconitosVisible] = useState(false);
  const [visible, setVisible] = useState(false); // estado para mostrar modal precio
  const precio = useSelector((state: STATE) => state.precio);
  return (
    <SafeAreaView style={styles.containerPadre}>
      <Header estilos={styles.header} />
      <Precio
        precio={precio.precio}
        estiloTexto={styles.estiloTexto}
        estiloView={styles.estiloView}
        setVisible={setVisible}
      />
      <ModalFoto
        visibleFoto={visible}
        setVisibleFoto={setVisible}
        precio={precio.precio}
      />
      <ModalIconitos
        visible={iconitosVisible}
        setVisible={setIconitosVisible}
        checked={icono}
      />

      <View          //aaaaaaaqui
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {estado.foto1 ? ( // si hay una foto cargada renderiza la foto, sino el boton para cargar una
          <TouchableImagen
            estilo={styles.container1}
            estado={estado.foto1}
            name={"foto1"}
          />
        ) : (
          <Foto estilos={styles.container1} name={"foto1"} />
        )}
        {estado.foto2 ? ( // si hay una foto cargada renderiza la foto, sino el boton para cargar una
          <TouchableImagen
            estilo={styles.container2}
            estado={estado.foto2}
            name={"foto2"}
          />
        ) : (
          <Foto estilos={styles.container2} name={"foto2"} />
        )}
        {estado.foto3 ? ( // si hay una foto cargada renderiza la foto, sino el boton para cargar una
          <TouchableImagen
            estilo={styles.container3}
            estado={estado.foto3}
            name={"foto3"}
          />
        ) : (
          <Foto estilos={styles.container3} name={"foto3"} />
        )}
      </View>

      <TouchableOpacity /* el medio */
        style={styles.medio}
        onPress={() => setIconitosVisible(true)} // funcion que activa el modal de los iconos
      >
        {icono.icono1 ? ( // si el estado del icono es true renderiza el icono sino queda oculto
          <Fotito
            foto={superficieTotal}
            styles={estilosTexto.texto}
            estiloIcono={estilosIcono.iconos}
            estiloContainer={estiloContainer.container}
            numero={"descripcion1"}
          />
        ) : null}
        {icono.icono2 ? ( // si el estado del icono es true renderiza el icono sino queda oculto
          <Fotito
            foto={superficieInterior}
            styles={estilosTexto.texto}
            estiloIcono={estilosIcono.iconos}
            estiloContainer={estiloContainer.container}
            numero={"descripcion2"}
          />
        ) : null}
        {icono.icono3 ? ( // si el estado del icono es true renderiza el icono sino queda oculto
          <Fotito
            foto={bañera}
            styles={estilosTexto.texto}
            estiloIcono={estilosIcono.iconos}
            estiloContainer={estiloContainer.container}
            numero={"descripcion3"}
          />
        ) : null}
        {icono.icono4 ? ( // si el estado del icono es true renderiza el icono sino queda oculto
          <Fotito
            foto={inodoro}
            styles={estilosTexto.texto}
            estiloIcono={estilosIcono.iconos}
            estiloContainer={estiloContainer.container}
            numero={"descripcion4"}
          />
        ) : null}
        {icono.icono5 ? ( // si el estado del icono es true renderiza el icono sino queda oculto
          <Fotito
            foto={dormitorio}
            styles={estilosTexto.texto}
            estiloIcono={estilosIcono.iconos}
            estiloContainer={estiloContainer.container}
            numero={"descripcion5"}
          />
        ) : null}
        {icono.icono6 ? ( // si el estado del icono es true renderiza el icono sino queda oculto
          <Fotito
            foto={garage}
            styles={estilosTexto.texto}
            estiloIcono={estilosIcono.iconos}
            estiloContainer={estiloContainer.container}
            numero={"descripcion6"}
          />
        ) : null}
      </TouchableOpacity>

      <View    // aaaaaaaaaaaaqui
        style={{
          flexDirection: "row",
          height: "20%",
          justifyContent: "center",
        }}
      >
        {estado.foto4 ? ( // si hay una foto cargada renderiza la foto, sino el boton para cargar una
          <TouchableImagen
            estilo={styles.container4}
            estado={estado.foto4}
            name={"foto4"}
          />
        ) : (
          <Foto estilos={styles.container4} name={"foto4"} />
        )}
        {estado.foto5 ? ( // si hay una foto cargada renderiza la foto, sino el boton para cargar una
          <TouchableImagen
            estilo={styles.container5}
            estado={estado.foto5}
            name={"foto5"}
          />
        ) : (
          <Foto estilos={styles.container5} name={"foto5"} />
        )}
        {estado.foto6 ? ( // si hay una foto cargada renderiza la foto, sino el boton para cargar una
          <TouchableImagen
            estilo={styles.container6}
            estado={estado.foto6}
            name={"foto6"}
          />
        ) : (
          <Foto estilos={styles.container6} name={"foto6"} />
        )}
      </View>
      <Footer
        estilosPrincipal={styles.footer}
        estiloIvanLogo={styles.logoIvan}
        estiloCologo={styles.cologo}
      />
    </SafeAreaView>
  );
};

interface MAP {
  fotos: {};
  iconos: {};
}

function stateMapToProps(state: MAP) {
  return {
    estado: state.fotos,
    icono: state.iconos,
  };
}

export default connect(stateMapToProps, null)(Home);
