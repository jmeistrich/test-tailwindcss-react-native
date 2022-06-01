import { useEffect } from "react";
import { Text, View } from "react-native";
import { styled } from "tailwindcss-react-native";

let num = 0;

export const TestComponent = styled(function TestComponent() {
  useEffect(() => {
    console.log("Mount");
    num++;
    return () => console.log("Unmount");
  }, []);

  return (
    <View>
      <Text>Mounted {num} times</Text>
    </View>
  );
});
