import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from 'react-native'

import ToDo from './ToDo'

const AllList = () => {
    const [title, setTitle] = useState('AllList');
    const [text, setText] = useState(String);
    const [list, setList] = useState(['Hello World']);

    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText('')
    }

    const deleteItemValue = (index: string) => {
        const updatedList = list.filter((item: string) => item !== index)
        setList(updatedList)
    }
    const deleteItemIndex = (item: any) => {
        const indexToDelete = list.indexOf(item);
        const updatedList = list.filter((_, index) => index !== indexToDelete)
        setList(updatedList)
    }

    return (
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>
                {list.map((x, index) =>
                    <ToDo key={index} item={x} index={index} deleteV={deleteItemValue} deleteI={deleteItemIndex} />
                )}
            </ScrollView>
            <View>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={(text) => setText(text)} />
                <Button title="Add item" onPress={addItem} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: 'center'
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8,
        padding: 8
    }
})

export default AllList;