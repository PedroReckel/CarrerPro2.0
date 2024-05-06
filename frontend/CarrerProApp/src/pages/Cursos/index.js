import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function Cursos() {
  // Array de dados com os diferentes conteúdos
  const contentData = [
    { title: 'Curso de JavaScript', imageSource: require('../../../assets/cod3r.png'), link: 'https://www.udemy.com/course/curso-web/' },
    { title: 'Curso de Angular', imageSource: require('../../../assets/alura.png'), link: 'https://www.alura.com.br' },
    { title: 'Full Cycle 3.0', imageSource: require('../../../assets/devfullcicle.png'), link: 'https://curso.fullcycle.com.br/curso-fullcycle/' },
    { title: 'Curso React Native', imageSource: require('../../../assets/rocketseat.png'), link: 'https://www.rocketseat.com.br'},
    { title: 'Curso em Vídeo', imageSource: require('../../../assets/cursoEmVideo.png'), link: 'https://www.cursoemvideo.com' },
    { title: 'Faculdade De TI', imageSource: require('../../../assets/fiap.png'), link: 'https://www.fiap.com.br' },
    { title: 'SENAC - Aulas EAD', imageSource: require('../../../assets/SENAC.png'), link: 'https://www.es.senac.br' },
    { title: 'SENAI - Aulas EAD', imageSource: require('../../../assets/senai.png'), link: 'https://senaies.com.br' },
  ];

  const ExternalLink = (url) => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoCarrerPro}
        source={require('../../../assets/logoCarrerProMenor.png')}
      />
      <Header />
      <Menu />

      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleText}>CURSOS</Text>
        </View>

        <ScrollView>
          {contentData.map((item, index) => (
            <View style={styles.content} key={index}>
              <TouchableOpacity style={styles.cellContent} onPress={() => ExternalLink(item.link)}>
                <Image style={styles.image} source={item.imageSource} />
                <Text style={styles.jobsText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40, // Adicione uma margem inferior para espaço vertical
  },
  cellContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    padding: 10,
    width: '95%',
    marginLeft: 10, // Adicione margem à esquerda para espaçamento horizontal
    elevation: 5,
    borderRadius: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  jobsText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 20, // Adicione margem à esquerda para separar a imagem do texto
  },
});