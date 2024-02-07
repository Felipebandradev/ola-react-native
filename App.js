import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#ebe7f8",
    flex: 1,
    // justifyContent: "center"
  },

  cabecalho: {
    backgroundColor: "#aba2e3",
    padding: 10,
    flex: 0.6,

  },

  conteudo: {
    backgroundColor: "#c1b9ea",
    flex: 7,
  },

  rodape: {
    backgroundColor: "#d6d0f1",
    flex: 1,
  },
});

export default function App() {
  const vai = () => {
    Alert.alert("Tanaka 🤘", "Fala Parça!!!");
    console.log("Teste!!");
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Topo/Cabecalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text>Conteúdo...</Text>
        </View>
        <View style={estilos.rodape}>
          <Text>Rodapé..</Text>
          <Button title="Toca Aqui" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
