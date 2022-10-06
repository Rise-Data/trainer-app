import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import SimpleCardList from '../cards/SimpleCardList/SimpleCardList'
import Exercises from '../../assets/exercises.png'
import GoBack from '../../assets/goBack.png'
import Add from '../../assets/genericAdd.png'
import axios from 'axios'


export default function Trainings({ navigation, route }) {
    const [loading, setLoading] = useState(true)
    const [members, setMembers] = useState([])
    const [trainings, setTrainings] = useState([])

    useEffect(() => {
        setLoading(true)
        let membersIds = []
        axios.get(`${services.training.getByTrainer}/${route.params.user.id}`)
        .then(response => {
            setTrainings(response.data.result.content)
            console.log(response.data.result.content)
            membersIds = response.data.result.content.map(training => training.member)
            axios.post(`${services.member.getByIds}`, membersIds)
                .then(response => {
                    setMembers(response.data.result.content)
                    setLoading(false)
                }).catch(error => {
                    alert("Erro ao buscar dados")
                })
            setLoading(false)
        }).catch(error => {
            alert("Erro ao buscar dados")
        })
    }, [])


    const renderTrainings = () => {
        if (!loading)
            return trainings.map((training, index) => {
                return (
                    <SimpleCardList icon={Exercises} title={`Treino de ${members[index]?.name}`} onPress={() => navigation.navigate("TrainingsInfo", {training: training})} />
                )
            })
        else
            return <Text>Carregando...</Text>
    }
    
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={GoBack} style={styles.goBack}/>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.titleH1}>Treinos</Text>
                <TouchableOpacity onPress={() => alert("Feature em desenvolvimento...")}>
                    <Image source={Add} style={styles.addButton}/>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                {renderTrainings()}
            </View>
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