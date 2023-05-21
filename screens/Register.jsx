import React, { useState } from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";
import Input from "./../components/Input";
import { Image } from "react-native";
import AppButton from "./../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "./../api/api";
import ErrorText from "../components/ErrorText";
ErrorText;
const Register = ({ navigation }) => {
  const [error, setError] = useState("");
  const validationSchema = Yup.object({
    firstName: Yup.string().max(15).required(),
    lastName: Yup.string().max(15).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(5).max(255).required(),
  });
  const handleSubmit = async (user) => {
    const result = await api.post("user", user);
    if (!result.ok)
      return ToastAndroid.show(
        "User Already Registered or Some error has occured",
        ToastAndroid.SHORT
      );
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo-red.png")}
        />
        <Text style={styles.text}>Register</Text>
      </View>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(user) => handleSubmit(user)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <Input
              onChangeText={handleChange("firstName")}
              value={values.firstName}
              icon={"account"}
              placeholder="First Name"
            />
            {errors.firstName && <ErrorText error={errors.firstName} />}
            <Input
              onChangeText={handleChange("lastName")}
              value={values.lastName}
              icon={"account"}
              placeholder="Last Name"
            />
            {errors.lastName && <ErrorText error={errors.lastName} />}
            <Input
              onChangeText={handleChange("email")}
              value={values.email}
              icon={"email"}
              kyeboardType="email-address"
              placeholder="Email"
            />
            {errors.email && <ErrorText error={errors.email} />}
            <Input
              onChangeText={handleChange("password")}
              secureTextEntry
              value={values.password}
              icon={"lock"}
              placeholder="Password"
            />
            {errors.password && <ErrorText error={errors.password} />}
            <AppButton onPress={handleSubmit} title={"Register"} />
            {error && <ErrorText error={error} />}
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf1f3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    fontSize: 25,
  },
});
export default Register;
