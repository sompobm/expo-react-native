import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
const CPNLoading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

export default CPNLoading;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
};
