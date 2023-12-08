//Componentes
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from "react-native";

//Funciones
import React, { useState } from "react";
import { auth } from "../utils/getData";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [Email, setEmail] = useState("");
  const { navigate } = useNavigation();

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, Email);
      Alert.alert(
        "Correo Enviado",
        "Se ha enviado un correo electrónico para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada.",
        [
          {
            text: "OK",
            onPress: () => navigate("Login"),
          },
        ]
      );
    } catch (error) {
      console.error(
        "Error al enviar el correo de recuperación:",
        error.message
      );
      Alert.alert(
        "Error",
        "No se pudo enviar el correo de recuperación. Verifica la dirección de correo electrónico."
      );
    }
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
        <Text style={styles.tittle2}>Recuperar contraseña</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          placeholderTextColor="gray"
          style={styles.input}
          placeholder="Email"
        />
      </View>

      <Pressable style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Enviar</Text>
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
    color: "#f59e0b",
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

export default Login;
