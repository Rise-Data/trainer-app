import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Google from '../../assets/google_icon.png'
import Facebook from '../../assets/facebook_icon.png'
import Button from '../buttons/Button/Button'
import SocialButton from '../buttons/SocialButton/SocialButton'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import FormInput from '../inputs/FormInput/FormInput'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usersData, setUsersData] = useState([])
    
    const getData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            const users = await AsyncStorage.multiGet(keys)
            const tempList = users.map((user) => JSON.parse(user[1]))
            setUsersData(tempList)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData().then(() => {
            console.log("Users: ", usersData)
        })
    }, [])


    const handleLogin = () => {
        const user = usersData.find((user) => user.email === email && user.password === password)
        if (user) {
            navigation.navigate("Profile", { user: user })
        } else {
            alert("Usuário não encontrado")
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleH1}>Login</Text>
                <View>
                    <SocialButton title="Logar com a conta do Google" icon={Google}/>
                    <SocialButton title="Logar com a conta do Facebook" icon={Facebook}/>
                </View>
            </View>

            <SectionSeparator title="Fazer login"/>

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