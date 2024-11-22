import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { GetCarritoDeUser } from '../../../services/clienteService';

// Simulated cart items
const initialCartItems = [
  { id: 1, name: 'Cappuccino', price: 4.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Latte', price: 3.99, quantity: 2, image: '/placeholder.svg?height=80&width=80' },
  { id: 3, name: 'Espresso', price: 2.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
];

type CarritoPageRouteProp = RouteProp<RootStackParamList, 'CarritoPage'>;

export default function CarritoPage() {
  const route = useRoute<CarritoPageRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { idUsuario } = route.params;
  async function GetProductos() {
    try{
        let response = await GetCarritoDeUser(idUsuario);
        console.log(response);
    }catch(error:any){
        console.error(error);
    }
  }

  GetProductos();

  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Carrito de Compras</Text>
      </View>

      <ScrollView style={styles.itemList}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, -1)}
                style={styles.quantityButton}
              >
                <Minus size={20} color="#C17754" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, 1)}
                style={styles.quantityButton}
              >
                <Plus size={20} color="#C17754" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, -item.quantity)}
              style={styles.deleteButton}
            >
              <Trash2 size={20} color="#FF4444" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.orderSummary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryPrice}>${getTotalPrice()}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Impuestos</Text>
          <Text style={styles.summaryPrice}>$0.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryTextBold}>Total</Text>
          <Text style={styles.summaryPriceBold}>${getTotalPrice()}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceder al Pago</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  itemList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  quantityButton: {
    padding: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 8,
  },
  deleteButton: {
    padding: 8,
  },
  orderSummary: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 16,
    color: '#666',
  },
  summaryTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryPrice: {
    fontSize: 16,
    color: '#666',
  },
  summaryPriceBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#C17754',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})