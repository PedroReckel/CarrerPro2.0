import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Presentation from '../../components/Presentation';

export default function Home() {
  const navigation = useNavigation();

  const contentData = [
    { title: 'Pedro Reckel Roberte', imageSource: require('../../../assets/pedroPerfil.png'), link: 'https://www.linkedin.com/in/pedro-reckel-roberte/' },
    { title: 'Luiz Gustavo Venancio', imageSource: require('../../../assets/alura.png'), link: 'https://www.linkedin.com/in/luizgustavolcv/' },
    { title: 'Larissa', imageSource: require('../../../assets/devfullcicle.png'), link: 'https://curso.fullcycle.com.br/curso-fullcycle/' },
    { title: 'Matheus', imageSource: require('../../../assets/rocketseat.png'), link: 'https://www.rocketseat.com.br'},
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

      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Presentation presentation={"Este aplicativo utiliza inteligência artificial para ajudar você a tomar decisões sobre sua carreira. No próximo quadro, forneça uma breve descrição sobre sua trajetória profissional, seus objetivos e planos futuros"} />
          
          <View style={styles.devs}>
            <Text style={styles.devsText}>Desenvolvedores:</Text>
          </View>

          {contentData.map((item, index) => (
            <View style={styles.content} key={index}>
              <TouchableOpacity style={styles.cellContent} onPress={() => ExternalLink(item.link)}>
                <Image style={styles.image} source={item.imageSource} />
                <Text style={styles.jobsText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          ))}

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
  devs: {
    marginTop: 10, // Reduced margin to place it closer to the Presentation component
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  devsText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Arial',
    textAlign: 'left',
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
