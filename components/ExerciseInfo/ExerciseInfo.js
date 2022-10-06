import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import goBack from '../../assets/goBack.png'
import React, {useState, useCallback, useEffect} from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import services from '../../services'
import axios from 'axios'

export default function ExerciseInfo({ route, navigation }) {
    const [playing, setPlaying] = useState(false);
    const [exerciseType, setExerciseType] = useState("")

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    useEffect(() => {
        axios.get(`${services.exerciseType.baseExerciseType}/${route.params.exercise.exerciseType}`)
            .then(response => {
                console.log(response.data.result)
                setExerciseType(response.data.result.name)
            }).catch(error => {
                alert(error)
            })
    }, [])


    const getVideoId = () => {
        if (route.params.exercise.linkVideo != null) {
            const videoId = route.params.exercise.linkVideo.split("v=")[1]
            console.log(route.params.exercise.linkVideo)
            return videoId
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={goBack} style={styles.goBack}/>
                </TouchableOpacity>
                <Text style={styles.titleH1}>Exercício {route.params.exercise.name}</Text>
            </View>
            <View style={styles.tutorial}>
                <YoutubePlayer
                    height={220}
                    play={playing}
                    videoId={getVideoId()}
                    onChangeState={onStateChange}
                />
                <Text style={styles.textH2}>Tipo de exercício: {exerciseType}</Text>
                <Text style={styles.textH2}>Descrição:</Text>
                <Text style={styles.description}>{route.params.exercise.description}</Text>
                <SectionSeparator title="Instruções" />
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Repetições</Text>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{route.params.exercise.repetitions}</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Séries</Text>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{route.params.exercise.duration}</Text>
                    </View>
                </View>
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
    goBack: {
        width: 30,
        height: 30
    },
    tutorial: {
        marginBottom: 20
    },
    description: {
        color: '#fff',
        fontSize: 20
    },
    textH2: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    }
})