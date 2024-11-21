import React from 'react';
import { ScrollView } from 'react-native';
import CategoryButton from '../../atoms/CustomerAtoms/CategoryButton';
import styles from '../../../styles/HomeCustomerPageStyles';

type CategoryListProps = {
  selectedCategory: number | null;
  onSelectedCategory: (id: number) => void;
  listTipos: { id: number; nombre: string }[];
};

export default function CategoryList({ selectedCategory, onSelectedCategory, listTipos }: CategoryListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}>
      {listTipos.map((category) => (
        <CategoryButton
          key={category.id}
          title={category.nombre}
          isActive={category.id === selectedCategory}
          onPress={() => onSelectedCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
