import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../../styles/HomeCustomerPageStyles';

export default function PromoBanner() {
  return (
    <View style={styles.promoBannerContainer}>
      <View style={styles.halfTop} />
      <View style={styles.halfBottom} />
      <View style={styles.promoBanner}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.eFdrwmzBRktpWO-WvwzrGgHaHa?rs=1&pid=ImgDetMain'
          }}
          style={styles.promoImage} />
        <View style={styles.promoTag}>
          <Text style={styles.promoTagText}>Promo</Text>
        </View>
        <View style={styles.promoContent}>
          <Text style={styles.promoTitle}>Compre uno</Text>
          <Text style={styles.promoTitle}>Y llévese uno Gratis</Text>
        </View>
      </View>
    </View>
  );
}
