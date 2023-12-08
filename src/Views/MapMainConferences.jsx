import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import { getData } from "../utils/getData";

const MapMainConferences = () => {
  const [Conferences, setConferences] = useState([]);
  const GetConfereces = async () => {
    const data = await getData();
    setConferences(data);
  };
  useEffect(() => {
    GetConfereces();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -34.0,
          longitude: -64.0,
          latitudeDelta: 15,
          longitudeDelta: 20,
        }}
      >
        {Conferences.map((conference, index) => (
          <Marker
            key={index}
            pinColor="#fdba74"
            coordinate={{
              latitude: conference.ubicacion.latitude,
              longitude: conference.ubicacion.longitude,
            }}
            title={`🍻 ${conference.nombre}`}
            description={`📍${conference.ciudad} - 🙆 ${conference.disertante}`}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapMainConferences;
