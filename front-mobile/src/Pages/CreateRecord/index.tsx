import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Header from "../../components/Header";
import PlatformCard from './PlatformCard';
const CreateRecord = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <TextInput
            style={styles.inputText} 
            placeholder="Nome"
            placeholderTextColor="#9E9E9E" />
        <TextInput
            keyboardType="numeric"
            maxLength={2}
            style={styles.inputText}
            placeholder="Idade"
            placeholderTextColor="#9E9E9E" />
      </View>
      <View style={styles.platformContainer}>
        <PlatformCard platform="PC" icon="laptop"
        onChange={() => null} />
        <PlatformCard platform="XBOX" icon="xbox"
        onChange={() => null} />
        <PlatformCard platform="PLAYSTATION" icon="playstation"
        onChange={() => null} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingBottom: 50,
  },
  inputText: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#ED7947",
    fontFamily: "Play_700Bold",
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 21,
  },
  platformContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    marginTop: "15%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00D4FF",
    flexDirection: "row",
    borderRadius: 10,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Play_700Bold",
    fontWeight: "bold",
    fontSize: 18,
    color: "#0B1F34",
  },
});

export default CreateRecord;
