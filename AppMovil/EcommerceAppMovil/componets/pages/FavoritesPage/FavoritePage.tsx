import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import { ChevronLeft, Heart } from 'lucide-react-native';
import { GetFavsUser, GetProductById } from '../../../services/clienteService';
import { useAuth } from '../../context/AuthContext';

type Product = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  rating: number;
};

export default function FavoritePage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [imageSource, setImageSource] = useState<any>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchFavorites = async ()=> {
      try {
        const response = await GetFavsUser(user?.id as number);
        const favoriteProducts = await Promise.all(
          response.map(async (fav: any) => {
            const product = await GetProductById(fav.idProducto);
            return { ...product, idFavorito: fav.idFavorito}
          })
        )
        // console.log(favoriteProducts);
        const listFav: Product[] = favoriteProducts;
        // console.log(listFav);
        setFavorites(listFav);

      } catch (error) {
        console.error("Error checking favorite status", error);
      }
    }

    fetchFavorites();
  }, []);

  useEffect(() => {
    setImageSource(require('../../../assets/products/expreso.png'));
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('DetailsPage', { item, imageSource })}
    >
      <Image source={imageSource} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.nombre}</Text>
        <Text style={styles.itemDescription}>{item.descripcion}</Text>
        <View style={styles.itemFooter}>
          <Text style={styles.itemPrice}>${item.precio}</Text>
          <View style={styles.itemRating}>
            <Heart color="#FFD700" fill="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text ><ChevronLeft /></Text>
        </TouchableOpacity>
        <Text style={styles.title}>Favoritos</Text>
      </View>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    color: '#e38945',
    fontWeight: 'bold',
  },
  itemRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
  },
});
