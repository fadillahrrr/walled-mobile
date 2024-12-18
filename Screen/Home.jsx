import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import { fetchPosts } from "../Api/restApi";

export default function HomePage() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const navigation = useNavigation()
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

//   useEffect(() => {
//     const getPosts = async () => {
//         try {
//             const data = await fetchPosts();
//             setPosts(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading (false);
//         }
//     };

//     getPosts();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//   }

//   if (error) {
//     return (
//         <View style={styles.errorContainer}>
//             <Text style={styles.errorText}> {error} </Text>
//         </View>
//     );
//   }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/profil.png")}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.userName}>Fadillah Rohimahastuti</Text>
          <Text style={styles.accountType}>Personal Account</Text>
        </View>
        <Image
          source={require("../assets/little-sun.png")}
          style={styles.sunIcon}
        />
      </View>

      {/* Body */}
      <ScrollView style={styles.body}>
        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <View>
            <Text style={styles.greetingTitle}>Good Morning, Dila</Text>
            <Text style={styles.greetingSubtitle}>
              Check all your incoming and outgoing transactions here
            </Text>
          </View>
          <Image
            source={require("../assets/sun.png")}
            style={styles.bigSunIcon}
          />
        </View>

        {/* Account Number */}
        <View style={styles.accountContainer}>
          <Text style={styles.accountLabel}>Account No.</Text>
          <Text style={styles.accountNumber}>100899</Text>
        </View>

{/* Balance */}
<View style={styles.card}>
  <View style={styles.balanceContainer}>
    {/* Kolom Balance */}
    <View style={styles.balanceColumn}>
      <Text style={styles.balanceLabel}>Balance</Text>
      <View style={styles.balanceRow}>
        <Text style={styles.balanceAmount}>
          {isBalanceVisible ? "Rp 10.000.000" : "•••••••"}
        </Text>
        <TouchableOpacity onPress={toggleBalanceVisibility}>
          <Icon
            name={isBalanceVisible ? "visibility" : "visibility-off"}
            size={24}
            color="lightgrey"
          />
        </TouchableOpacity>
      </View>
    </View>

    {/* Kolom Actions (Tombol Plus dan Panah) */}
    <View style={styles.iconContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Topup")}
      >
        <Image
          source={require("../assets/plus.png")}
          style={styles.actionIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Transfer")}
      >
        <Image
          source={require("../assets/panah.png")}
          style={styles.actionIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
</View>

        {/* Transaction History */}
        <View style={styles.card}>
          <Text style={styles.historyTitle}>Transaction History</Text>
          <View style={styles.separator}/>
          <View style={styles.transactionContaine}>
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
};

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
    color: "black",
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
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 1,
  },
  greetingTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    marginBottom: 15,
  },
  greetingSubtitle: {
    fontSize: 14,
    color: "black",
  },
  bigSunIcon: {
    width: 60,
    height: 60,
  },
  accountContainer: {
    backgroundColor: "#1CA1A1",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountLabel: {
    color: "white",
    fontSize: 14,
  },
  accountNumber: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceColumn: {
    flexDirection: "column",
    justifyContent: "center",
  },
  balanceLabel: {
    fontSize: 14,
    color: "black",
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
    flex: 1,
    justifyContent:"flex-end",
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    width: 45,
    height: 45,
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
  separator:{
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginVertical: 10,
    marginHorizontal:-15,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  transactionType: {
    fontSize: 14,
    color: "black",
  },
  transactionDate: {
    fontSize: 12,
    color: "lightgray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
