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
        title="Template 1080x1920"
        price=""
        info={["Instagram Stories format", "and Whatsapp Status"]}
        button={{ title: "Go"}}
        onButtonPress={() => navigation.navigate("PlantillaInsta")}
      />
      <PricingCard
        color={"rgb(20, 50, 100)"}
        title="Tutorial (Currently developing.)"
        price=""
        
        button={{ title: "Go"}}
        onButtonPress={() => {}}
      />
    </>
  );
};

export default Home;
