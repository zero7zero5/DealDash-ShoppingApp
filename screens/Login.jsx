import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";
import Input from "./../components/Input";
import { Image } from "react-native";
import AppButton from "./../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../api/api";
import AuthContext from "./../context/AuthContext";
import ErrorText from "../components/ErrorText";
import jwt_decode from "jwt-decode";
const Login = () => {
  const authContext = useContext(AuthContext);

  const [error, setError] = useState();
  const handleSubmit = async (user) => {
    const result = await api.post("auth", user);
    if (!result.ok) {
      return ToastAndroid.show(
        "Invalid username or password or Some error has occured",
        ToastAndroid.SHORT
      );
    }
    authContext.setUser(jwt_decode(result.data));
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/logo-red.png")}
        />
        <Text style={styles.text}>Login</Text>
      </View>
      <Formik
        onSubmit={(value) => handleSubmit(value)}
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, values }) => (
          <>
            <Input
              onChangeText={handleChange("email")}
              icon={"email"}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && <ErrorText error={errors.email} />}
            <Input
              onChangeText={handleChange("password")}
              icon={"lock"}
              placeholder="Password"
              value={values.password}
              secureTextEntry
            />
            {errors.password && <ErrorText error={errors.password} />}
            <AppButton onPress={handleSubmit} title={"login"} />
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
export default Login;
