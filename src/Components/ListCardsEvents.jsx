import { View, StyleSheet,ScrollView } from "react-native";
import CardEvent from "./CardEvent";
import LoadingIndicator from "./Loading";

const ListCardsEvents = ({conferences}) => {

  return (
    <ScrollView style={styles.scrollView}>
      {
        conferences.length === 0 && <LoadingIndicator/>
      }
      <View style={styles.container}>
        {conferences.map((conference) => (
          <CardEvent key={conference.id} conference={conference} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
    flex: 1,
  },
  container: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
export default ListCardsEvents;
