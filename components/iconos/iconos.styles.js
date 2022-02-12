import { ImageBackground, StyleSheet } from "react-native";

export const estilosTexto = StyleSheet.create({
  superficieInterior: {
    position: 'absolute',
    bottom: 4,
    left: 17,
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
  superficieTotal: {
    position: 'absolute',
    bottom: 4,
    left: 17,
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
  bañera: {
    position: 'absolute',
    bottom: 4,
    left: 17,
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
  inodoro: {
    position: 'absolute',
    bottom: 4,
    left: 17,
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
  habitacion: {
    position: 'absolute',
    bottom: 4,
    left: 17,
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
  garage: {
    position: 'absolute',
    bottom: 4,
    left: 21,
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
});

export const estilosIcono = StyleSheet.create({
    superficieInterior: {
        width: 40,
        resizeMode: 'contain',
        position: 'absolute',
       top: -2

    },
    superficieTotal: {
        width: 40,
        resizeMode: 'contain',
        position: "absolute",
        top: -8
    },
    inodoro: {
        width: 40,
        resizeMode: 'contain',
        top: 8,
        height: 45
    },
    dormitorio: {
        width: 40,
        resizeMode: 'contain',
        position: 'absolute',
        top: -3
    },
    garage: {
        width: 50,
        resizeMode: 'contain',
        position: 'absolute',
        top: -5,
    },
    bañera: {
        width: 40,
        resizeMode: 'contain',
        position: 'absolute',
        top: -5
    }
});

export const estiloContainer = StyleSheet.create({
    superficieInterior: {
        position: "relative",
        width: 40,
        height: 72
        
    },
    superficieTotal: {
        position: "relative",
        width: 40,
        height: 72
        
    },
    inodoro: {
        position: "relative",
        width: 40,
        height: 72
        
    },
    dormitorio: {
        position: "relative",
        width: 40,
        height: 72
        
    },
    garage: {
        position: "relative",
        width: 40,
        height: 72
        
    },
    bañera: {
        position: "relative",
        width: 40,
        height: 72
        
    }
})