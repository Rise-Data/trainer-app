import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SectionSeparator(props) {
  return (
    <View style={styles.middleLineContainer}>
        <View style={styles.middleLine} />
        <View>
            <Text style={styles.middleLineText}>{props.title}</Text>
        </View>
        <View style={styles.middleLine} />
    </View>
  )
}

const styles = StyleSheet.create({
    middleLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    middleLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#7C7CA4'
    },
    middleLineText: {
        width: 100,
        textAlign: 'center',
        color: '#fff'
    }
});