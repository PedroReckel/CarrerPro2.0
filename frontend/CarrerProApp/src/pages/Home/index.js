import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Questions from '../../components/Questions';
import Signup from '../Signup';

export default function Home() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoCarrerPro}
        source={require('../../../assets/logoCarrerProMenor.png')}
      />
      <Header />
      <Menu />

      <View style={styles.main}>
        <ScrollView>
          <Questions question={"Quais são seus interesses pessoais?"}/>
          <Questions question={"Quais são suas habilidades e aptidões?"}/>
          <Questions question={"Quais são seus valores?"}/>
          <Questions question={"Quais são seus objetivos de longo prazo?"}/>
          <Questions question={"Que tipo de ambiente de trabalho você prefere?"}/>
          <Questions question={"Quais são suas preocupações financeiras?"}/>
          <Questions question={"Você prefere uma carreira com crescimento e oportunidades de avanço?"}/>
          <Questions question={"Existe uma profissão que você admira ou que gostaria de explorar mais?"}/>
          <Questions question={"Você está disposto a mudar de localização para seguir uma carreira?"}/>
          <Questions question={"Você já tem alguma experiência em um campo de interesse?"}/>
          <Questions question={"Como sua escolha de carreira afetará sua qualidade de vida e equilíbrio entre trabalho e vida pessoal?"}/>
        </ScrollView>

            <View style={styles.buttonArea}>
              <TouchableOpacity
                  style={styles.buttonSingup}
                  onPress={() => navigation.navigate('Cursos')}
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
    height: '66%',
    borderWidth: 2,
    marginTop: 25,
    backgroundColor: '#3496ff',
    borderRadius: 5,
    elevation: 5,
    padding: 10,
  },
  buttonArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
  }
});