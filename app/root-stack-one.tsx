import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function RootStackOne() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Root Stack One</Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
}
