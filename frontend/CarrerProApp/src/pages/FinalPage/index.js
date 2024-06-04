import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';

export default function FinalPage() {
    const navigation = useNavigation();
    const [rating, setRating] = useState(0);

 return (
   <View style={styles.container}>
        <Image
            style={styles.logoCarrerPro}
            source={require('../../../assets/logoCarrerPro.png')}
        />
        
        <Text style={styles.finalGreet1}>Foi um prazer tê-lo por aqui! Por favor deixe sua avaliação:</Text>
        <Text style={styles.finalGreet2}>Agradeço pela avaliação, vonte sempre!</Text>

        <StarRating
                rating={rating}
                onChange={setRating}
                color="#FFD700"
                starSize={30}
                style={styles.starRating}
        />

        <View style={styles.buttonArea}>
            <TouchableOpacity
                style={styles.buttonSingup}
                onPress={() => navigation.navigate('Signin')}
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
    finalGreet1: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        position: 'absolute',
        bottom: 550,
        width: '100%',
        color: '#fff',
    },
    starRating: {
        marginBottom: 20,
    },
    finalGreet2: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        position: 'absolute',
        bottom: 155,
        width: '100%',
        color: '#fff',
    },
    buttonArea: {
        position: 'absolute',
        bottom: 80,
        width: '100%',
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