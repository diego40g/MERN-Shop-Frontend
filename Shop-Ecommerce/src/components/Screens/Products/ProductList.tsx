import React from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';

import ProductCard from './ProductCard';

let { width } = Dimensions.get("window");

const ProductList = (props: any) => {
    const { data } = props
    return (
        <View style={styles.container}>
            {data.map((item: any, index: number) => (
                <TouchableOpacity key={index} style={styles.item}>
                    <View style={{ backgroundColor: 'gainsboro' }}>
                        <ProductCard {...item} />
                    </View>
                </TouchableOpacity >
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    },
    item: {
        flexBasis: '50%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    }
})

export default ProductList;