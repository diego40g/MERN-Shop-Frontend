import { StyleSheet, View } from 'react-native';

import Header from './src/components/Shared/Header';
import ProductContainer from './src/components/Pages/Products/ProductContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
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
