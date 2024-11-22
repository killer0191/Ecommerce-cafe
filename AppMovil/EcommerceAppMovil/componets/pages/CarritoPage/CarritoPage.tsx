import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { EliminarCarrito, GetCarritoDeUser, GetProductById } from '../../../services/clienteService';

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
  const [products, setProducts] = useState<any[]>([]);
  const [isBuying, setIsBuying] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await GetCarritoDeUser(idUsuario);
        const userProducts = await Promise.all(
          response.map(async (prod: any) => {
            try {
              const product = await GetProductById(prod.idProducto);
              // console.log(product);
              return {
                ...product,
                idCarrito:prod.idCarrito,
                quantity: prod.cantidad,
                image: '../../../assets/products/expreso.png'
              };
            } catch (error) {
              console.error(`Error fetching product ${prod.idProducto}:`, error);
              return null;
            }
          })
        );
        setProducts(userProducts);

      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    }

    fetchProducts();
  }, []);
  
  const updateQuantity = (id: number, change: number) => {
    setProducts(items =>
      items
        .map(item =>
          item.idProducto === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return products
      .reduce((total, item) => total + item.precio * item.quantity, 0)
      .toFixed(2);
  };

  const handleBuyCart = async () => {
    console.log("Comprando carrito");
    setIsBuying(true);
    try {
      for (const product of products) {
        await EliminarCarrito(product.idCarrito);
      }
      // Limpiar el estado del carrito después de eliminar all los productos
      setProducts([]);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error buying cart", error);
    } finally {
      setIsBuying(false);
      // navigation.navigate('HomeCustomerPage');
    }
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
        {products.map(item => (
          <View key={item.idProducto} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.nombre}</Text>
              <Text style={styles.itemPrice}>${item.precio.toFixed(2)}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                onPress={() => updateQuantity(item.idProducto, -1)}
                style={styles.quantityButton}
              >
                <Minus size={20} color="#C17754" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.idProducto, 1)}
                style={styles.quantityButton}
              >
                <Plus size={20} color="#C17754" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => updateQuantity(item.idProducto, -item.quantity)}
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

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleBuyCart}>
        <Text style={styles.checkoutButtonText}
          disabled={isBuying}
        >
          {isBuying ? 'Comprando Espere...':'Proceder al Pago'}
        </Text>
      </TouchableOpacity>

      {/* Modal para el mensaje de éxito */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¡Compra realizada con éxito!</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowSuccessModal(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  },modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#C17754',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
})