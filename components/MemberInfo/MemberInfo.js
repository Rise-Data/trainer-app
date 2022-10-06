import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Member from '../../assets/member.png'
import GoBack from '../../assets/goBack.png'
import InDevelopmentCard from '../cards/InDevelopmentCard/InDevelopmentCard'

export default function MemberInfo({ route, navigation }) {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={GoBack} style={styles.goBack}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Image source={Member} style={styles.memberImage}/>
            <View>
                <Text style={styles.memberName}>Nome: {route.params.member.name}</Text>
                <Text style={styles.memberName}>Telefone: {route.params.member.phone}</Text>
                <Text style={styles.memberName}>Sequência de treinos: {route.params.member.trainingSequence}</Text>
            </View>
        </View>
        <View style={{marginTop: 20}}>
            <InDevelopmentCard />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A0A16',
        flex: 1,
        padding: 30,
        paddingHorizontal: 20
    },
    titleH1: { 
        fontSize: 40,
        color: '#fff', 
        fontWeight: 'bold'

        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    
    listContainer: {
        paddingTop: 40
    },
    goBack: {
        width: 30,
        height: 30,
        marginBottom: 20
    },
    addButton: {
        width: 50,
        height: 50
    },
    memberImage: {
        width: 100,
        height: 100
    },
    memberName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})