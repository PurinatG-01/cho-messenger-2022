import { StatusBar } from "expo-status-bar"
import { GlobalProvider } from "./src/components/GlobalContext"
import DashboardView from "./src/views/DashboardView"
import TestView from "./src/views/TestView"
import styled from "styled-components/native"
import Navbar from "./src/components/Navbar"
import { useColorScheme } from "react-native"
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const AppContainer = styled.View`
  background-color: ${(props) => (!!props?.isNight ? "#232323" : "#fefefe")};
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
`

export default function App() {
  const scheme = useColorScheme()
  
  return (
    <GlobalProvider>
      <NavigationContainer theme={scheme == 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={DashboardView} />
          <Stack.Screen name="Test" component={TestView} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <AppContainer>
        <Navbar />
      </AppContainer> */}
      <StatusBar />
    </GlobalProvider>
  )
}
