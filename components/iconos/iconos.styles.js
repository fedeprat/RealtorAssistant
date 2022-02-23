import { ImageBackground, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('screen')

export const estilosTexto = StyleSheet.create({
  texto: {
    fontFamily: 'normal',
    fontWeight: 'bold',
    color: 'rgb(110, 110, 110)'
  },
});

export const estilosIcono = StyleSheet.create({
    iconos: {
        resizeMode: 'contain',
        height: height * .055
    },
});

export const estiloContainer = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: 'center',
        flexWrap: "nowrap",
        
        
    }
})