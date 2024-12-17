import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function TransferPage() {
  const [amount, setAmount] = useState("100.000");
  const [notes, setNotes] = useState("");

  const formatAmount = (value) => {
    const number = value.replace(/\D/g, ""); // Remove non-digit characters
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Add dots for thousands separator
  };

  const handleAmountChange = (value) => {
    setAmount(formatAmount(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.whiteBox}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Transfer</Text>
      </View>
      </View>

      {/* To Section */}
      <View style={styles.toContainer}>
        <Text style={styles.toLabel}>To: 9000008940208</Text>
      </View>

      {/* Amount Input */}
      <View style={styles.whiteBox}>
        <Text style={styles.label}>Amount</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.currency}>IDR</Text>
          <TextInput
            style={styles.amountInput}
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
        <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance </Text>
        <Text style={styles.balanceAmount}>IDR 10.000.000</Text>
      </View>

      </View>

      {/* Notes */}
      <View style={styles.whiteBox}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.notesInput}
          placeholder=""
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      {/* Transfer Button */}
      <TouchableOpacity style={styles.transferButton}>
        <Text style={styles.transferButtonText}>Transfer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  toContainer: {
    backgroundColor: "#1CA1A1",
    padding: 15,
    marginBottom: 20,
    marginTop: -20,
  },
  toLabel: {
    fontSize: 14,
    color: "#FFF",
  },
  toNumber: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 5,
  },
  whiteBox: {
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: "#B0B0B0",
    marginBottom: 10,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 5,
    marginTop: 5,
  },
  currency: {
    fontSize: 14,
    color: "#000",
    marginRight: 5,
    top: -7, /* Adjusted to push 'IDR' slightly up */
  },
  amountInput: {
    fontSize: 25,
    color: "#000",
    flex: 1,
  },
  balanceContainer: {
    marginTop: 5,
    color: "#1CA1A1",
    // textAlign: "right",
    justifyContent: "space-between",
    // flexDirection:"row",
  },
  balanceLabel: {
    fontSize: 12,
    color: "#B0B0B0",
  },
  balanceAmount: {
    fontSize: 12,
    color: "#1CA1A1",
  },
  
  notesInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    fontSize: 16,
    color: "#000",
    paddingBottom: 5,
  },
  transferButton: {
    backgroundColor: "#1CA1A1",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 250,
  },
  transferButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
