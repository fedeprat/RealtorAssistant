import React, { SetStateAction, useEffect, useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { addImage } from "../../redux/actions";
import { styles } from "./home.styles";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";

interface IMAGEN {
  estado: string;
  estilo: {};
  name: string;
  addImage: (name: string, data: string) => {}
}

interface GALLERYSTATUS {
  galleryStatus: SetStateAction<null>;
}

const Imagen = ({ estado, estilo, name, addImage }: IMAGEN) => {
  const [hasPermission, setHaspermission] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus: GALLERYSTATUS =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHaspermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async (e: { preventDefault: () => void }, hola: string) => {
    e.preventDefault();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
     aspect: [16, 9],
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
