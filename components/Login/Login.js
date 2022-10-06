import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../buttons/Button/Button'
import FormInput from '../inputs/FormInput/FormInput'
import axios from 'axios'
import services from '../../services'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [])

    const handleLogin = () => {
        axios.post(services.trainer.loginTrainer, {
            email: email,
            password: password
        })    
        .then((response) => {
            navigation.navigate('Profile', { user: response.data.result })
        }).catch((error) => {
            alert("Erro ao fazer login")
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleH1}>Login</Text>
            </View>
            <View>
                <FormInput placeholder="E-mail" type='emailAddress' value={email} onChange={(value) => setEmail(value)} editable={true}/>
                <FormInput placeholder="Senha" type='password' value={password} onChange={(value) => setPassword(value)} editable={true}/>
            </View>
            <View>
                <Button title="Entrar" color="#FF6200" onPress={() => handleLogin()}/>
                <Text style={styles.orangeText} onPress={() => alert("Feature em desenvolvimento")}>Esqueceu sua senha?</Text>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.whiteText} onPress={() => {}}>Não tem uma conta?</Text>
                <Text style={styles.orangeText} onPress={() => navigation.navigate("Register")}> Cadastre-se aqui</Text>
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
        marginBottom: 40
    },
    whiteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
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
    }
})