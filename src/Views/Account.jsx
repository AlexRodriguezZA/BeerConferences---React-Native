//Componentes
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Alert,
  BackHandler,
} from "react-native";

//Funciones
import { useNavigation } from "@react-navigation/native";
import { auth } from "../utils/getData";
import React, { useState, useEffect } from "react";

export const Account = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const handleBackButton = () => {
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate("Login");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      Alert.alert("Error al cerrar sesión:", error);
    }
  };
  return (
    <View style={styles.container}>
      {user && (
        <React.Fragment>
          {user.photoURL ? (
            <Image
              style={styles.profileImage}
              source={{ uri: user.photoURL }}
            />
          ) : (
            <Image
              style={styles.profileImage}
              source={require("../assets/Images/Perfil.jpg")}
            />
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.labelText}>{user.email}</Text>
          </View>
        </React.Fragment>
      )}
      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 230,
    height: 230,
    borderRadius: 110,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 30,
  },
  labelText: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    width: "70%",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#fdba74",
    borderRadius: 20,
  },
  buttonText: {
    color: "#172554",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Account;
