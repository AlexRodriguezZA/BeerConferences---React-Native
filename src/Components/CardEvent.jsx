//Components
import { View, Image, Text, StyleSheet, Pressable } from "react-native";

//Funciones y hooks
import { useNavigation } from "@react-navigation/native";
import { getFechas } from "../utils/getFechas";

const CardEvent = ({ conference }) => {
  const { navigate } = useNavigation();

  //Pasamos los datos por parametros con navigate para no hacer otro llamado a la api de firebase
  const handleViewPress = () => {
    navigate("Detail", { conference });
  };

  const { inicio } = getFechas(conference.hora_inicio, conference.hora_fin);
  return (
    <Pressable style={styles.cardContainer} onPress={handleViewPress}>
      <View>
        <Image style={styles.imageCard} source={{ uri: conference.imagen }} />
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.eventName}>{conference.nombre}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.iconTextContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/location.svg")}
            />
            <Text style={styles.detailText}>{conference.ciudad}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/calendar.svg")}
            />
            <Text style={styles.detailText}>{inicio}0 PM</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 12,
    marginHorizontal: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageCard: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  dataContainer: {
    alignItems: "flex-start",
    flex: 1,
    padding: 16,
  },
  eventName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000a23",
  },
  detailsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 7,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
    tintColor: "#000a23",
  },
  detailText: {
    fontSize: 16,
    color: "#777",
  },
});

export default CardEvent;
