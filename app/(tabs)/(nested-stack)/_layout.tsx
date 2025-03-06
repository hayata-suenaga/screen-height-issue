import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="nested-stack-two"
        options={{ title: "Nested Stack Two" }}
      />
      <Stack.Screen
        name="nested-stack-three"
        options={{ title: "Nested Stack Three" }}
      />
    </Stack>
  );
}
