import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';

export default function CategoryButton({ title, isActive }: { title: string; isActive?: boolean }) {
  return (
    <TouchableOpacity style={[styles.categoryButton, isActive && styles.categoryButtonActive]}>
      <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>{title}</Text>
    </TouchableOpacity>
  );
}
