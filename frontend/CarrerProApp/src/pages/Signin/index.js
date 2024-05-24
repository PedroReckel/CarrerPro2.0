import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

export default function Signin() {

const navigation = useNavigation();
const { base_api_url } = require ('../../../.env');

const [email, setText] = useState('');
const [password, setPassword] = useState('');

const emailChange = (newText) => {
    setText(newText);
}

const passwordChange = (newText) => {
    setPassword(newText);
}

const ExternalLink = () => {
    const url = 'https://github.com/PedroReckel/CarrerPro/tree/main'
    Linking.openURL(url)
}

const signin = () => {
    if(!email.trim() || !password.trim()) {
        console.log('Por favor, preencha todos os campos.');
        return;
    }

    const userData = {
        email,
        password
    };

    axios.post(`${base_api_url}/signin`, userData)
        .then(res => {
            // Armazenando as informações do usuário no AsyncStorage 
            AsyncStorage.setItem('userData', JSON.stringify(res.data));

            // console.log('Cadastro bem sucedido!', JSON.stringify(res.data, null, 2));
            navigation.navigate('Home');
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
            placeholder='Digite seu e-mail...'
            onChangeText={emailChange}
            value={email}
        />
        <TextInput
            style={styles.input}
            placeholder='Digite sua senha...'
            secureTextEntry={true}
            onChangeText={passwordChange}
            value={password}
        />
        <View style={styles.buttonArea}>
            <TouchableOpacity
                style={styles.buttonSignin}
                onPress={signin}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonSingup}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.footer} onPress={() => ExternalLink()}>
            <Text>Carrer Pro Coporation © 2024</Text>
        </TouchableOpacity>
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
    buttonSignin: {
        width: '35%',
        backgroundColor: '#0e7114',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 25,
        borderRadius: 5,
        elevation: 5,
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
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20
    }
})