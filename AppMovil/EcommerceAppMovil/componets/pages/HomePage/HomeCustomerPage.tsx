import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../molecules/CustomerMolecules/Header';
import PromoBanner from '../../molecules/CustomerMolecules/PromoBanner';
import CategoryList from '../../organisms/CustomerOrganisms/CategoryList';
import CoffeeGrid from '../../organisms/CustomerOrganisms/CoffeeGrid';
import RegisterButton from '../../molecules/CustomerMolecules/RegisterButton';
import styles from '../../../styles/HomeCustomerPageStyles';
import { GetTiposProductos } from '../../../services/tipoProductoService';

export default function HomeCustomerPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Cappuccino');
  
async function asd123(){
  let aux = await GetTiposProductos();
  console.log(aux);
}
asd123();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PromoBanner />
        <CategoryList
          selectedCategory={selectedCategory}
          // onSelectedCategory={setSelectedCategory}
        />
        <CoffeeGrid />
      </ScrollView>
      <RegisterButton />
    </View>
  );
}
