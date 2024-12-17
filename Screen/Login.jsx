import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    Image,
    Button,
  } from "react-native";
  import React, { useState } from "react";
  import Form from "../components/form";
  import { useNavigation } from '@react-navigation/native';
  export default function LoginPage({route}) {
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
          <Form state="Login"></Form>
        </View>
  
        {/* Register Link */}
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.registerText}>
            Don’t have account?{" "}
            <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
              Register here
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
      marginBottom: 30,
      alignItems: "center",
    },
    walledIcon: {
      width: 200,
      height: 200,
      marginBottom: 30,
    },
    // loginButton: {
    //   margin: 15,
    //   marginTop: 80,
    //   backgroundColor: "#129C9E",
    //   borderRadius: 8,
    //   paddingVertical: 12,
    //   marginVertical: 10,
    //   alignItems: "center",
    // },
    // loginText: {
    //   color: "white",
    //   fontWeight: "bold",
    //   fontSize: 16,
    // },
    registerText: {
      marginTop: 10,
      fontSize: 14,
      color: "black",
    },
    registerLink: {
      color: "#129C9E",
    },
  });
  