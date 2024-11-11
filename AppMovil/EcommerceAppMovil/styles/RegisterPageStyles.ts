import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingTop: 48,
      },
      backButton: {
        padding: 8,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 8,
      },
      loginLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
      },
      loginText: {
        color: '#666',
      },
      loginButton: {
        color: '#2196F3',
        fontWeight: '500',
      },
      form: {
        padding: 16,
        gap: 16,
      },
      inputGroup: {
        gap: 8,
      },
      label: {
        color: '#666',
        fontSize: 14,
      },
      input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
      },
      passwordInput: {
        flex: 1,
        padding: 12,
        fontSize: 16,
      },
      eyeIcon: {
        padding: 12,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      checkbox: {
        borderRadius: 4,
      },
      checkboxLabel: {
        color: '#666',
      },
      continueButton: {
        backgroundColor: '#2196F3',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
      },
      continueButtonDisabled: {
        opacity: 0.5,
      },
      continueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
      },
});

export default styles;
