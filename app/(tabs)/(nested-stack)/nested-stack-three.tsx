import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NestedStackTwo() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Nested Stack Two</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 16,
        }}
      >
        <Button
          title="Go to Root Stack One"
          onPress={() => router.push("/root-stack-one")}
        />
      </View>
    </View>
  );
}
