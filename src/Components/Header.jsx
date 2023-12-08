//Componentes
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
//Funciones y hooks
import { useNavigation } from "@react-navigation/native";

const Header = ({ onSearch }) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={() => navigate("Account")}
      >
        <Text style={styles.textAccount}>Mi cuenta</Text>
      </Pressable>
      <Text style={styles.title}>
        Beers <Text style={styles.subtitle}>Conferences</Text>
      </Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageSearch}
          source={require("../assets/icons/search.svg")}
        />
        <TextInput
          onChangeText={(text) => {
            onSearch(text);
          }}
          style={styles.searchInput}
          placeholder="Buscar evento..."
          placeholderTextColor="#eeee"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: "#000a23",
    alignItems: "center",
    paddingTop: 25,
    // borderBottomEndRadius: 20,
    // borderBottomStartRadius: 20,
  },
  imageContainer: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textAccount: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#ffb142",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    backgroundColor: "#001a57",
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 16,
    
  },
  imageSearch: {
    width: 20,
    height: 20,
    tintColor: "#eee  ",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#ffff",
  },
});

export default Header;
