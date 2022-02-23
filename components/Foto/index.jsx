import { View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addImage } from "../../redux/actions";
import { Dimensions } from "react-native";

const Foto = ({ estilos, name, addImage }) => {
  const { width, height } = Dimensions.get("screen");
  const [hasPermission, setHaspermission] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHaspermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async (e, hola) => {
    e.preventDefault();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect:
        (name === "foto3") | (name === "foto4")
          ? [width * 0.35, height * 0.12]
          : [width * 0.49, width * 0.5 * 0.77],
      allowsMultipleSelection: false,
    });
    if (!result.cancelled) {
      addImage(result.uri, hola);
    }
    if (hasPermission === false) {
      return alert("Permiso denegado.");
    }
    return;
  };
  return (
    <View style={estilos}>
      <Button
        title="Subir Foto"
        onPress={(e) => {
          pickImage(e, name);
        }}
      />
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addImage: (data, name) => dispatch(addImage(data, name)),
  };
}

export default connect(null, mapDispatchToProps)(Foto);
