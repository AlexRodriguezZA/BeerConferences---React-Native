//Componentes
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import MapScreen from "../Components/Map";

//Funciones y hooks
import { useRoute } from "@react-navigation/native";
import { getFechas } from "../utils/getFechas";

const Detail = () => {
  const route = useRoute();
  const { conference } = route.params;

  const { fecha, inicio, fin } = getFechas(
    conference.hora_inicio,
    conference.hora_fin
  );

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: conference.imagen }} />
      <Text style={styles.title}>{conference.nombre}</Text>
      <Text style={styles.organizer}>Organizador: {conference.disertante}</Text>
      <Text style={styles.description}>{conference.descripcion}</Text>
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeIcon}>
          <Text style={styles.date}> 📅 {fecha}</Text>
        </View>
        <Text style={styles.time}>🕛 De: {`${inicio}0 a ${fin}0`}</Text>
      </View>
      <Text style={styles.location}>📍 {conference.ciudad}</Text>

      <View style={styles.locationContainer}></View>
      <MapScreen
        lat={conference.ubicacion._lat}
        long={conference.ubicacion._long}
        name={conference.nombre}
        des={conference.descripcion}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 2,
  },
  organizer: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "gray",
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dateTimeIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  date: {
    marginLeft: 0,
    fontSize: 16,
  },
  time: {
    fontSize: 16,
    color: "#000a23",
  },
  locationContainer: {
    flexDirection: "row",
  },
  location: {
    marginLeft: 0,
    fontSize: 16,
  },
});

export default Detail;
