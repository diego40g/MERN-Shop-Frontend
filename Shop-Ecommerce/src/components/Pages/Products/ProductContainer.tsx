import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { NativeBaseProvider, Container, Heading, Icon, Input, Text, Center, Box, ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';


import ProductList from './ProductList';
import ProductSearch from './ProductSearch';
const data = require('../../../../assets/data/products.json')

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState<boolean | void>();
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
        }
    }, [])

    const searchProduct = (text: string) => {
        setProductsFiltered(
            products.filter((i: string) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    const openList = () => {
        setFocus(true);
    }
    const onBlur = () => {
        setFocus(false);
    }
    return (
        <NativeBaseProvider>
            <Container style={{ maxWidth: '100%' }}>
                <Heading
                    py="1"
                    px="2"
                    w="100%"
                    fontSize="lg"
                    alignSelf="center">
                    <Input
                        placeholder="Search"
                        onFocus={openList}
                        onChange={(text) => searchProduct(text)}
                        variant="filled"
                        width="100%"
                        borderRadius="10"
                        InputLeftElement={
                            <Icon
                                ml="2"
                                size="4"
                                color="gray.400"
                                as={
                                    <Ionicons name="ios-search" />}
                            />
                        }
                    />
                    {focus == true ? (
                        <Icon onPress={onBlur} name="ios-close" />
                    ) : null}
                </Heading>
                {focus == true ? (
                    <View style={styles.container}>
                        <Center h="80%">
                            <Box
                                _dark={{
                                    bg: 'coolGray.800'
                                }}
                                _light={{
                                    bg: 'white'
                                }}
                                flex="1"
                                safeAreaTop
                                w="100%"
                            >
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <ProductSearch
                                        //navigation={props.navigation}
                                        productsFiltered={productsFiltered}
                                    />
                                </ScrollView>
                            </Box>
                        </Center>
                    </View>
                ) : (
                    <View style={styles.container}>
                        <Text>Product Cotainer</Text>
                        <FlatList
                            numColumns={2}
                            data={products}
                            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                            keyExtractor={item => item.name}
                        />
                    </View>
                )}
            </Container>
        </NativeBaseProvider >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }
})

export default ProductContainer;
