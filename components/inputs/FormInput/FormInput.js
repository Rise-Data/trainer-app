import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function FormInput(props) {
  return (
    <TextInput 
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#7C7CA4'} 
        textContentType={props.type} 
    />
  )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#31313C',
        padding: 10,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: '#7C7CA4',
        borderWidth: 1,
        color: '#fff'
    }
});
