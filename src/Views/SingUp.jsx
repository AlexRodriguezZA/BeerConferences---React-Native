// Componentes
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from "react-native";

// Funciones
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/getData";
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { navigate } = useNavigation();

  const handleCreateAccount = () => {
    if ([email, password, confirmPassword].includes("")) {
      return Alert.alert("Ingrese todos los datos");
    }
    if (password !== confirmPassword) {
      return Alert.alert("¡Las dos contraseñas ingresadas deben ser iguales!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Cuenta creada!", [
          {
            text: "OK",
            onPress: () => navigate("Login"),
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBeerContainer}>
        <Image
          style={styles.imageBeer}
          source={require("../assets/Images/beers.png")}
        />
      </View>
      <Text style={styles.title}>
        Beers <Text style={styles.titleBeer}>Conferences</Text>
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.tittle2}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="gray"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="gray"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry
          placeholderTextColor="gray"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <Pressable style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBeerContainer: {
    padding: 2,
    width: 400,
    height: 300,
  },
  imageBeer: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#000a23",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 20,
  },
  title: {
    color: "#ffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  titleBeer: {
    color: "#fdba74",
  },
  tittle2: {
    color: "#ffff",
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 16,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    color: "#ffff",

    borderRightWidth: 1,
    height: 50,
    width: "100%",
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  button: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#fdba74",
    borderRadius: 20,
  },
  buttonText: {
    color: "#172554",
    fontSize: 16,
    fontWeight: "bold",
  },
});
