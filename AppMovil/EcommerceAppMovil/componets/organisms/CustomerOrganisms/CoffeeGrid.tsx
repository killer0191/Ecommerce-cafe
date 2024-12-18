import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';
import StarIcon from '../../atoms/CustomerAtoms/StarIcon';
import { GetProductsByTipoProducto } from '../../../services/clienteService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';

type CoffeeGridProps = {
  id: number; // `id` puede ser `null` mientras no haya categoría seleccionada.
};

export default function CoffeeGrid({ id }: CoffeeGridProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [products, setProducts] = useState<any[]>([]); // Arreglo para almacenar los productos.
  const [loading, setLoading] = useState<boolean>(false);
  const [imageSource, setImageSource] = useState<any>(null); // Cambiar a tipo `any` para manejar imágenes locales y URLs

  useEffect(() => {
    // Si `id` es null, no intentamos cargar productos.
    if (id === null) return;

    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await GetProductsByTipoProducto(id);
        setProducts(response); // Se espera que `response` sea un arreglo de productos.

        // Aquí se asigna la imagen según el id de la categoría
        switch (id) {
          case 1:
            setImageSource(require("../../../assets/products/chocolate_caliente.jpg"));
            break;
          case 3:
            setImageSource(require("../../../assets/products/americano.png"));
            break;
          case 4:
            setImageSource(require("../../../assets/products/capuchino_helado.png"));
            break;
          case 6:
            setImageSource(require("../../../assets/products/te.png"));
            break;
          default:
            setImageSource(require("../../../assets/DefaultImage.png")); // O cualquier imagen por defecto
            break;
        }

      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando productos...</Text>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay productos para esta categoría.</Text>
      </View>
    );
  }

  return (
    <View style={styles.coffeeGrid}>
      {products.map((item) => (
        <TouchableOpacity key={item.idProducto} style={styles.coffeeCard} onPress={() => navigation.navigate('DetailsPage', {item, imageSource})}>
          <Image source={imageSource} style={styles.coffeeImage} />
          <View style={styles.ratingContainer}>
            <StarIcon />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <Text style={styles.coffeeName}>{item.nombre} ${item.precio}</Text>
          <Text style={styles.coffeeDescription}>{item.descripcion} stock: {item.stock}</Text>
        </TouchableOpacity>
      ))}

    </View>
  );
}
