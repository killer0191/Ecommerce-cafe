import React from 'react';
import { ScrollView } from 'react-native';
import CategoryButton from '../../atoms/CustomerAtoms/CategoryButton';
import styles from '../../../styles/HomeCustomerPageStyles';

const CATEGORIES = ['Cappuccino', 'Machiato', 'Latte', 'Americano'];

export default function CategoryList ({ selectedCategory }: { selectedCategory: string }, {onSelectedCategory}:{onSelectedCategory:any}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}>
      {CATEGORIES.map((category, index) => (
        <CategoryButton key={category} title={category} isActive={index === 0} />
      ))}
    </ScrollView>
  );
}
