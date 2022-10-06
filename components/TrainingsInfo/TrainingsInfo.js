import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import goBack from '../../assets/goBack.png'
import genericAdd from '../../assets/genericAdd.png'
import React, {useState, useEffect} from 'react'
import SimpleCardList from '../cards/SimpleCardList/SimpleCardList'
import Exercises from '../../assets/exercises.png'
import axios from 'axios'

export default function TrainingsInfo({navigation, route}) {
    const [loading, setLoading] = useState(true)
    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        console.log(route.params.training.exercises)
        axios.post(`${services.exercise.getByIds}`, route.params.training.exercises)
            .then(response => {
                console.log(response.data.result)
                setExercises(response.data.result)
                setLoading(false)
            }).catch(error => {
                alert("Erro ao buscar dados")
            })
    }, [])

    const renderExercises = () => {
        if (!loading)
            return exercises.map((exercise, index) => (
                <SimpleCardList icon={Exercises} title={exercise.name} onPress={() => navigation.navigate("ExerciseInfo", {exercise: exercise})} />
            ))
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
                <Text style={styles.titleH1}>Exercícios</Text>
                <TouchableOpacity onPress={() => alert("Feature em desenvolvimento...")}>
                    <Image source={genericAdd} style={styles.addButton}/>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                {renderExercises()}
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