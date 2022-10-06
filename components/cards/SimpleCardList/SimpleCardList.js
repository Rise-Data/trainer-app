import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import activeIndicator from '../../../assets/activeIndicator.png'
import inactiveIndicator from '../../../assets/inactiveIndicator.png'

export default function SimpleCardList(props) {

    const renderActive = () => {
        if (props.active != undefined) {
            if (props.active)
                return <image source={activeIndicator} style={styles.indicator} />
            else
                return <Image source={inactiveIndicator} style={styles.indicator} />
        }
    }

    return (
        <>
            <TouchableOpacity style={styles.card} onPress={props.onPress}>
                <Image source={props.icon} style={styles.icon}/>
                <Text style={styles.cardText}>{props.title}</Text>
                {renderActive()}
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
    },
    indicator: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
});