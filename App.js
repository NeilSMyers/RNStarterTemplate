import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import TabNavigator from "./navigation/TabNavigator"

import { Home } from "screens"

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App
