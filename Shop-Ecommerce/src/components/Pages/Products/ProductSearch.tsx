import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { StyleSheet, Dimensions } from 'react-native';
import { Spacer, Box, HStack, Pressable, VStack, Avatar, Text, Icon } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const ProductSearch = (props: any) => {
    const { productsFiltered } = props
    const [listData, setListData] = useState(productsFiltered);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = ({
        item,
        index
    }) => <Box>
            <Pressable onPress={() => console.log('You touched me')} _dark={{
                bg: 'coolGray.800'
            }} _light={{
                bg: 'white'
            }}>
                <Box pl="4" pr="5" py="2">
                    <HStack alignItems="center" space={3}>
                        <Avatar size="48px"
                            source={{
                                uri: item.image ?
                                    item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                            }}
                        />
                        <VStack>
                            <Text color="coolGray.800" _dark={{
                                color: 'warmGray.50'
                            }} bold>
                                {item.name}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: 'warmGray.200'
                            }}>
                                {item.description}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" color="coolGray.800" _dark={{
                            color: 'warmGray.50'
                        }} alignSelf="flex-start">
                            $ {item.price}
                        </Text>
                    </HStack>
                </Box>
            </Pressable>
        </Box>;

    const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
        <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
            opacity: 0.5
        }}>
            <VStack alignItems="center" space={2}>
                <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
                <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
                    More
                </Text>
            </VStack>
        </Pressable>
        <Pressable w="70" cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
            opacity: 0.5
        }}>
            <VStack alignItems="center" space={2}>
                <Icon as={<Icon name="delete" />} color="white" size="xs" />
                <Text color="white" fontSize="xs" fontWeight="medium">
                    Delete
                </Text>
            </VStack>
        </Pressable>
    </HStack>;

    return <Box bg="white" safeArea flex="1">
        <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-130} previewRowKey={'0'} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
    </Box>;
}

const styles = StyleSheet.create({
    productsFiltered: {
        backgroundColor: 'blue'
    }
})

export default ProductSearch;
