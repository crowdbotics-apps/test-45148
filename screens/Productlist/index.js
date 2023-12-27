import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState(null);

  const searchProduct = () => {
    // Assuming there is an API to fetch product data by id
    fetch(`https://api.example.com/products/${productId}`).then(response => response.json()).then(data => setProductData(data)).catch(error => console.error(error));
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput style={styles.input} placeholder="Enter Product ID" onChangeText={text => setProductId(text)} value={productId} />
        <Button title="Search" onPress={searchProduct} />
      </View>
      {productData && <View style={styles.resultSection}>
          <Text style={styles.title}>{productData.name}</Text>
          <Text style={styles.description}>{productData.description}</Text>
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4
  },
  resultSection: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16
  }
});
export default SearchScreen;