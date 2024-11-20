import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import globalStyles from '../../../styles/globalStyles';
import ButtonComponent from '../../atoms/ButtonComponent/ButtonComponent';
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { RootStackParamList } from '../../../navigation/types'; // Importa el tipo de las rutas
import { StackNavigationProp } from '@react-navigation/stack'; // Importa el tipo StackNavigationProp

import styles from '../../../styles/HomeCustomerPageStyles';
// Definimos el tipo para la navegación
type HeroSectionNavigationProp = StackNavigationProp<RootStackParamList, 'Hero'>;

export default function HeroSection() {
  const navigation = useNavigation<HeroSectionNavigationProp>(); // Aquí se usa el tipo definido

  return (
    <ImageBackground
      source={require('../../../assets/FondoCafe.jpg')}
      style={styles.imageBackGround}
    >
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>
          Un café tan bueno que le encantará a su paladar
        </Text>
        <Text style={globalStyles.subtitle}>
          El mejor grano, el tueste más fino, el sabor más potente.
        </Text>
        <ButtonComponent
          title="Comenzar"
          onPress={() => navigation.navigate('HomeCustomerPage')} // Ahora debería funcionar
        />
        <ProgressBar />
      </View>
    </ImageBackground>
  );
}
