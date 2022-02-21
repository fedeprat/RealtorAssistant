import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

export const ACTIONS = {
  ADD_IMAGE: "addImage",
  ADD_ICON: "addIcon",
  ADD_TITLE: "addTitle",
  ADD_SUBTITLE: "addSubTitle",
  BIGGER_FONT: "biggerFont",
  SMALLER_FONT: "smallerFont",
  DESPLAZAR_IZQUIERDA: "desplazarIzq",
  DESPLAZAR_DERECHA: "desplazarDer",
  BIGGER_FONT_SUBTITLE: "biggerFontSubtitulo",
  SMALLER_FONT_SUBTITLE: "smallerFontSubtitulo",
  DESPLAZAR_IZQUIERDA_SUBTITLE: "desplazarIzqSubtitle",
  DESPLAZAR_DERECHA_SUBTITLE: "desplazarDerechaSubtitle",
  ADD_DESCRIPTION: "addDescription",
  DESPLAZAR_SUBTITULO_ARRIBA: "desplazarSubtituloArriba",
  DESPLAZAR_SUBTITULO_ABAJO: "desplazarSubtituloAbajo",
  DESPLAZAR_TITULO_ARRIBA: "desplazartituloArriba",
  DESPLAZAR_TITULO_ABAJO: "desplazartituloAbajo",
  CAMBIAR_PRECIO: 'cambiarPrecio',
};

interface ADDIMAGE {
  type: string;
  payload: {};
}
export function addImage(data: {}, name: string): ADDIMAGE {
  return {
    type: ACTIONS.ADD_IMAGE,
    payload: { data: data, name: name },
  };
}

export function addIcon(name: string) {
  return {
    type: ACTIONS.ADD_ICON,
    payload: { name },
  };
}

export function addTitle(data: string) {
  return {
    type: ACTIONS.ADD_TITLE,
    payload: data,
  };
}

export function biggerFont() {
  return {
    type: ACTIONS.BIGGER_FONT,
  };
}

export function smallerFont() {
  return {
    type: ACTIONS.SMALLER_FONT,
  };
}

export function desplazar(data: string) {
  return {
    type: data,
  };
}

export function addSubTitle(data: string) {
  return {
    type: ACTIONS.ADD_SUBTITLE,
    payload: data,
  };
}

export function biggerFontSubtitulo() {
  return {
    type: ACTIONS.BIGGER_FONT_SUBTITLE,
  };
}

export function smallerFontSubtitle() {
  return {
    type: ACTIONS.SMALLER_FONT_SUBTITLE,
  };
}

export function desplazarSubtitle(data: string) {
  return {
    type: data,
  };
}

export function descripcion(data: string, name: string) {
  return {
    type: ACTIONS.ADD_DESCRIPTION,
    payload: { data, name },
  };
}

export function desplazarTituloVertical(data: string) {
  return {
    type: data,
  };
}
export function desplazarSubTituloVertical(data: string) {
  return {
    type: data,
  };
}
export function cambiarPrecio (data: string) {
  return {
    type: ACTIONS.CAMBIAR_PRECIO,
    payload: data
  }
}
