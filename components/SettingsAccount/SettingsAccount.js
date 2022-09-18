import { View, Text,StyleSheet,Modal, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Button from '../buttons/Button/Button'
import FormInput from '../inputs/FormInput/FormInput'

export default function Settings({ navigation }) {

    const confirmButton = () => {
        if (enabled) {
            return (
                <Button title="Confirmar" color="#FF6200" onPress={() => {}}/>
            )
        } 
    }

    const pessoa = {
        nome: "Ricardo",
        idade: 19,
        email: "ricardo@email.com"
    }

    const [nome, setNome] = useState(pessoa.nome);
    const [idade, setIdade] = useState(pessoa.idade);
    const [email, setEmail] = useState(pessoa.email);
    const [enabled, setEnabled] = useState(false)


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleH1}>Settings</Text>
                <View>
                    <Text style={styles.whiteText}>Nome:</Text>
                    <FormInput placeholder="" value={nome}  editable={enabled} onChange={(value) => setNome(value)}/>
                    <Text style={styles.whiteText}>Idade:</Text>
                    <FormInput placeholder="" value={idade} editable={enabled} onChange={(value) => setIdade(value)}/>
                    <Text style={styles.whiteText}>Email:</Text>
                    <FormInput placeholder="" value={email}  editable={enabled} onChange={(value) => setEmail(value)}/>
                    {confirmButton()}
                    <Button title="Editar" color="#FF6200" onPress={() => setEnabled(!enabled)}/>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Button title="Remover Conta" color="#F82B10" onPress={() => {}}/>
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