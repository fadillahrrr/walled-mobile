import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import ikon bawaan

export default function App() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("./assets/profil.png")}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.userName}>Fadillah Rohimahastuti</Text>
          <Text style={styles.accountType}>Personal Account</Text>
        </View>
        <Image
          source={require("./assets/little-sun.png")}
          style={styles.sunIcon}
        />
      </View>

      {/* Body */}
      <ScrollView style={styles.body}>
        {/* Greeting */}
        <View style={styles.card}>
          <View style={styles.greetingContainer}>
            <View>
              <Text style={styles.greetingTitle}>Good Morning, Dila</Text>
              <Text style={styles.greetingSubtitle}>
                Check all your incoming and outgoing transactions here
              </Text>
            </View>
            <Image
              source={require("./assets/sun.png")}
              style={styles.bigSunIcon}
            />
          </View>
        </View>

        {/* Account Number */}
        <View style={styles.card}>
          <View style={styles.accountContainer}>
            <Text style={styles.accountLabel}>Account No.</Text>
            <Text style={styles.accountNumber}>100899</Text>
          </View>
        </View>

        {/* Balance */}
        <View style={styles.card}>
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.balanceLabel}>Balance</Text>
              <View style={styles.balanceRow}>
                <Text style={styles.balanceAmount}>
                  {isBalanceVisible ? "Rp 10.000.000" : "•••••••"}
                </Text>
                <TouchableOpacity onPress={toggleBalanceVisibility}>
                  <Icon
                    name={isBalanceVisible ? "visibility-off" : "visibility"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.balanceActions}>
              <Image
                source={require("./assets/plus.png")}
                style={styles.actionIcon}
              />
              <Image
                source={require("./assets/panah.png")}
                style={styles.actionIcon}
              />
            </View>
          </View>
        </View>

        {/* Transaction History */}
        <View style={styles.card}>
          <Text style={styles.historyTitle}>Transaction History</Text>
          <View style={styles.transactionContainer}>
            <TransactionItem
              name="Adityo Gizwanda"
              type="Transfer"
              date="08 December 2024"
              amount="- 75.000,00"
              isPositive={false}
            />
            <TransactionItem
              name="Adityo Gizwanda"
              type="Topup"
              date="08 December 2024"
              amount="+ 75.000,00"
              isPositive={true}
            />
            <TransactionItem
              name="Adityo Gizwanda"
              type="Transfer"
              date="08 December 2024"
              amount="- 75.000,00"
              isPositive={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Transaction Item Component
const TransactionItem = ({ name, type, date, amount, isPositive }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionLeft}>
      <View style={styles.circleIcon} />
      <View>
        <Text style={styles.transactionName}>{name}</Text>
        <Text style={styles.transactionType}>{type}</Text>
        <Text style={styles.transactionDate}>{date}</Text>
      </View>
    </View>
    <Text
      style={[
        styles.transactionAmount,
        { color: isPositive ? "green" : "red" },
      ]}
    >
      {amount}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    elevation: 2,
  },
  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  headerText: {
    marginLeft: 15,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  accountType: {
    fontSize: 12,
    color: "gray",
  },
  sunIcon: {
    width: 30,
    height: 30,
  },
  body: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Warna abu-abu
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 1,
  },
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
  },
  greetingSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  bigSunIcon: {
    width: 50,
    height: 50,
  },
  accountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountLabel: {
    fontSize: 14,
    color: "gray",
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceLabel: {
    fontSize: 14,
    color: "gray",
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceAmount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginRight: 10,
  },
  balanceActions: {
    flexDirection: "row",
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  transactionContainer: {
    marginTop: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    marginRight: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  transactionType: {
    fontSize: 14,
    color: "gray",
  },
  transactionDate: {
    fontSize: 12,
    color: "lightgray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
  },
});
