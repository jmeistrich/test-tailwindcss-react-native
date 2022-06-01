import { memo, useEffect } from "react";
import { Text, View } from "react-native";
import { styled } from "tailwindcss-react-native";

let num = 0;

export const TestComponent = memo(function TestComponent(props: { className?: string }) {
  useEffect(() => {
    console.log("Mount");
    num++;
    return () => console.log("Unmount");
  }, []);

  return (
    <View>
      <Text>Re-mounted {num} times</Text>
    </View>
  );
});
