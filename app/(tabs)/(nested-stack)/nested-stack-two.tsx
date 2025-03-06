import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NestedStackTwo() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nested Stack Two</Text>
      <Button
        title="Go to Root Stack One"
        onPress={() => router.push("/root-stack-one")}
      />
    </View>
  );
}
