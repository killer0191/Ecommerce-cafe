import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';

export default function PromoBanner() {
  return (
    <View style={styles.promoBanner}>
      <Image source={{ uri: '/placeholder.svg?height=150&width=300' }} style={styles.promoImage} />
      <View style={styles.promoTag}>
        <Text style={styles.promoTagText}>Promo</Text>
      </View>
      <View style={styles.promoContent}>
        <Text style={styles.promoTitle}>Compre uno y llévese uno Gratis</Text>
      </View>
    </View>
  );
}
