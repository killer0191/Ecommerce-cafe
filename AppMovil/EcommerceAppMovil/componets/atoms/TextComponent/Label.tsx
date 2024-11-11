import React from 'react';
import { Text } from 'react-native';
import styles from '../../../styles/RegisterPageStyles';

export default function Label({ text }: { text: string }) {
  return <Text style={styles.label}>{text}</Text>;
}
