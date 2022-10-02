import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Member from '../../assets/member.png'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import GoBack from '../../assets/goBack.png'
import axios from 'axios'

export default function MemberInfo({ route, navigation }) {

    const [trainings, setTrainings] = useState({})

    useEffect(() => {
        // Fazer requisição para fazer a busca de treinos do aluno
    }, [])

    const phoneMask = (phone) => {
        // Criar máscara para o telefone 11-11111-1111
        return phone.replace(/(\d{2})-(\d{5})-(\d{4})/, "$1-$2-$3")
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={GoBack} style={styles.goBack}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Image source={Member} style={styles.memberImage}/>
            <View>
                <Text style={styles.memberName}>Nome: {route.params.member.name}</Text>
                <Text style={styles.memberName}>Telefone: {phoneMask(route.params.member.phone)}</Text>
                <Text style={styles.memberName}>Sequência de treinos: {route.params.member.trainingSequence}</Text>
            </View>
        </View>
        <SectionSeparator title='Treinos' />
        <SectionSeparator title='Aulas' />
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