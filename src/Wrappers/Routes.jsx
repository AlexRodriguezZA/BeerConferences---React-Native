import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components Views
import MapMainConferences from "../Views/MapMainConferences";
import Login from "../Views/Login";
import { SignUp } from "../Views/SingUp";
import { Home } from "../Views/Home";
import Detail from "../Views/Detail";
import { Account } from "../Views/Account";
import ForgotPasswordScreen from "../Views/ForgotPasswordScreen";

const Stack = createStackNavigator();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "#000a23",
  },
  headerTitleStyle: {
    color: "#fff",
  },
  headerTintColor: "#fff",
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="SingUp"
          component={SignUp}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="MapConferences"
          component={MapMainConferences}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
