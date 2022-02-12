import { View, Image } from "react-native";
import ivanLogo from "../imagenes/ivanpratblanco.png";
import coLogo from "../imagenes/cologo.png";

interface FOOTER {
  estilosPrincipal: {};
  estiloIvanLogo: {};
  estiloCologo: {};
}

const Footer = ({ estilosPrincipal, estiloIvanLogo, estiloCologo }: FOOTER) => {
    return (
  <View style={estilosPrincipal}>
    <Image source={ivanLogo} style={estiloIvanLogo} />
    <Image source={coLogo} style={estiloCologo}></Image>
  </View>
  )
};

export default Footer;
