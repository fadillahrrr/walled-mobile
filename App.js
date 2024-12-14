import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
const img = require("./assets/adaptive-icon.png");
import Box from "./components/Box";

export default function App() {
  return (
    // Box Model
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 2</Box>
      <Box style={{ backgroundColor: "green" }}>Box 3</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 4</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 5</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 6</Box>

      {/* Multiple Style */}
      {/* <View style={[styles.box, styles.blue]}>Box Blue</View>
      <View style={[styles.box, styles.green]}>Box Green</View> */}

      {/* StyleSheet */}
      {/* <ScrollView style={styles.scrollView}>
        <Text style={styles.text}> Test Color</Text>
      </ScrollView> */}
    </View>
  );
}

//     <View style={{ padding: 50, flex: 1 }}>
//       <ScrollView style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//         <View style={{ backgroundColor: "white" }}>
//           <Button
//             title="Click Here"
//             onPress={() => console.log("You call me")}
//             color="green"
//           />
//         </View>
//         <TouchableOpacity onPress={() => console.log("You call me")}>
//           <Text
//             style={{
//               color: "green",
//               textAlign: "center",
//               fontSize: 17,
//               marginVertical: 10,
//             }}
//           >
//             Optional Click
//           </Text>
//         </TouchableOpacity>
//         <Text>
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout. The point of
//           using Lorem Ipsum is that it has a more-or-less normal distribution of
//           letters, as opposed to using 'Content here, content here', making it
//           look like readable English. Many desktop publishing packages and web
//           page editors now use Lorem Ipsum as their default model text, and a
//           search for 'lorem ipsum' will uncover many web sites still in their
//           infancy. Various versions have evolved over the years, sometimes by
//           accident, sometimes on purpose (injected humour and the like).
//         </Text>
//         <View
//           style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
//         ></View>
//         <View
//           style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
//         ></View>
//         <Text>Hi I'm Fadillah</Text>
//         <Text>
//           Hello <Text style={{ color: "white" }}>world</Text>
//         </Text>
//         <Image source={img} style={{ width: "200", height: "200" }}></Image>
//         <Image
//           source={{ uri: "https://picsum.photos/200" }}
//           style={{ width: "200", height: "200" }}
//         ></Image>
//         <Text>
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout. The point of
//           using Lorem Ipsum is that it has a more-or-less normal distribution of
//           letters, as opposed to using 'Content here, content here', making it
//           look like readable English. Many desktop publishing packages and web
//           page editors now use Lorem Ipsum as their default model text, and a
//           search for 'lorem ipsum' will uncover many web sites still in their
//           infancy. Various versions have evolved over the years, sometimes by
//           accident, sometimes on purpose (injected humour and the like).
//         </Text>
//         <ImageBackground
//           source={{ uri: "https://picsum.photos/200" }}
//           style={{ flex: 1 }}
//         >
//           <Text style={{ marginTop: 50, color: "red" }}> IMAGE TEXT</Text>
//         </ImageBackground>
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },

  // Multiple Style
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    // flexDirection: "row", //horizontal
    // flexWrap: "wrap", 
    backgroundColor: "#fff",
    padding: 50,
  },

  box: {
    width: 200,
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },

  // StyleSheet
  // scrollView: {
  //   flex: 1,
  //   backgroundColor: "plum",
  //   padding: 60,
  // },
  // text: {
  //   fontSize: 20,
  //   color: "black",
  //   backgroundColor: "white",
  //   padding: 20,
  // },
});
