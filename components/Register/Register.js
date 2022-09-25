import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Google from '../../assets/google_icon.png'
import Facebook from '../../assets/facebook_icon.png'
import SocialButton from '../buttons/SocialButton/SocialButton'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import FormInput from '../inputs/FormInput/FormInput'
import Button from '../buttons/Button/Button'
import axios from 'axios'
import services from '../../services'

export default function Register({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [phone, setPhone] = useState('')

    const handleRegister = async () => {
        axios.post(services.trainer.baseTrainer, {
            user: name,
            password: password,
            email: email,
            cpf: cpf,
            phone: phone
        })
        .then(response => {
            console.log(response.data)
            alert("Cadastro realizado com sucesso")
            navigation.navigate('Login')
        }).catch(error => {
            alert("Erro ao cadastrar")
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleH1}>Cadastro</Text>
            </View>
            <View>
                <FormInput placeholder="Nome" type='name' value={name} onChange={(value) => setName(value)} editable={true} />
                <FormInput placeholder="E-mail" type='emailAddress' value={email} onChange={(value) => setEmail(value)} editable={true}/>
                <FormInput placeholder="Senha" type='password' value={password} onChange={(value) => setPassword(value)} editable={true}/>
                <FormInput placeholder="CPF" type='cpf' value={cpf} onChange={(value) => setCpf(value)} editable={true}/>
                <FormInput placeholder="Telefone" type='phone' value={phone} onChange={(value) => setPhone(value)} editable={true}/>
            </View>
            <View>
                <Button title="Cadastrar" color="#FF6200" onPress={() => handleRegister()}/>
            </View>
            <View>
                <Text style={styles.whiteText} onPress={() => {}}>Já possui conta?</Text>
                <Text style={styles.orangeText} onPress={() => navigation.navigate("Login")}> Logue aqui</Text>
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