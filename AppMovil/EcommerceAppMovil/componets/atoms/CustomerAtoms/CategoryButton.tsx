import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';

type CategoryButtonProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

export default function CategoryButton({ title, isActive, onPress }: CategoryButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.categoryButton, isActive && styles.categoryButtonActive]} 
      onPress={onPress}
    >
      <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>{title}</Text>
    </TouchableOpacity>
  );
}
