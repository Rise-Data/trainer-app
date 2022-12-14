import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import services from '../../services'
import SimpleCardList from '../cards/SimpleCardList/SimpleCardList'
import Member from '../../assets/member.png'
import goBack from '../../assets/goBack.png'
import addUser from '../../assets/addUser.png'

export default function Members({ navigation, route }) {
    const [loading, setLoading] = useState(true)
    const [members, setMembers] = useState([])
    const [size, setSize] = useState(4)
    const [page, setPage] = useState(0)

    useEffect(() => {
        setLoading(true)
        axios.get(`${services.member.getByTrainer}/${route.params.user.id}?size=${size}&page=${page}`)
        .then(response => {
            setMembers(response.data.result.content)
            setLoading(false)
        }).catch(error => {
            alert("Erro ao buscar dados")
        })
    }, [])

    const renderMembers = () => {
        if (!loading)
            return members.map(member => {
                console.log(member.name)
                return (
                    <SimpleCardList icon={Member} title={member.name} active={member.active} onPress={() => navigation.push("MemberInfo", {member: member})} />
                )
            })
        else
            return <Text>Carregando...</Text>
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={goBack} style={styles.goBack}/>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.titleH1}>Alunos</Text>
                <TouchableOpacity onPress={() => navigation.navigate("RegisterMember", {trainerId: route.params.user.id})}>
                    <Image source={addUser} style={styles.addButton}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.listContainer}>
                {renderMembers()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A0A16',
        flex: 1,
        padding: 30,
        paddingTop: 50
    },
    titleH1: { 
        fontSize: 40,
        color: '#fff', 
        fontWeight: 'bold'

        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    listContainer: {
        paddingTop: 40
    },
    goBack: {
        width: 30,
        height: 30
    },
    addButton: {
        width: 50,
        height: 50
    }
})