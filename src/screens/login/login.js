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
        backgroundColor: "navy"
      }}
    >
      <Text style={{ color: "yellow", fontSize: 30 }}>LOGIN</Text>
      <Text style={{ color: "yellow" }}>{err}</Text>
      <TextInput
        style={{ backgroundColor: "navy", color: "yellow" }}
        value={user.email}
        placeholderTextColor="yellow"
        placeholder="Email:"
        onChangeText={text => updateUser("email", text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{ backgroundColor: "navy", color: "yellow" }}
        value={user.password}
        placeholderTextColor="yellow"
        placeholder="Password"
        onChangeText={text => updateUser("password", text)}
        autoCapitalize="none"
        secureTextEntry={show}
      />
      <TouchableOpacity onPress={toggle}>
        <Text style={{ color: "yellow" }}>Show/hide password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={loginHandle}>
        <Text style={{ color: "yellow" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToForgot}>
        <Text style={{ color: "yellow" }}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSignup}>
        <Text style={{ color: "yellow" }}>Sign up</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40, color: "yellow" }}>MIDNIGHT</Text>
    </View>
  );
}
export default login;
