import { View, Text,StyleSheet, DevSettings } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../buttons/Button/Button'
import FormInput from '../inputs/FormInput/FormInput'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Settings({ navigation, route }) {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [email, setEmail] = useState("");
    const [enabled, setEnabled] = useState(false)
    
    useEffect(() => {
        setname(route.params.user.name)
        setpassword(route.params.user.password)
        setEmail(route.params.user.email)
    }, [])
    
    
    const confirmButton = () => {
        if (enabled) {
            return (
                <Button title="Confirmar" color="#FF6200" onPress={() => handleUpdate()}/>
            )
        } 
    }

    const handleUpdate = async () => {
        const user = {
            id: route.params.user.id,
            name: name,
            email: email,
            password: password
        }
        
        await AsyncStorage.mergeItem(user.id, JSON.stringify(user))
        DevSettings.reload()
    }

    const handleDelete = async () => {
        await AsyncStorage.removeItem(route.params.user.id)
        DevSettings.reload()
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleH1}>Settings</Text>
                <View>
                    <Text style={styles.whiteText}>Nome:</Text>
                    <FormInput placeholder="" value={name}  editable={enabled} onChange={(value) => setname(value)}/>
                    <Text style={styles.whiteText}>Senha:</Text>
                    <FormInput placeholder="" value={password} editable={enabled} onChange={(value) => setpassword(value)}/>
                    <Text style={styles.whiteText}>Email:</Text>
                    <FormInput placeholder="" value={email}  editable={enabled} onChange={(value) => setEmail(value)}/>
                    {confirmButton()}
                    <Button title="Editar" color="#FF6200" onPress={() => setEnabled(!enabled)}/>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Button title="Remover Conta" color="#F82B10" onPress={() => handleDelete()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A0A16',
        flex: 1,
        padding: 30,
    },
    titleH1: { 
        fontSize: 40,
        color: '#fff', 
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 40
    },
    whiteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    orangeText: {
        color: '#FF6200',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    footerContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'flex-end',
        paddingTop: 200
    },
  
})