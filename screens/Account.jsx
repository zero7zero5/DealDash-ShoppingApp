import React, { useContext } from "react";
import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import IconContainer from "../components/IconContainer";
import AuthContext from "../context/AuthContext";
const Account = ({ navigation }) => {
  const context = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <IconContainer
          style={{ backgroundColor: "#E96E6E" }}
          name={"account"}
          size={40}
          width={50}
          color="white"
        />
        <View style={{ paddingHorizontal: 25 }}>
          <Text
            style={styles.name}
          >{`${context.user.firstName} ${context.user.lastName}`}</Text>
          <Text style={styles.email}>{context.user.email}</Text>
        </View>
      </View>

      <View style={{ marginVertical: 40 }}>
        <View style={[styles.logout, { marginVertical: 5 }]}>
          <IconContainer
            style={{ backgroundColor: "#00b300" }}
            name={"format-list-bulleted"}
            size={25}
            width={50}
            color="white"
          />
          <Text style={{ paddingHorizontal: 25, fontSize: 20 }}>
            My Listings
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Cart")}>
          <View style={[styles.logout, { marginVertical: 5 }]}>
            <IconContainer
              style={{ backgroundColor: "#00b8e6" }}
              name={"cart"}
              size={25}
              width={50}
              color="white"
            />
            <Text style={{ paddingHorizontal: 25, fontSize: 20 }}>Cart</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("MyOrders")}>
          <View style={[styles.logout, { marginVertical: 5 }]}>
            <IconContainer
              style={{ backgroundColor: "#8800cc" }}
              name={"cube-outline"}
              size={25}
              width={50}
              color="white"
            />
            <Text style={{ paddingHorizontal: 25, fontSize: 20 }}>
              My Orders
            </Text>
          </View>
        </Pressable>
      </View>
      <Pressable onPress={() => context.setUser("")}>
        <View style={styles.logout}>
          <IconContainer
            style={{ backgroundColor: "#ffe66d" }}
            name={"logout"}
            size={30}
            width={50}
            color="white"
          />
          <Text style={{ paddingHorizontal: 25, fontSize: 20 }}>Logout</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fdf1f3",
  },
  account: {
    padding: 20,
    width: "100%",
    height: 90,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 3,
  },
  email: {
    fontSize: 16,
    color: "grey",
  },
  logout: {
    padding: 20,
    width: "100%",
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Account;
