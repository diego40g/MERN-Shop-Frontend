import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const ToDo = (props: any) => {
    return (
        <View style={[styles.item, { margin: 8, padding: 8 }]}>
            <Text>{props.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke'
    }
})

export default ToDo