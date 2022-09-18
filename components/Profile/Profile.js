import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinkButton from '../buttons/LinkButton/LinkButton'



export default function Profile({ navigation }) {
    return (
      <View style={styles.container}>
          <View style={styles.headerProfile}>
              <Text style={styles.titleH1}>Perfil</Text>
              <LinkButton title='Configurações' onPress={() => navigation.navigate("Config")}/>
          </View>  
          <View>
            <Text style={styles.whiteText}>Bem-vindo de volta, Professor!</Text>
          </View>
          <View style={{display : 'inline'}}>
              <Text style={styles.newFeatures}>Nosso aplicativo ainda está em desenvolvimento. Aguarde por novas Features em Breve!</Text>
          </View>  
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A0A16',
        flex: 1,
        padding: 30,
        marginTop: 50
    },
    titleH1: { 
        fontSize: 40,
        color: '#fff', 
        fontWeight: 'bold'

        
    },
    whiteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'left',
        paddingTop: 70

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
    },
    newFeatures: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
        paddingTop: 200,
        color: '#fff',
        fontSize: 30,
    },
    headerProfile:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})