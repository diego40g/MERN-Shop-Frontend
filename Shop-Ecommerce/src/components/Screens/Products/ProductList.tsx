import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import ProductCard from './ProductCard';

let { width } = Dimensions.get("window");

const ProductList = (props: any) => {
    const { item } = props
    return (
        <TouchableOpacity style={{ width: '100%' }}>
            <View style={{ width: width / 2, backgroundColor: 'gainsboro', flex: 1, flexDirection: 'column' }}>
                <ProductCard {...item} />
            </View>
        </TouchableOpacity >
    )
}


export default ProductList;