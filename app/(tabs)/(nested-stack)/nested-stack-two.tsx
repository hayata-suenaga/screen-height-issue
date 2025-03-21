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
          title="Go to Nested Stack Three"
          onPress={() => router.push("/nested-stack-three")}
        />
      </View>
    </View>
  );
}
