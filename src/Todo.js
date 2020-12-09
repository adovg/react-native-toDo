import React from 'react';
//import {Text, View, StyleSheet} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export const Todo = ({todo}) => {
    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})
