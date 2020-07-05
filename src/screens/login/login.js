import React, { useCallback, useState } from "react";
import useLogin from "./useLogin";
import { Alert, Text, View, TouchableOpacity, TextInput } from "react-native";
function login(props) {
  const {
    err,
    setErr,
    user,
    updateUser,
    goToSignup,
    loginHandle,
    goToForgot
  } = useLogin(props);
  const [show, setShow] = useState(true);
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <Text style={{ color: "red", fontSize: 30 }}>LOGIN</Text>
      <Text style={{ color: "red" }}>{err}</Text>
      <TextInput
        style={{ backgroundColor: "white", color: "red" }}
        value={user.email}
        placeholderTextColor="red"
        placeholder="Email:"
        onChangeText={text => updateUser("email", text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{ backgroundColor: "white", color: "red" }}
        value={user.password}
        placeholderTextColor="red"
        placeholder="Password"
        onChangeText={text => updateUser("password", text)}
        autoCapitalize="none"
        secureTextEntry={show}
      />
      <TouchableOpacity onPress={toggle}>
        <Text style={{ color: "red" }}>Show/hide password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={loginHandle}>
        <Text style={{ color: "red" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToForgot}>
        <Text style={{ color: "red" }}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSignup}>
        <Text style={{ color: "red" }}>Sign up</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40, color: "red" }}>FoodGate</Text>
    </View>
  );
}
export default login;
