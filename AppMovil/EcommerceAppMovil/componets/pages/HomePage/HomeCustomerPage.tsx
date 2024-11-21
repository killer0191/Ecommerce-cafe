import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../molecules/CustomerMolecules/Header';
import PromoBanner from '../../molecules/CustomerMolecules/PromoBanner';
import CategoryList from '../../organisms/CustomerOrganisms/CategoryList';
import CoffeeGrid from '../../organisms/CustomerOrganisms/CoffeeGrid';
import RegisterButton from '../../molecules/CustomerMolecules/RegisterButton';
import styles from '../../../styles/HomeCustomerPageStyles';

import { GetTiposProductos } from '../../../services/clienteService';
import { useAuth } from '../../context/AuthContext';
import TextComponent from '../../atoms/TextComponent/TextComponent';
import Menu from '../../molecules/CustomerMolecules/Menu';

type TipoProducto = {
  id: number;
  nombre: string;
};

export default function HomeCustomerPage() {
  const { isAuthenticated, user, logout } = useAuth();
  const [tipos, setTipos] = useState<TipoProducto[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  useEffect(() => {
    async function fetchTipos() {
      try {
        const resp = await GetTiposProductos();
        const nuevosTipos = resp.map((res: any) => ({ id: res.idTipoProducto, nombre: res.nombre }));
        setTipos(nuevosTipos);

        // Selecciona automáticamente el primer id
        if (nuevosTipos.length > 0) {
          setSelectedCategory(nuevosTipos[0].id);
        }
      } catch (error) {
        console.error('Error al obtener los tipos de productos:', error);
      }
    }
    fetchTipos();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PromoBanner />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectedCategory={(id) => setSelectedCategory(id)}
          listTipos={tipos}
        />
        <CoffeeGrid id={selectedCategory} /> {/* Cambiado `selectedCategory` a `id` */}
      </ScrollView>

      {!isAuthenticated ? (
        <RegisterButton />
      ) : (
        <Menu/>
      )}
    </View>
  );
}
