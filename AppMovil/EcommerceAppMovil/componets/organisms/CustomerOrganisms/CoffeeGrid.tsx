import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';
import StarIcon from '../../atoms/CustomerAtoms/StarIcon';
import { ScrollView } from 'react-native-gesture-handler';

const COFFEE_ITEMS = [
  { id: '1', name: 'Cappuccino', description: 'Con Chocolate', rating: 4.8, image: require('../../../assets/Capuchino_con_chocolate.jpg'), category: 'Cappuccino' },
  { id: '2', name: 'Cappuccino', description: 'Con leche de avena', rating: 4.9, image: require('../../../assets/Capuchino_con_leche_de_avena.jpg'), category: 'Cappuccino' },
  { id: '3', name: 'Cappuccino', description: 'Helado', rating: 4.5, image: require('../../../assets/Capuchino_helado.png'), category: 'Cappuccino' },
  { id: '4', name: 'Machiato', description: 'Con Caramelo', rating: 4.7, image: require('../../../assets/Capuchino_con_chocolate.jpg'), category: 'Machiato' },
  { id: '5', name: 'Latte', description: 'Con Vainilla', rating: 4.8, image: require('../../../assets/Capuchino_con_leche_de_avena.jpg'), category: 'Latte' },
  { id: '6', name: 'Americano', description: 'Clásico', rating: 4.6, image: require('../../../assets/Capuchino_con_chocolate.jpg'), category: 'Americano' },];

type CoffeeGridProps = {
  selectedCategory: string;
}

export default function CoffeeGrid({ selectedCategory }: CoffeeGridProps) {
  const filteredItems = COFFEE_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <View style={styles.coffeeGrid}>
      {filteredItems.map((item) => (
        <TouchableOpacity key={item.id} style={styles.coffeeCard}>
          <Image source={item.image} style={styles.coffeeImage} />
          <View style={styles.ratingContainer}>
            <StarIcon />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Text style={styles.coffeeName}>{item.name}</Text>
          <Text style={styles.coffeeDescription}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
