import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function FormInput(props) {
  return (
    <TextInput 
        style={props.editable ? styles.inputEnabled : styles.inputDisabled}
        placeholder={props.placeholder}
        placeholderTextColor={'#7C7CA4'} 
        textContentType={props.type} 
        onChange={props.onChange}
        value={props.value}
        editable={props.editable}
        selectTextOnFocus={props.editable}
    />
  )
}

const styles = StyleSheet.create({
    inputEnabled: {
        backgroundColor: '#31313C',
        padding: 10,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: '#7C7CA4',
        borderWidth: 1,
        color: '#fff'
    },

    inputDisabled: {
      backgroundColor: '#cccc',
      padding: 10,
      paddingVertical: 20,
      marginBottom: 20,
      borderRadius: 10,
      borderColor: '#7C7CA4',
      borderWidth: 1,
      color: '#fff',
  }
});
