import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addImage } from "../../redux/actions";

const Foto = ({ estilos, name, addImage }) => {
  const [hasPermission, setHaspermission] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHaspermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async (e, hola) => {
    e.preventDefault()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      allowsMultipleSelection: false
    });
    if (!result.cancelled) {
      addImage(result.uri, hola);
    }
    if (hasPermission === false) {
      return alert('Permiso denegado.');
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

function mapStateToProps(state) {
  return {
    estado: state.fotos,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Foto);
