import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Text>Icons here</Text>
          <Text style={styles.temp}>35°C</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like a MF</Text>
          <Text style={styles.subTitle}>For more info look outside</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subTitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
