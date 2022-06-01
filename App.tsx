import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { TestComponent } from "./src/TestComponent";
import useInterval from "use-interval";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);
  useInterval(() => setState((s) => !s), 1500);
  return (
    <TailwindProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ marginBottom: 24 }}>Styled component keeys mounting:</Text>
        <TestComponent className="bg-white" />
      </View>
    </TailwindProvider>
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
