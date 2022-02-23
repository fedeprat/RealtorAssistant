import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { addImage } from "../../redux/actions";
import { styles } from "./home.styles";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import { Dimensions } from "react-native";

const Imagen = ({ estado, estilo, name, addImage }) => {
  const [hasPermission, setHaspermission] = useState(null);
  const {height, width} = Dimensions.get('screen')

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
    <TouchableOpacity
      style={estilo}
      onLongPress={(e) => {
        pickImage(e, name);
      }}
    >
      <Image source={{ uri: estado }} style={styles.images} />
    </TouchableOpacity>
  );
};



export default connect(null, {addImage})(Imagen);
