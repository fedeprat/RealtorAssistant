import { ACTIONS } from "./actions";

interface STATE {
  fotos: {
    foto1: string;
    foto2: string;
    foto3: string;
    foto4: string;
    foto5: string;
    foto6: string;
  };
  iconos: {
    icono1: boolean;
    icono2: boolean;
    icono3: boolean;
    icono4: boolean;
    icono5: boolean;
    icono6: boolean;
    descripcion1: string;
    descripcion2: string;
    descripcion3: string;
    descripcion4: string;
    descripcion5: string;
    descripcion6: string;
  };
  titulo: {
    titulo: string;
    fontSize: number;
    position: {
      right: number;
      top: number;
    };
  };
  subtitulo: {
    subtitulo: string;
    fontSize: number;
    position: {
      right: number;
      top: number;
    };
  };
  precio: {
    precio: string
  }
}

interface ACTION {
  type: "";
  payload: {
    name: "icono1" | "icono2" | "icono3" | "icono4" | "icono5" | "icono6";
    data: string;
  };
}

const initialState = {
  fotos: {
    foto1: "",
    foto2: "",
    foto3: "",
    foto4: "",
    foto5: "",
    foto6: "",
  },
  iconos: {
    icono1: false,
    icono2: false,
    icono3: false,
    icono4: false,
    icono5: false,
    icono6: false,
    descripcion1: "",
    descripcion2: "",
    descripcion3: "",
    descripcion4: "",
    descripcion5: "",
    descripcion6: "",
  },
  titulo: {
    titulo: "TITLE",
    fontSize: 35,
    position: {
      right: 135,
      top: -8,
    },
  },
  subtitulo: {
    subtitulo: "SUBTITLE",
    fontSize: 30,
    position: {
      right: 110,
      top: 27,
    },
  },
  precio: {
    precio: 'USD 12.000'
  }
};

export default function reducer(
  state: STATE = initialState,
  { type, payload }: ACTION
) {
  switch (type) {
    case ACTIONS.ADD_IMAGE:
      return {
        ...state,
        fotos: { ...state.fotos, [payload.name]: payload.data },
      };
    case ACTIONS.ADD_ICON:
      return {
        ...state,
        iconos: {
          ...state.iconos,
          [payload.name]: !state.iconos[payload.name],
        },
      };
    case ACTIONS.ADD_TITLE:
      return {
        ...state,
        titulo: { ...state.titulo, titulo: payload },
      };
    case ACTIONS.BIGGER_FONT:
      return {
        ...state,
        titulo: {
          ...state.titulo,
          fontSize: state.titulo.fontSize + 1,
        },
      };
    case ACTIONS.SMALLER_FONT:
      return {
        ...state,
        titulo: {
          ...state.titulo,
          fontSize: state.titulo.fontSize - 1,
        },
      };
    case ACTIONS.DESPLAZAR_DERECHA:
      return {
        ...state,
        titulo: {
          ...state.titulo,
          position: {
            ...state.titulo.position,
            right: state.titulo.position.right - 3,
          },
        },
      };
    case ACTIONS.DESPLAZAR_IZQUIERDA:
      return {
        ...state,
        titulo: {
          ...state.titulo,
          position: {
            ...state.titulo.position,
            right: state.titulo.position.right + 3,
          },
        },
      };

    case ACTIONS.ADD_SUBTITLE:
      return {
        ...state,
        subtitulo: { ...state.subtitulo, subtitulo: payload },
      };
    case ACTIONS.BIGGER_FONT_SUBTITLE:
      return {
        ...state,
        subtitulo: {
          ...state.subtitulo,
          fontSize: state.subtitulo.fontSize + 1,
        },
      };
    case ACTIONS.SMALLER_FONT_SUBTITLE:
      return {
        ...state,
        subtitulo: {
          ...state.subtitulo,
          fontSize: state.subtitulo.fontSize - 1,
        },
      };
    case ACTIONS.DESPLAZAR_DERECHA_SUBTITLE:
      return {
        ...state,
        subtitulo: {
          ...state.subtitulo,
          position: {
            ...state.subtitulo.position,
            right: state.subtitulo.position.right - 3,
          },
        },
      };
    case ACTIONS.DESPLAZAR_IZQUIERDA_SUBTITLE:
      return {
        ...state,
        subtitulo: {
          ...state.subtitulo,
          position: {
            ...state.subtitulo.position,
            right: state.subtitulo.position.right + 3,
          },
        },
      };
    case ACTIONS.ADD_DESCRIPTION:
      return {
        ...state,
        iconos: { ...state.iconos, [payload.name]: [payload.data] },
      };
    case ACTIONS.DESPLAZAR_SUBTITULO_ARRIBA:
      return {
        ...state,
        subtitulo: {
          ...state.subtitulo,
          position: {
            ...state.subtitulo.position,
            top: state.subtitulo.position.top - 1,
          },
        },
      };
    case ACTIONS.DESPLAZAR_SUBTITULO_ABAJO:
      return {
        ...state,
        subtitulo: {
          ...state.subtitulo,
          position: {
            ...state.subtitulo.position,
            top: state.subtitulo.position.top + 1,
          },
        },
      };
    case ACTIONS.DESPLAZAR_TITULO_ARRIBA:
      return {
        ...state,
        titulo: {
          ...state.titulo,
          position: {
            ...state.titulo.position,
            top: state.titulo.position.top - 1,
          },
        },
      };
    case ACTIONS.DESPLAZAR_TITULO_ABAJO:
      return {
        ...state,
        titulo: {
          ...state.titulo,
          position: {
            ...state.titulo.position,
            top: state.titulo.position.top + 1,
          },
        },
      };
    case ACTIONS.CAMBIAR_PRECIO:
      return {
        ...state, precio: {...state.precio, precio: payload}
      }
    default:
      return state;
  }
}
