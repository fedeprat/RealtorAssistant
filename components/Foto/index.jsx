import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addImage } from "../../redux/actions";
import { store } from "../../redux/store";

const Foto = ({ estilos, name, addImage, estado }) => {
  const [hasPermission, setHaspermission] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHaspermission(galleryStatus.status === "granted");
    })();
  }, []);

  store.subscribe(() => {
    console.log(store.getState());
  });

  const pickImage = async (e, hola) => {
    e.preventDefault()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 10],
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
        name={name}
        onPress={(e) => {
          console.log(name)
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
