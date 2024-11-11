import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import styles from '../../../styles/RegisterPageStyles';

export default function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <ArrowLeft size={24} color="#000" />
    </TouchableOpacity>
  );
}
