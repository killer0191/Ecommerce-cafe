import React from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../molecules/CustomerMolecules/Header';
import PromoBanner from '../../molecules/CustomerMolecules/PromoBanner';
import CategoryList from '../../organisms/CustomerOrganisms/CategoryList';
import CoffeeGrid from '../../organisms/CustomerOrganisms/CoffeeGrid';
import RegisterButton from '../../molecules/CustomerMolecules/RegisterButton';
import styles from '../../../styles/HomeCustomerPageStyles';

export default function HomeCustomerPage() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PromoBanner />
        <CategoryList />
        <CoffeeGrid />
      </ScrollView>
      <RegisterButton />
    </View>
  );
}
