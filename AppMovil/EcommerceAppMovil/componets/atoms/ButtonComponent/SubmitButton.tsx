import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../../styles/RegisterPageStyles';

export default function SubmitButton({ onPress, disabled }: { onPress: () => void; disabled: boolean }) {
  return (
    <TouchableOpacity
      style={[styles.continueButton, disabled && styles.continueButtonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.continueButtonText}>Continue</Text>
    </TouchableOpacity>
  );
}
