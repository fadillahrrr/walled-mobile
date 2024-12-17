import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";

export default function TopupPage() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BYOND Pay");
  const [notes, setNotes] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const paymentOptions = ["BYOND Pay", "Bank Transfer", "Other"];

  const formatAmount = (value) => {
    const number = value.replace(/\D/g, ""); // Remove non-digit characters
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Add dots for thousands separator
  };

  const handleAmountChange = (value) => {
    setAmount(formatAmount(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Up Header */}
      <View style={styles.inputContainerWhiteBox}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Top Up</Text>
        </View>
      </View>

      {/* Amount Input */}
      <View style={styles.inputContainerWhiteBox}>
        <Text style={styles.title}>Amount</Text>
        <View style={styles.inputWithLine}>
          <Text style={styles.currency}>IDR</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
      </View>

      {/* Payment Method Dropdown */}
      <View style={styles.inputContainerWhiteBox}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setShowDropdown(true)}
        >
          <Text style={styles.dropdownText}>{paymentMethod}</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        {/* Dropdown Modal */}
        <Modal visible={showDropdown} transparent animationType="fade">
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setShowDropdown(false)}
          >
            <View style={styles.modalContent}>
              <FlatList
                data={paymentOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => {
                      setPaymentMethod(item);
                      setShowDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownOptionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      {/* Notes Input */}
      <View style={styles.inputContainerWhiteBox}>
        <Text style={styles.title}>Notes</Text>
        <View style={styles.inputWithLine}>
          <TextInput
            style={styles.input}
            placeholder=""
            value={notes}
            onChangeText={setNotes}
          />
        </View>
      </View>

      {/* Button */}
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>Top Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    justifyContent: "center",
    height: 40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  inputContainerWhiteBox: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: "lightgray",
  },
  inputWithLine: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 5,
  },
  currency: {
    fontSize: 14,
    color: "#000",
    marginRight: 5,
    position: "relative",
    top: -10, /* Adjusted to push 'IDR' slightly up */
  },
  input: {
    flex: 1,
    fontSize: 25,
    color: "#000",
    marginTop: 5, /* Adjusted to move input text slightly down */
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E0E0E0",
    paddingBottom: 5,
  },
  dropdownText: {
    fontSize: 16,
    color: "#000",
  },
  arrow: {
    fontSize: 16,
    color: "#000",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    width: "80%",
    maxHeight: 200,
  },
  dropdownOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  dropdownOptionText: {
    fontSize: 16,
    color: "#000",
  },
  topUpButton: {
    backgroundColor: "#1CA1A1",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 260,
    marginHorizontal:15,
  },
  topUpText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
