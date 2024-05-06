import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { baseApiUrl } from '../../config';
import axios from 'axios';  

export default function Signup() {

const navigation = useNavigation();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirPassword] = useState('');

const emailChange = (newText) => {
    setEmail(newText);
}

const nameChange = (newText) => {
    setName(newText);
}

const passwordChange = (newText) => {
    setPassword(newText);
}

const confirmPasswordChange = (newText) => {
    setConfirPassword(newText);
}

const signup = () => {
    const userData = {
        name,
        email,
        password,
        confirmPassword
    };

    console.log('Dados do usuário:', userData);

    axios.post(`${baseApiUrl}/signup`, userData)
        .then(res => {
            console.log(`Cadastro bem sucedido! ${res.data}`);
            navigation.navigate('Signin');
        })
        .catch(error => {
            console.log(`Erro no cadastro: ${error}`);
        });
}

 return (
   <View style={styles.container}>
        <Image
            style={styles.logoCarrerPro}
            source={require('../../../assets/logoCarrerPro.png')}
        />
        <TextInput
            style={styles.input}
            placeholder='Digite seu nome...'
            onChangeText={nameChange}
            value={name}
        />
        <TextInput
            style={styles.input}
            placeholder='Digite seu e-mail...'
            onChangeText={emailChange}
            value={email}
        />
        <TextInput
            style={styles.input}
            placeholder='Crie sua senha...'
            secureTextEntry={true}
            onChangeText={passwordChange}
            value={password}
        />
        <TextInput
            style={styles.input}
            placeholder='Confirme sua senha...'
            secureTextEntry={true}
            onChangeText={confirmPasswordChange}
            value={confirmPassword}
        />
        <View style={styles.buttonArea}>
            <TouchableOpacity
                style={styles.buttonSingup}
                onPress={signup}
            >
                <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3496ff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logoCarrerPro: {
        width: 350,
        height: 350,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        marginBottom: 30,
        elevation: 5,
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSingup: {
        width: '35%',
        backgroundColor: '#b41919',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
})