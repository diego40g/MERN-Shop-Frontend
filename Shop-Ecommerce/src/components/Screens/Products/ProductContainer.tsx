import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import ProductList from './ProductList';
const data = require('../../../../assets/data/products.json')

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        return () => {
            setProducts([])
        }
    }, [])
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    {/* <Icon name='ios-search' /> */}
                    <Input
                        placeholder='Search'
                    // onFocus={() => { }}
                    // onChangeText={(text) => { }}
                    />
                </Item>
            </Header>
            <View style={styles.container}>
                <Text>Product Cotainer</Text>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                    keyExtractor={item => item.name}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }
})

export default ProductContainer;