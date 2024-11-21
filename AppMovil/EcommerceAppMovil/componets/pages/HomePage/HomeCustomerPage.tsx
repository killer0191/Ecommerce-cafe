import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../molecules/CustomerMolecules/Header';
import PromoBanner from '../../molecules/CustomerMolecules/PromoBanner';
import CategoryList from '../../organisms/CustomerOrganisms/CategoryList';
import CoffeeGrid from '../../organisms/CustomerOrganisms/CoffeeGrid';
import RegisterButton from '../../molecules/CustomerMolecules/RegisterButton';
import styles from '../../../styles/HomeCustomerPageStyles';

export default function HomeCustomerPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Cappuccino');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PromoBanner />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectedCategory={setSelectedCategory}
        />
        <CoffeeGrid selectedCategory={selectedCategory} />
      </ScrollView>
      <RegisterButton />
    </View>
  );
}
