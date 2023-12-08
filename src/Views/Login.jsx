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
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../utils/getData";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { navigate } = useNavigation();

  const HandleSingIn = () => {
    if ([Email, Password].includes("")) {
      return Alert.alert("Ingrese todos los datos");
    }
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        navigate("Home");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const handleViewPress = () => {
    navigate("SingUp");
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
        <Text style={styles.tittle2}>Iniciar Sesión</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          placeholderTextColor="gray"
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
          placeholderTextColor="gray"
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <Pressable style={styles.button} onPress={HandleSingIn}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleViewPress}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </Pressable>

      <Text
        onPress={() => navigate("ForgotPasswordScreen")}
        style={styles.contraseñaReset}
      >
        ¿Olvidaste tu contraseña?
      </Text>
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
  contraseñaReset: {
    marginBottom: 10,
    color: "gray",
  },
});

export default Login;
