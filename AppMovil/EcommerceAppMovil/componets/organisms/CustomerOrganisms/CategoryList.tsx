import React from 'react';
import { ScrollView } from 'react-native';
import CategoryButton from '../../atoms/CustomerAtoms/CategoryButton';
import styles from '../../../styles/HomeCustomerPageStyles';

type CategoryListProps = {
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
}

const CATEGORIES = ['Cappuccino', 'Machiato', 'Latte', 'Americano'];

export default function CategoryList({ selectedCategory, onSelectedCategory }: CategoryListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}>
      {CATEGORIES.map((category) => (
        <CategoryButton
          key={category}
          title={category}
          isActive={category === selectedCategory}
          onPress={() => onSelectedCategory(category)}
        />
      ))}
    </ScrollView>
  );
}
