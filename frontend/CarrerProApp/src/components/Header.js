import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

export default function Header() {

const navigation = useNavigation();
const [username, setUsername] = useState('');

useEffect(() => {
  // Função para obter o nome do usuário do AsyncStorage
  const getStoredUsername = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUsername(parsedUserData.name);
      }
    } catch (error) {
      console.error('Erro ao obter o nome do usuário do AsyncStorage:', error);
    }
  };

  // Chamada da função ao carregar o componente
  getStoredUsername();
}, []);

 return (
  <View style={styles.header}>
    <Text style={styles.headerText}>Olá, {username}</Text>
      <TouchableOpacity style={styles.buttonSair} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
  },
  buttonSair: {
    backgroundColor: '#b41919',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})