import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: '100%'
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
    //fontFamily: 'Inter-SemiBold', // Asegúrate de que esta fuente esté cargada globalmente
  },
  text: {
    color: 'white', // Asegúrate de que haya un color visible
  },
  
  subtitle: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    //fontFamily: 'Inter-Regular', // Asegúrate de que esta fuente esté cargada globalmente
  },
  page: {
    flex: 1,
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#C17754',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    //fontFamily: 'Inter-SemiBold',
  },
  progressBarContainer: {
    width: 100,
    height: 4,
    backgroundColor: '#333333',
    borderRadius: 2,
    marginTop:'10%',
    alignSelf : 'center'
  },
  progressIndicator: {
    width: '33%',
    height: '100%',
    backgroundColor: '#C17754',
    borderRadius: 2,
  },
})

export default globalStyles