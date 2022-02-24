import { Text } from "react-native";
import { Button, Divider, PricingCard } from "react-native-elements";

interface HOME {
  navigation: { navigate: (prop: string) => {} };
}

const Home = ({ navigation }: HOME) => {
  return (
    <>
      <PricingCard
        color={"rgb(20, 50, 100)"}
        title="Plantilla 1080x1920"
        price=""
        info={["formato de historias de instagram", "y estados de whatsapp"]}
        button={{ title: "IR"}}
        onButtonPress={() => navigation.navigate("PlantillaInsta")}
      />
      <PricingCard
        color={"rgb(20, 50, 100)"}
        title="Guia de uso"
        price=""
        
        button={{ title: "IR"}}
        onButtonPress={() => {}}
      />
    </>
  );
};

export default Home;
