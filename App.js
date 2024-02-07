import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Tanaka", "Fala Parça!!!");
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View>
          <Text>Topo/Cabecalho</Text>
        </View>
        <View>
          <Text>Conteúdo...</Text>
        </View>
        <View>
          <Text>Rodapé..</Text>
          <Button title="Toca Aqui" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
