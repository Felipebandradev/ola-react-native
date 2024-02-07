import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import estilos from "./src/stylesheets/estilos";

export default function App() {
  const vai = () => {
    Alert.alert("Tanaka 🤘", "Fala Parça!!!");
    console.log("Teste!!");
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={estilos.container}>
        <ScrollView>
          <View style={estilos.cabecalho}>
            <Text style={estilos.textoCab}>Topo/Cabecalho</Text>
          </View>
          <View style={estilos.conteudo}>
            <Text style={estilos.textoCont}>Conteúdo...</Text>
            <Image
              style={estilos.imagem}
              source={{
                uri: "https://static.wikia.nocookie.net/liberproeliis/images/2/26/KaiSaBase2.png/revision/latest?cb=20221221131054&path-prefix=pt-br",
              }}
            />

            <Text style={estilos.textoCont}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
            <Text style={estilos.textoCont}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
          </View>
          <View style={estilos.rodape}>
            <Text style={estilos.textoRod}>Rodapé..</Text>
            <Button title="Toca Aqui" onPress={vai} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
