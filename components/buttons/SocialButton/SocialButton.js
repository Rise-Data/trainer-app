import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function SocialButton(props) {
  return (
        <TouchableOpacity style={styles.button} onPress={() => props.onPress}>
            <Image 
                source={props.icon}
                style={styles.icon}
            />
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#0A0A16',
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 10
    }
});