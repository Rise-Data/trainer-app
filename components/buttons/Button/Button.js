import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor:props.color}]} onPress={props.onPress}>
        <Text style={styles.whiteText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});