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
  };
  titulo: string;
}

interface ACTION {
  type: "";
  payload: {
    data: {},
    name: string
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
  },
  titulo: "TITULO",
  
};

export default function reducer(
  state: STATE = initialState,
  { type, payload }: ACTION
) {
  switch (type) {
    case ACTIONS.ADD_IMAGE:
      return {
        ...state, fotos: {...state.fotos, [payload.name]: payload.data}
      }
    case ACTIONS.ADD_ICON:
      return {
        ...state, iconos: {...state.iconos, [payload.name]: ![payload.name]}
      }
    case ACTIONS.ADD_TITLE:
      return {
        ...state, titulo: payload
      }
    default:
      return state;
  }
}
