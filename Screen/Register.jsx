import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import Form from "../components/form";
import { useNavigation } from '@react-navigation/native';
import ModalComp from "../components/Modal";

export default function RegisterPage({route}) {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/walled.png")}
          style={styles.walledIcon}
          resizeMode="contain"
        />
      </View>

      {/* Form Input */}
      <View style={{ marginHorizontal: 15 }}>
        <Form state="register"></Form>
      </View>

      {/* Register Link */}
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.registerText}>
          Have an account?{" "}
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Login')}>
            Login here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  walledIcon: {
    width: 200,
    height: 200,
    marginBottom: -55,
  },
  loginButton: {
    margin: 15,
    marginTop: 20,
    backgroundColor: "#129C9E",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    marginVertical: 15,
    fontSize: 14,
    color: "black",
  },
  registerLink: {
    color: "#129C9E",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F9FD",
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: "black",
  },
});
