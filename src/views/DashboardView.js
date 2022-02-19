import React from "react"
import { View, Text, Button } from "react-native"
export default function DashboardView({ navigation }) {
  return (
    <View style={{ marginTop: 40 }}>
      <Text>1234</Text>
      <Button
        title="Go to test"
        onPress={() => navigation.navigate("Test", { name: "Jane" })}
      />
    </View>
  )
}
