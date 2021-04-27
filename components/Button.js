import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"

function Button({ children, ...otherProps }) {
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cc82d1",
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
  },
})

export default Button
