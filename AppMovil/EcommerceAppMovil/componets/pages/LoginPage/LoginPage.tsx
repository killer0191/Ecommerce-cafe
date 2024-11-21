import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { loginService } from '../../../services/authService';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage({ navigation }: { navigation: any }) {
  const { login } = useAuth();
  const [correo, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await loginService({ correo, password });
      console.log('Inicio de sesión exitoso:', result);

      if (result !== 'Usuario no encontrado') {
        const userData = {
          name: result.nombre
        };

        login(userData); // Actualizar el estado global de autenticación
        navigation.navigate('HomeCustomerPage');
      }


    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/FondoCafe.jpg')}
      style={styles.imageBackGround}
    >
      <View style={styles.container}>
        <StatusBar style="light" />
        <LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)']} style={styles.gradient}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#666"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={correo}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Introducir Contraseña</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#666"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>
            <Text style={styles.footerText}>
              El mejor grano, el tueste más fino, el sabor más potente.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? 'Cargando...' : 'Comenzar'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>

  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    height: 150
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    gap: 24,
    marginBottom: 32,
  },
  footerText: {
    color: '#A0A0A0',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    marginVertical:16,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    padding: 24,
    justifyContent: 'flex-end',
  },  
  button: {
    backgroundColor: '#C17754',
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorContainer: {
    backgroundColor: '#FF4C4C',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  imageBackGround: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

});
