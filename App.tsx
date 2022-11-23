import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Text from 'react-native-ui-lib/text'
import View from 'react-native-ui-lib/view'

import Gradient from "./src/library/components/Gradient";
import TopGradient from "./src/library/components/TopGradient";

export default function App() {
  return (
    // <TopGradient>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        {/* <Gradient>
          <Text>Open up App.tsx to start working on your app!</Text>
        </Gradient> */}
      </View>
    // </TopGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
