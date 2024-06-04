import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Input() {
  const navigation = useNavigation();
  const { base_api_url } = require ('../../../.env');
  const [content, setText] = useState('');

  const contentChange = (newText) => {
      setText(newText);
  }

  const sendDialog = async () => {
    if (!content.trim()) {
      console.log('Por favor, preencha todos os campos.');
      return;
  }

  try {
      // Obter o token do AsyncStorage
      const token = await AsyncStorage.getItem('token');

      const data = {
          content
      };

      // Configurar o cabeçalho da requisição com o token
      const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
      };

      const response = await axios.post(`${base_api_url}/dialog`, data, { headers });

      console.log('Pergunta enviada para o chatgpt com sucesso', JSON.stringify(response.data, null, 1));
      // Navegar para a tela Resp com o conteúdo da resposta como parâmetro
      navigation.navigate('Resp', { content: response.data.message.content });
  } catch (error) {
      console.log(`Erro no envio ${error}`);
  }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoCarrerPro}
        source={require('../../../assets/logoCarrerProMenor.png')}
      />
      <Header />
      <View style={styles.main}>
        <Presentation presentation={"Me fale um pouco sobre sua carreira e seus planos para o futuro:"} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TextInput
              style={styles.input}
              multiline={true}
              onChangeText={contentChange}
              value={content}
          />
        </ScrollView>
        <View style={styles.buttonArea}>
            <TouchableOpacity
                style={styles.buttonSingup}
                onPress={sendDialog}
                // onPress={() => navigation.navigate('Resp')}
            >
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
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
    marginBottom: -30,
  },
  main: {
    width: '90%',
    height: '71.8%',
    borderWidth: 2,
    marginTop: 25,
    backgroundColor: '#3496ff',
    borderRadius: 5,
    elevation: 5,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSingup: {
    width: '35%',
    backgroundColor: '#0e7114',
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
  input: {
    width: '100%',
    minHeight: 100, // Altura mínima da caixa de texto
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    marginBottom: 30,
    elevation: 5,
  }
});
