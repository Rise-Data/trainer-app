import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import InDevelopmentIcon from '../../../assets/inDevelopment.png'

export default function InDevelopmentCard() {
    return (
        <View style={styles.card}>
            <Image source={InDevelopmentIcon} style={styles.image} />
            <Text style={styles.title}>Feature em desenvolvimento...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#121225',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20
    },

    title: {
        color: '#FF6200',
        fontSize: 18,
        fontWeight: 'bold'
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20
    }

})