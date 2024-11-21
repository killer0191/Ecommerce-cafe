import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../../../styles/HomeCustomerPageStyles';
import { RootStackParamList } from '../../../navigation/types';
import TextComponent from '../../atoms/TextComponent/TextComponent';

export default function LoginButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
      <Text style={styles.registerButton}>Iniciar sesión</Text>
    </TouchableOpacity>
  );
}
