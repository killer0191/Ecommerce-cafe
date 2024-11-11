import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';
import StarIcon from '../../atoms/CustomerAtoms/StarIcon';

const COFFEE_ITEMS = [
  {
    id: '1',
    name: 'Cappuccino',
    description: 'Con Chocolate',
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Con leche de avena',
    rating: 4.9,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Con Chocolate',
    rating: 4.5,
    image: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '4',
    name: 'Cappuccino',
    description: 'Con leche de almendra',
    rating: 4.0,
    image: '/placeholder.svg?height=200&width=200'
  },
];

export default function CoffeeGrid() {
  return (
    <View style={styles.coffeeGrid}>
      {COFFEE_ITEMS.map((item) => (
        <TouchableOpacity key={item.id} style={styles.coffeeCard}>
          <Image source={{ uri: item.image }} style={styles.coffeeImage} />
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
