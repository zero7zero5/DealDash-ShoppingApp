import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import IconContainer from "../components/IconContainer";
import Input from "../components/Input";
import Card from "../components/Card";
import api from "../api/api";
import { FlatList } from "react-native-gesture-handler";
import AuthContext from "../context/AuthContext";
import BadgeList from "../components/BadgeList";
import { useNavigation } from "@react-navigation/native";
const category = [
  { genre: "All", id: 5 },
  { genre: "electronics", id: 1 },
  { genre: "women's clothing", id: 2 },
  { genre: "jwellery", id: 3 },
  { genre: "men's clothing", id: 4 },
];
const Home = () => {
  const user = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentCategory, setCategory] = useState("All");
  const navigation = useNavigation();
  async function getProucts() {
    const res = await api.get("/product");
    setData(res.data);
    setNewData(res.data);
  }
  useEffect(() => {
    getProucts();
  }, []);
  useEffect(() => {
    if (currentCategory === "All") setNewData(data);
    else {
      const filtered = data.filter(
        (i) => i.type.toLowerCase() === currentCategory.toLocaleLowerCase()
      );
      setNewData(filtered);
    }
  }, [currentCategory]);

  useEffect(() => {
    const searched = data.filter((i) =>
      i.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setNewData(searched);
  }, [search]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconContainer size={20} name={"menu"} />
        <IconContainer
          size={20}
          user={user.user.firstName.charAt(0)}
          onPress={() => navigation.navigate("Account")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Match Your Style</Text>
      </View>
      <Input
        onChangeText={(i) => setSearch(i)}
        icon={"magnify"}
        placeholder="Search"
      />
      <BadgeList
        currentCategory={currentCategory}
        onPress={(i) => setCategory(i)}
        genres={category}
      />
      <View>
        <FlatList
          data={newData}
          numColumns={2}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card
              onPress={() => navigation.navigate("ProductDetails", item)}
              image={item.imageURL}
              title={item.name}
              subtitle={item.cost}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 290,
    backgroundColor: "#fdf1f3",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
    fontWeight: "400",
  },
  textContainer: {
    marginVertical: 20,
  },
});
export default Home;
