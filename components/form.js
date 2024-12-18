import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useAuth } from "../Context/AuthContext";
import { loginFunc, register } from "../Api/restApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalComp from "../components/Modal";

export default function Form({ state }) {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  const validateEmail = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      setErrorEmail("Email tidak sesuai");
    } else {
      setErrorEmail("");
    }
  };

  const validatePassword = () => {
    const validPassword = password.length > 7 ? true : false;
    if (!validPassword) {
      setErrorPassword("Password kurang dari 7");
    } else {
      setErrorPassword("");
    }
  };

  const signIn = async () => {
    console.log(email, password);
    try {
      const token = await loginFunc(email, password);
      // console.log("token", token);
      AsyncStorage.setItem(token.token);
      navigation.navigate("Main");
      return;
    } catch (error) {
      console.log("error", error);
      return;
    }
  };

  const regist = async () => {
    console.log(name, email, password, avatar);
    try {
      const result = await register(email, password, name, avatar);
      alert("Success Register " + result.data.full_name);
      return;
    } catch (error) {
      console.log("error", error);
      return;
    }
  };

  return (
    <SafeAreaView>
      {state === "register" && (
        <TextInput
          style={styles.input}
          placeholder="Fullname"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {errorEmail && (
        <Text style={{ marginBottom: 10, color: "red" }}>{errorEmail}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      {errorPassword && (
        <Text style={{ marginBottom: 10, color: "red" }}>{errorPassword}</Text>
      )}

      {state === "register" && (
        <TextInput
          style={styles.input}
          placeholder="Avatar Url"
          value={avatar}
          onChangeText={(text) => setAvatar(text)}
        />
      )}

      {state === "register" && (
        <View flex="row">
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setSelection(!isSelected)}
            >
              <View
                style={[styles.checkbox, isSelected && styles.checkedCheckbox]}
              />
              <Text style={styles.registerText}>
                I have read and agree to the{" "}
                <Text
                  style={styles.registerLink}
                  onPress={() => setModalVisible(true)}
                >
                  Terms and Conditions
                  <Text style={{ color: "red" }}>*{""}</Text>
                </Text>
              </Text>
            </TouchableOpacity>
            <ModalComp modalVisible={modalVisible} onClose={handleCloseModal} />
          </View>
        </View>
      )}

      {state === "Login" ? (
        <TouchableOpacity style={styles.loginButton} onPress={signIn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.registerButton} onPress={regist}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    marginTop: 95,
    backgroundColor: "#129C9E",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: -25,
    alignItems: "center",
  },
  registerButton: {
    marginTop: 30,
    backgroundColor: "#129C9E",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: -25,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    marginVertical: 10,
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
  input: {
    backgroundColor: "#F8F9FD",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 8,
    fontSize: 16,
    color: "black",
  },
});
