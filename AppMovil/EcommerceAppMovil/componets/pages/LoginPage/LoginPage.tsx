import { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Aquí iría la lógica de inicio de sesión
    console.log('Login attempted with:', { email, password })
    /*  <ImageBackground
        source={require('')}
        style={styles.backgroundImage}
      >
        </ >
        */
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
    
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)']}
          style={styles.gradient}
        >
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
                  value={email}
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

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                El mejor grano, el tueste más fino, el sabor más potente.
              </Text>

              <TouchableOpacity 
                style={styles.button}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Comenzar</Text>
              </TouchableOpacity>

              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={styles.progressIndicator} />
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      
    </View>
  )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 100,
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
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#000',
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
  progressContainer: {
    alignItems: 'center',
  },
  progressBar: {
    width: 100,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
  },
  progressIndicator: {
    width: '33%',
    height: '100%',
    backgroundColor: '#C17754',
    borderRadius: 2,
  },
})