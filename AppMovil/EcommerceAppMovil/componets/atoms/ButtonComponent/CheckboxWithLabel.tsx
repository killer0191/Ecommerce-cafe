import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from '../../../styles/RegisterPageStyles';

export default function CheckboxWithLabel({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox style={styles.checkbox} value={checked} onValueChange={onChange} color={checked ? '#2196F3' : undefined} />
      <Text style={styles.checkboxLabel}>I accept the terms and privacy policy</Text>
    </View>
  );
}
