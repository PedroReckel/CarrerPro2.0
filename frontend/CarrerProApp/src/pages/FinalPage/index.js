import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

export default function FinalPage() {



 return (
   <View style={styles.container}>
        <Image
            style={styles.logoCarrerPro}
            source={require('../../../assets/logoCarrerPro.png')}
        />
        
        <Text style={styles.airesp}>Foi um prazer tê-lo por aqui!</Text>
        <Text style={styles.airesp}>Por favor deixe sua avaliação:</Text>
        <Text style={styles.airesp}>Agradeço pela avaliação, vonte sempre!</Text>

        <View style={styles.buttonArea}>
            <TouchableOpacity
                style={styles.buttonSingup}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.buttonText}>Sair</Text>
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