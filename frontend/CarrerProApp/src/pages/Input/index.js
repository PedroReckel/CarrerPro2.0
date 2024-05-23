import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Presentation from '../../components/Presentation';

export default function Input() {
  const navigation = useNavigation();

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
          />
        </ScrollView>

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.buttonSingup}
            onPress={() => navigation.navigate('Cursos')}
          >
            <Text style={styles.buttonText}>Próximo</Text>
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
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
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
