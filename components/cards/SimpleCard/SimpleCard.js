import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function SimpleCard(props) {
  return (
    <>
        <TouchableOpacity style={styles.card} onPress={() => props.onPress}>
            <Image source={props.icon} style={styles.icon}/>
            <Text style={styles.cardText}>{props.title}</Text>
            <Text style={styles.cardText}>{props.count}</Text>
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#31313C',
        padding: 20,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: '#7C7CA4',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    cardText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});