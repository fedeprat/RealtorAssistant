import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./home.styles";
import bañera from "../iconos/bañera.png";
import superficieTotal from "../iconos/casa-terreno.png";
import superficieInterior from "../iconos/casa.png";
import dormitorio from "../iconos/dormitorio.png";
import garage from "../iconos/garage.png";
import inodoro from "../iconos/inodoro.png";
import Iconito from "../iconos";
import Foto from "../Foto";
import Header from "../header";
import Footer from "../footer";
import {
  estilosTexto,
  estilosIcono,
  estiloContainer,
} from "../iconos/iconos.styles";
import { connect } from "react-redux";

interface HOME {
  estado: {
    foto1: string;
    foto2: string;
    foto3: string;
    foto4: string;
    foto5: string;
    foto6: string;
  };
}

const Home = ({ estado }: HOME) => {
  return (
    <View style={styles.containerPadre}>
      <Header estilos={styles.header} />
      {estado.foto1 ? (
        <TouchableOpacity style={styles.container1} onLongPress= {() => alert('long-pressed')}>
          <Image source={{ uri: estado.foto1 }} style={styles.images} />
        </TouchableOpacity>
      ) : (
        <Foto estilos={styles.container1} name={"foto1"} />
      )}
      {estado.foto2 ? (
        <TouchableOpacity style={styles.container2} >
          <Image source={{ uri: estado.foto2 }} style={styles.images} />
        </TouchableOpacity>
      ) : (
        <Foto estilos={styles.container2} name={"foto2"} />
      )}
      {estado.foto3 ? (
        <TouchableOpacity style={styles.container3} >
          <Image source={{ uri: estado.foto3 }} style={styles.images} />
        </TouchableOpacity>
      ) : (
        <Foto estilos={styles.container3} name={"foto3"} />
      )}

      <TouchableOpacity style={styles.medio}>
        <Iconito
          foto={superficieTotal}
          styles={estilosTexto.superficieTotal}
          estiloIcono={estilosIcono.superficieTotal}
          estiloContainer={estiloContainer.superficieTotal}
        />
        <Iconito
          foto={superficieInterior}
          styles={estilosTexto.superficieInterior}
          estiloIcono={estilosIcono.superficieInterior}
          estiloContainer={estiloContainer.superficieInterior}
        />
        <Iconito
          foto={bañera}
          styles={estilosTexto.bañera}
          estiloIcono={estilosIcono.bañera}
          estiloContainer={estiloContainer.bañera}
        />
        <Iconito
          foto={inodoro}
          styles={estilosTexto.inodoro}
          estiloIcono={estilosIcono.inodoro}
          estiloContainer={estiloContainer.inodoro}
        />
        <Iconito
          foto={dormitorio}
          styles={estilosTexto.habitacion}
          estiloIcono={estilosIcono.dormitorio}
          estiloContainer={estiloContainer.dormitorio}
        />
        <Iconito
          foto={garage}
          styles={estilosTexto.garage}
          estiloIcono={estilosIcono.garage}
          estiloContainer={estiloContainer.garage}
        />
      </TouchableOpacity>

      {estado.foto4 ? (
        <TouchableOpacity style={styles.container4} >
          <Image source={{ uri: estado.foto4 }} style={styles.images} />
        </TouchableOpacity>
      ) : (
        <Foto estilos={styles.container4} name={"foto4"} />
      )}
      {estado.foto5 ? (
        <TouchableOpacity style={styles.container5} >
        <Image source={{ uri: estado.foto5 }} style={styles.images} />
        </TouchableOpacity>
      ) : (
        <Foto estilos={styles.container5} name={"foto5"} />
      )}
      {estado.foto6 ? (
        <TouchableOpacity style={styles.container6} >
        <Image source={{ uri: estado.foto6 }} style={styles.images} />
        </TouchableOpacity>
      ) : (
        <Foto estilos={styles.container6} name={"foto6"} />
      )}

      <Footer
        estilosPrincipal={styles.footer}
        estiloIvanLogo={styles.logoIvan}
        estiloCologo={styles.cologo}
      />
    </View>
  );
};

function stateMapToProps(state: { fotos: {} }) {
  return {
    estado: state.fotos,
  };
}

export default connect(stateMapToProps, null)(Home);
