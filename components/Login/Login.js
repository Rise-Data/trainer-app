import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Google from '../../assets/google_icon.png'
import Facebook from '../../assets/facebook_icon.png'
import Button from '../buttons/Button/Button'
import SocialButton from '../buttons/SocialButton/SocialButton'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import FormInput from '../inputs/FormInput/FormInput'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titleH1}>Login</Text>
            <View>
                <SocialButton title="Logar com a conta do Google" icon={Google} onPress={() => {}}/>
                <SocialButton title="Logar com a conta do Facebook" icon={Facebook} onPress={() => {}}/>
            </View>
        </View>

        <SectionSeparator title="Fazer login"/>

        <View>
            <FormInput placeholder="E-mail" type='emailAddress'/>
            <FormInput placeholder="Senha" type='password'/>
        </View>
        <View>
            <Button title="Entrar" color="#FF6200" onPress={() => {}}/>
            <Text style={styles.orangeText} onPress={() => {}}>Esqueceu sua senha?</Text>
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