import { View, Text,StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../buttons/Button/Button'
import FormInput from '../inputs/FormInput/FormInput'
import axios from 'axios'
import services from '../../services'
import LinkButton from '../buttons/LinkButton/LinkButton'

export default function Settings({ navigation, route }) {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cpf, setCpf] = useState("")
    const [id, setId] = useState("")
    const [enabled, setEnabled] = useState(false)
    
    useEffect(() => {
        setname(route.params.user.user)
        setEmail(route.params.user.email)
        setPhone(route.params.user.phone)
        setCpf(route.params.user.cpf)
        setId(route.params.user.id)
    }, [])
    
    
    const confirmButton = () => {
        if (enabled) {
            return (
                <Button title="Confirmar" color="#FF6200" onPress={() => handleUpdate()}/>
            )
        } 
    }

    const handleUpdate = async () => {
        axios.put(`${services.trainer.baseTrainer}/${id}`, {
            user: name,
            password: password,
            email: email,
            cpf: cpf,
            phone: phone
        })
        .then(response => {
            console.log(response.data)
            alert("Cadastro atualizado com sucesso")
            navigation.navigate('Profile', { user: response.data.result })
        }).catch(error => {
            alert("Erro ao atualizar")
        })
    }

    const handleDelete = async () => {
        axios.delete(`${services.trainer.baseTrainer}/${id}`)
        .then(response => {
            alert("Cadastro deletado com sucesso")
            navigation.navigate('Login')
        }).catch(error => {
            alert("Erro ao remover usuário")
        })
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
                <LinkButton title="Voltar" onPress={() => navigation.goBack()}/>
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
        justifyContent: 'space-between',
        paddingTop: 200
    },
  
})