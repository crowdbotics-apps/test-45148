import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import axios from "axios";

const FirstRecordScreen = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("https://api.publicapis.org/entries").then(response => setData(response.data.entries[0])).catch(error => console.error(error));
  }, []);
  return <SafeAreaView style={styles.container}>
      {data && <View style={styles.item}>
          <Text style={styles.title}>{data.API}</Text>
          <Text style={styles.description}>{data.Description}</Text>
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ddc6c6"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  description: {
    fontSize: 16
  }
});
export default FirstRecordScreen;