import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function Menu() {

const navigation = useNavigation();

 return (
    <View style={styles.menu}>
        <View style={styles.menuView}>
            <Feather name="home" size={20} color="#3496ff" style={styles.icon} onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={styles.menuView}>
            <Text style={styles.menuText} onPress={() => navigation.navigate('Cursos')}>Cursos</Text>
        </View>
        <View style={styles.menuView}>
            <Text style={styles.menuText} onPress={() => navigation.navigate('Vagas')}>Vagas</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0, // Remova o padding horizontal
        width: '90%',
        marginTop: 25,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
      },
      menuText: {
        color: '#3496ff',
        fontSize: 17,
        paddingHorizontal: 10,
        textAlign: 'center',
      },
      menuView: {
        flex: 1, // Distribui o espaço igualmente entre as células
        borderWidth: 1, // Adicione a borda aqui
        borderColor: '#3496ff', // Cor da borda
      },
      icon: {
        height: 20, // Defina a altura do ícone
        textAlign: 'center'
      }
});