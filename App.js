import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
import WelcomeNavigation from "./navigation/WelcomeNavigation";
import { useEffect, useState } from "react";

//import WelcomeScreen from "./screens/WelcomeScreen";
//import Login from "./screens/Login";
import AuthContext from "./context/AuthContext";

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <TabNavigator /> : <WelcomeNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
