import { StyleSheet } from "react-native";

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
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  
    rodape: {
      backgroundColor: "#d6d0f1",
      flex: 1,
    },
  
    imagem: {
      width: 150,
      height: 150,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
      borderRadius: 15,
    },
  
    textoCab: {
      fontSize: 30,
      textAlign: "center",
      color: "#fff",
    },
  
    textoCont: {
      fontSize: 15,
      margin: 10,
      padding: 5,
      color: "#2c2943",
    },
  
    textoRod: {
      fontSize: 20,
      padding: 10,
    },
  });

export default estilos