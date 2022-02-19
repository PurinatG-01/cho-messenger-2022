import React, { useContext } from "react"
import { View, Text, Button } from "react-native"
import { GlobalContext } from "./GlobalContext"
import styled from "styled-components/native"

const ThemeToggleButtonView = styled.View`
  background-color: ${(props) => (props?.isNight ? "#fefefe" : "#232323")};
  border-radius: 16px;
  padding: 2px 4px;
  border: 1px solid #a8a8a8;
  max-width: 100px;
`

export default function DashboardView() {
  const { nightMode } = useContext(GlobalContext)

  return (
    <View style={{ marginTop: 40 }}>
      <ThemeToggleButtonView isNight={nightMode.isNightMode}>
        <Button
          title={nightMode?.isNightMode ? "night" : "light"}
          onPress={() => nightMode.setIsNightMode(!nightMode.isNightMode)}
        />
      </ThemeToggleButtonView>
    </View>
  )
}
