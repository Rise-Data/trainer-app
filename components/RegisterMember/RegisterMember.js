import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import FormInput from '../inputs/FormInput/FormInput'
import Button  from '../buttons/Button/Button'
import axios from 'axios'

export default function RegisterMember({ navigation, route }) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleRegister = async () => {
        if (name === '' || phone === '')
            throw new Error("Preencha todos os campos")
        
        axios.post(services.member.baseMember, {
            name: name,
            phone: phone,
            trainerId: route.params.trainerId
        })
        .then(response => {
            console.log(response.data)
            alert("Cadastro realizado com sucesso")
            loadNewMember()
            navigation.goBack()
        }).catch(error => {
            alert("Erro ao cadastrar")
        })
    }

    const loadNewMember = () => {
        axios.get(`${services.member.getByTrainer}/${route.params.trainerId}`)
            .then(response => {
                setUpdatedMemberList(response.data.result.content)
            }).catch(error => {
                alert("Erro ao buscar dados")
            })
    }

    return (
        <View style={styles.container}>
                <View>
                    <Text style={styles.titleH1}>Cadastro de mebros</Text>
                </View>
                <View>
                    <FormInput placeholder="Nome" type='name' value={name} onChange={(value) => setName(value)} editable={true} />
                    <FormInput placeholder="Telefone" type='phone' value={phone} onChange={(value) => setPhone(value)} editable={true}/>
                </View>
                <View>
                    <Button title="Cadastrar" color="#FF6200" onPress={() => handleRegister()}/>
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
        fontSize: 30,
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