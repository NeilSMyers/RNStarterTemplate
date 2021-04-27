import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

import { Home } from "screens"

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack
