import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../../../styles/HomeCustomerPageStyles';
import { RootStackParamList } from '../../../navigation/types';

export default function RegisterButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity 
      style={styles.registerButton}
      onPress={() => navigation.navigate('RegisterPage')}
    >
      <Text style={styles.registerButtonText}>Registrarse</Text>
    </TouchableOpacity>
  );
}
