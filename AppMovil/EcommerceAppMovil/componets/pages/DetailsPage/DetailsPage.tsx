import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Heart, Star, ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { AgregarFav, AgregarProductoCarrito, EliminarFavs, GetFavsUser } from '../../../services/clienteService';
import { useAuth } from '../../context/AuthContext';

type DetailsPageRouteProp = RouteProp<RootStackParamList, 'DetailsPage'>;

export default function DetailsPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<DetailsPageRouteProp>();
  const { item, imageSource } = route.params;
  const { user, isAuthenticated } = useAuth();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [idFavorito, setIdFavorito] = useState<number | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    // Verificar solo si el usuario está autenticado
    if (isAuthenticated && user && item) {
      const checkFavoriteStatus = async () => {
        try {
          const response = await GetFavsUser(user.id);

          const favoriteProducts = response;
          const favorite = favoriteProducts.find((fav: any) => fav.idProducto === item.idProducto);

          if (favorite) {
            setIsFavorited(true);
            setIdFavorito(favorite.idFavorito); // Almacenar el idFavorito
          } else {
            setIsFavorited(false);
            setIdFavorito(null);
          }
        } catch (error) {
          console.error("Error checking favorite status", error);
        }
      };
      checkFavoriteStatus();
    }
  }, [item.idProducto, user, isAuthenticated, isFavorited]);

  const handleFavoriteClick = async () => {
    if (!isAuthenticated) {
      navigation.navigate('LoginPage');
      return;
    }

    if (isFavorited && idFavorito) {
      try {
        const response = await EliminarFavs(idFavorito);
        if (response === 'Favorito eliminado') {
          setIsFavorited(false);
          // console.log("Eliminando del favorito");
        }
      } catch (error) {
        console.error("Error removing from favorites", error);
      }
      return;
    }

    try {
      const favorito = {
        idFavorito: 0,
        idUsuario: user?.id as number,
        idProducto: item.idProducto,
      };

      const response = await AgregarFav(favorito);

      if (response === 'Favorito insertado') {
        // console.log("Agregando a favorito");
        setIsFavorited(true); // Actualizar estado
        setIdFavorito(response.idFavorito); // Asignar el idFavorito retornado
      }
    } catch (error) {
      console.error("Error adding to favorites", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const productData = {
        "idCarrito": 0,
        "cantidad": 1,
        "idUsuario": user?.id as number,
        "idProducto": item.idProducto
      }
      
      const response = await AgregarProductoCarrito(productData);
      console.log(response);
    navigation.navigate('CarritoPage', { idUsuario: user?.id as number })
    } catch (error) {
      console.error("Error checking favorite status", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textSize1}><ChevronLeft /></Text>
        </TouchableOpacity>
        <Text style={styles.textSize1}>Detail</Text>
        <TouchableOpacity onPress={handleFavoriteClick}>
          {isFavorited ? (
            <Heart size={30} color="#d37c39" fill="#d37c39" />
          ) : (
            <Heart size={30} color="gray" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.imageDetail} />
        </View>
        <Text style={styles.textSize1}>{item.nombre}</Text>
        <Text style={styles.textSize2}>{item.descripcion}</Text>
        <View style={styles.ratingContainer}>
          <Star color="#FFD700" fill="#FFD700" />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
        <View style={styles.hr} />
        <Text style={styles.textSize1}>Tamaño</Text>
        <View style={styles.tamanos}>
          <TouchableOpacity
            style={[styles.tamanoButton, selectedSize === 'CH' && styles.tamanoButtonActive]}
            onPress={() => handleSizeSelect('CH')}
          >
            <Text style={styles.tamanoText}>CH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tamanoButton, selectedSize === 'M' && styles.tamanoButtonActive]}
            onPress={() => handleSizeSelect('M')}
          >
            <Text style={styles.tamanoText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tamanoButton, selectedSize === 'L' && styles.tamanoButtonActive]}
            onPress={() => handleSizeSelect('L')}
          >
            <Text style={styles.tamanoText}>L</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.compraContainer}>
        <View style={styles.precioContainer}>
          <Text style={styles.precioLabel}>Precio</Text>
          <Text style={styles.precioText}>${item.precio}</Text>
        </View>
        <TouchableOpacity
          onPress={handleAddToCart}
          style={styles.buyButton}
        >
          <Text style={styles.textBuy}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    gap: 15
  },
  textSize1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textSize2: {
    fontSize: 15,
    fontWeight: '400',
    color: '#a9a9a9'
  },
  body: {
    flexDirection: 'column',
    gap: 10
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageDetail: {
    width: '90%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
  },
  hr: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  tamanos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  tamanoButton: {
    width: 100,
    padding: 8,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c8c8c8',
    textAlign: 'center',
    justifyContent: 'center'
  },
  tamanoButtonActive: {
    borderBlockColor: '#ff984b',
    backgroundColor: '#f9d4b8'
  },
  tamanoText: {
    fontSize: 20,
    color: '#1e1e1e',
    textAlign: 'center',
  },
  compraContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    padding: 10,
  },
  precioContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  precioLabel: {
    fontSize: 20,
    color: '#c8c8c8'
  },
  precioText: {
    fontSize: 20,
    color: '#d37c39',
    fontWeight: 'bold'
  },
  buyButton: {
    width: '100%',
    padding: 25,
    paddingHorizontal: 75,
    backgroundColor: '#d37c39',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBuy: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
