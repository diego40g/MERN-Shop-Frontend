import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ProductContainer from './src/components/Screens/Products/ProductContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
