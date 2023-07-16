import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

const { width } = Dimensions.get("window");

const ProductSearch = (props: any) => {
    const { productsFiltered } = props;
    return (
        <Content style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item: any) => (
                    <ListItem
                        //onPress={navigation}
                        key={item._id}
                        avatar
                    >
                        <Left>
                            <Thumbnail
                                source={{
                                    uri: item.image ?
                                        item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View>
                    <Text style={{ alignSelf: 'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
}

export default ProductSearch