import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function LinkButton(props) {
  return (    
    <Text style={styles.orangeText} onPress={props.onPress}>{props.title}</Text>   
  )
}

const styles = StyleSheet.create({    
    orangeText: {
        color: '#FF6200',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
        
    }
});