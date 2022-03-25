import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
// -------- valores importantes --------------- //
const valores = {
  fotosEsquina: {
    anchoFoto: width * 0.49, // ancho de las fotos de las esquinas
    altoFoto: width * 0.5 * 0.77, // alto de las fotos de las esquinas
    top: height * 0.18, //top de las fotos de las esquinas
    bottom: height * 0.06, //bottom de las fotos de las esquinas
  },
  fotosMedio: {
    anchoFotoMedio: width * 0.35, // ancho de las 2 fotos interiores
    altoFotoMedio: height * 0.12
  },
  valoresGenerales: {
    borde: "rgb(230, 230, 230)", // color del borde de las fotos
    curvatura: 10, // border radius de las fotos
    resizeMode: "cover",
  },
};

export const styles = StyleSheet.create({
  containerPadre: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
    justifyContent: 'space-between',
  },
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "rgb(80, 80, 80)",
    display: "flex",
    marginTop: 30,
    alignItems: "center",
  },
  medio: {
    width: "100%",
    height: '10%',
    borderWidth: 2,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tap: {
    width: "100%",
    height: '10%',
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textTap: {
    color: "rgb(100,100,100)",
    fontSize: 15
  },
  container1: {
    width: valores.fotosEsquina.anchoFoto,
    height: valores.fotosEsquina.altoFoto,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: valores.valoresGenerales.curvatura,
    borderWidth: 2,
    borderColor: valores.valoresGenerales.borde,
  },
  container2: {
    width: valores.fotosEsquina.anchoFoto,
    height: valores.fotosEsquina.altoFoto,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: valores.valoresGenerales.curvatura,
    borderWidth: 2,
    borderColor: valores.valoresGenerales.borde,
  },
  container3: {
    position: 'absolute',
    bottom: - valores.fotosMedio.altoFotoMedio / 3.9,
    width: valores.fotosMedio.anchoFotoMedio,
    height: valores.fotosMedio.altoFotoMedio,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: valores.valoresGenerales.curvatura,
    borderWidth: 2,
    borderColor: valores.valoresGenerales.borde,
  },
  container4: {
    position: 'absolute',
    right: (width/2) - (valores.fotosMedio.anchoFotoMedio / 2),
    top: - valores.fotosMedio.altoFotoMedio/ 3.9,
    width: valores.fotosMedio.anchoFotoMedio,
    height: valores.fotosMedio.altoFotoMedio,
    zIndex: 100,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: valores.valoresGenerales.curvatura,
    borderWidth: 2,
    borderColor: valores.valoresGenerales.borde,
  },
  container5: {
    width: valores.fotosEsquina.anchoFoto,
    height: valores.fotosEsquina.altoFoto,
    marginBottom: 80,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: valores.valoresGenerales.curvatura,
    borderWidth: 2,
    borderColor: valores.valoresGenerales.borde,
  },
  container6: {
    width: valores.fotosEsquina.anchoFoto,
    height: valores.fotosEsquina.altoFoto,
    marginBottom: 80,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: valores.valoresGenerales.curvatura,
    borderWidth: 1,
    borderColor: valores.valoresGenerales.borde,
  },
  footer: {
    width: "100%",
    height: 78,
    backgroundColor: "rgb(80, 80, 80)",
  },
  logoIvan: {
    width: 210,
    position: "absolute",
    bottom: 20,
    left: -15,
    resizeMode: "contain",
  },
  cologo: {
    width: 60,
    resizeMode: "contain",
    position: "absolute",
    right: 20,
    bottom: -7,
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: valores.valoresGenerales.resizeMode,
    borderRadius: 10,
  },
  estiloView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgb(80, 80, 80)",
    padding: 5,
  },
  estiloTexto: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
