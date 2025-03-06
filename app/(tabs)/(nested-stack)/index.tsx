import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button
        title="Go to Nested Stack Two"
        onPress={() => router.push("/nested-stack-two")}
      />
    </View>
  );
}
