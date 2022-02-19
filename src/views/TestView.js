import React from "react"
import { View, Text, Button } from "react-native"
export default function TestView({ navigation }) {
  return (
    <View>
      <Text> Test view</Text>
      <Button
        title="Go to dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  )
}
