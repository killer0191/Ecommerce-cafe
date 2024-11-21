import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';
import StarIcon from '../../atoms/CustomerAtoms/StarIcon';
import { ScrollView } from 'react-native-gesture-handler';

const COFFEE_ITEMS = [
  {
    id: '1',
    name: 'Cappuccino',
    description: 'Con Chocolate',
    rating: 4.8,
    image: require('../../../assets/Capuchino_con_chocolate.jpg')
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Con leche de avena',
    rating: 4.9,
    image: require('../../../assets/Capuchino_con_leche_de_avena.jpg')
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Helado',
    rating: 4.5,
    image: require('../../../assets/Capuchino_helado.png')
  },
  {
    id: '4',
    name: 'Cappuccino',
    description: 'Con Chocolate',
    rating: 4.8,
    image: require('../../../assets/Capuchino_con_chocolate.jpg')
  },
  {
    id: '5',
    name: 'Cappuccino',
    description: 'Con leche de avena',
    rating: 4.9,
    image: require('../../../assets/Capuchino_con_leche_de_avena.jpg')
  },
  {
    id: '6',
    name: 'Cappuccino',
    description: 'Helado',
    rating: 4.5,
    image: require('../../../assets/Capuchino_helado.png')
  },
  {
    id: '7',
    name: 'Cappuccino',
    description: 'Con Chocolate',
    rating: 4.8,
    image: require('../../../assets/Capuchino_con_chocolate.jpg')
  },
  {
    id: '8',
    name: 'Cappuccino',
    description: 'Con leche de avena',
    rating: 4.9,
    image: require('../../../assets/Capuchino_con_leche_de_avena.jpg')
  },
  {
    id: '9',
    name: 'Cappuccino',
    description: 'Helado',
    rating: 4.5,
    image: require('../../../assets/Capuchino_helado.png')
  }
];

export default function CoffeeGrid () {
  return (
    <View style={styles.coffeeGrid}>
      {COFFEE_ITEMS.map((item) => (
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
