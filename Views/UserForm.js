import React, {useState, useContext} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import UsersContext from '../src/context/UsersContext';

export default ({route, navigation}) => {
    const [user, setUser] =useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    


    return (
    <View style={estilo.form}>
        <Text>Nome</Text>
        <TextInput
        style={estilo.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
        />

        <Text>Email</Text>
        <TextInput
        style={estilo.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o e-mail"
        value={user.email} />

        <Text>URL do Avatar</Text>
        <TextInput
        style={estilo.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl} />

        <Button
        title="Salvar"
        onPress={() => {
            dispatch({
                type: user.id ? 'updateUser' : 'createUser',
                payload: user,
            })
        navigation.goBack()
         }}
        />
    

    </View>

    )
}

const estilo = StyleSheet.create ({
    form:{
        padding: 12

    },

    input:{
        height: 40,
        borderColor: '#4f772d',
        borderWidth: 1,
        marginBottom: 10,
    }
})