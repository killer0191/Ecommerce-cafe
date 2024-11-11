import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import styles from '../../../styles/RegisterPageStyles';

// Definir el tipo de navegación
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterPage'>;

export default function LoginLink({ onPress }: { onPress: () => void }) {
  const navigation = useNavigation<NavigationProp>();

  const handleLoginPress = () => {
    // Navegar a la página de Login
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.loginLink}>
      <Text style={styles.loginText}>¿Ya tiene una cuenta? </Text>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.loginButton}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
