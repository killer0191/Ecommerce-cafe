import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TextComponent from '../../atoms/TextComponent/TextComponent';
import ProfileImage from '../../atoms/CustomerAtoms/ProfileImage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import styles from '../../../styles/HomeCustomerPageStyles';

// Definir el tipo de navegación
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeCustomerPage'>;

export default function Header() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.header}>
      <ProfileImage source={{ uri: '/placeholder.svg?height=40&width=40' }} />
      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <TextComponent style={styles.headerText}>Iniciar sesión</TextComponent>
      </TouchableOpacity>
    </View>
  );
}
