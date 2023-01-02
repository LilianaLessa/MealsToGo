import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
    //backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
