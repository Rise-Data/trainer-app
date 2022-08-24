import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Google from '../../assets/google_icon.png'
import Facebook from '../../assets/facebook_icon.png'

export default function Login() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titleH1}>Login</Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Image 
                        source={Google}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Logar com uma conta do Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Image 
                        source={Facebook}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Logar com uma conta do Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.middleLineContainer}>
            <View style={styles.middleLine} />
            <View>
                <Text style={styles.middleLineText}>Fazer Login</Text>
            </View>
            <View style={styles.middleLine} />
        </View>

        <View>
            <TextInput 
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={'#7C7CA4'} 
                textContentType='emailAddress' 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Senha" 
                placeholderTextColor={'#7C7CA4'} 
                textContentType='password' 
            />
        </View>
        <View>
            <TouchableOpacity style={styles.orangeButton} onPress={() => {}}>
                <Text style={styles.whiteText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.orangeText} onPress={() => {}}>Esqueceu sua senha?</Text>
        </View>
        <View style={styles.footerContainer}>
            <Text style={styles.whiteText} onPress={() => {}}>Não tem uma conta?</Text>
            <Text style={styles.orangeText} onPress={() => {}}> Cadastre-se aqui</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A0A16'
    },
    titleH1: { 
        fontSize: 40,
        color: '#fff', 
        fontWeight: 'bold',
        marginBottom: 40
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#0A0A16',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#31313C',
        padding: 10,
        paddingVertical: 20,
        marginBottom: 30,
        borderRadius: 10,
        borderColor: '#7C7CA4',
        borderWidth: 1,
        color: '#fff'
    },
    middleLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    }, 
    middleLine: {
        flex: 1, 
        height: 1, 
        backgroundColor: 'grey'
    },
    middleLineText: {
        width: 100, 
        textAlign: 'center', 
        color: '#fff'
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 10
    },
    orangeButton: {
        backgroundColor: '#FF6200',
        padding: 10,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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