import React, {useContext} from 'react';
import {Alert, FlatList, View, Text } from 'react-native';
import {ListItem, Button, Icon, Avatar} from 'react-native-elements';

import UsersContext from '../src/context/UsersContext';


export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDelection(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text:'Não'
            }

        ])
    }


    function getUserItem({ item: user }) {
        return (

<ListItem key={user.id}

bottomDivider

onPress={() => props.navigation.navigate('UserForm', user)}>

<Avatar source={{uri: user.avatarUrl}} />

<ListItem.Content>

<ListItem.Title>{user.name}</ListItem.Title>

<ListItem.Subtitle>{user.email}</ListItem.Subtitle>

</ListItem.Content>

<ListItem.Content right style={{flexDirection: 'row'}}>

            <Button
            onPress={() => {props.navigation.navigate('UserForm', user);
            }}
            type="clear"
            icon={ <Icon name="edit" fontSize={24} color='#4f772d' />} 
            />
            
            <Button
            onPress={() => { confirmUserDelection(user)
            }}
            type="clear"
            icon={ <Icon name="delete" fontSize={24} color='#880016' />} 
            />
    
</ListItem.Content>


</ListItem>

        )
    }

    return (
        <View>
            <FlatList
            keyExtractor={user => user.id.toString()}
            data={state.users}
            renderItem={getUserItem} />

        </View>
    )

}

