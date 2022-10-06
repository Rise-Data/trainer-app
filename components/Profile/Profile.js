import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import LinkButton from '../buttons/LinkButton/LinkButton'
import Members from '../../assets/members.png'
import Exercise from '../../assets/exercises.png'
import Settings from '../../assets/settings.png'
import Classes from '../../assets/class.png'
import SimpleCard from '../cards/SimpleCard/SimpleCard'
import axios from 'axios'
import services from '../../services'

export default function Profile({ navigation, route }) {
    
    const [membersCount, setMembersCount] = useState(0)
    const [trainingsCount, settrainingsCount] = useState(0)
    const [classesCount, setClassesCount] = useState(0)

    useEffect(() => {
        axios.get(`${services.trainer.baseTrainer}/${route.params.user.id}`)
        .then(response => {
            setMembersCount(response.data.result.membersIds.length)
            settrainingsCount(response.data.result.trainingsIds.length)
            setClassesCount(response.data.result.classesIds.length)
        }).catch(error => {
            alert("Erro ao buscar dados")
        })
    }, [])

    return (
      <View style={styles.container}>
        <View style={styles.headerProfile}>
              <Text style={styles.titleH1}>Perfil</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SettingsAccount", { user: route.params.user })}>
                <Image source={Settings} style={styles.settings}/>
              </TouchableOpacity>
        </View>  
        <View>
            <Text style={styles.whiteText}>Bem vindo de volta, {route.params.user.user}!</Text>
         </View>
        <View style={styles.cardsContainer}>
            <SimpleCard icon={Members} title='Alunos' count={membersCount} onPress={() => navigation.navigate("Members", {user: route.params.user})}/>
            <SimpleCard icon={Exercise} title='Treinos' count={trainingsCount} onPress={() => navigation.navigate("Trainings", {user: route.params.user})}/>
            <SimpleCard icon={Classes} title='Aulas' count={classesCount} onPress={() => alert("Feature em desenvolvimento..")}/>
        </View>
        <View>
            <LinkButton title='Sair' onPress={() => navigation.navigate("Login")}/>
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
    whiteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 70

    },
    orangeText: {
        color: '#FF6200',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
        paddingTop: 200
    },
    newFeatures: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
        paddingTop: 200,
        color: '#fff',
        fontSize: 30,
    },
    headerProfile:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardsContainer: {
        paddingTop: 50,
        paddingBottom: 50
    },
    settings: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
})