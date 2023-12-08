//Componentes
import { View, StyleSheet, Text, Pressable } from "react-native";
import Header from "../Components/Header";
import ListCardsEvents from "../Components/ListCardsEvents";

//Funciones
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const { navigate } = useNavigation();
  const [Conferences, setConferences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const GetConfereces = async () => {
    const data = await getData();
    setConferences(data);
  };
  useEffect(() => {
    GetConfereces();
  }, []);

  const filteredConferences = Conferences.filter((conference) =>
    conference.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const conferenceProps =
    filteredConferences.length !== 0 ? filteredConferences : Conferences;

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch} />

      <View style={styles.ButtonMapContainer}>
        <Pressable
          style={styles.ButtonMap}
          onPress={() => navigate("MapConferences")}
        >
          <Text style={styles.TextOrder}>📍 Ver en el Mapa</Text>
        </Pressable>
      </View>

      <ListCardsEvents conferences={conferenceProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  ButtonMapContainer: {
    width: "100%",
    alignItems: "center",
  },
  TextOrder: {
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 16,
  },
});
