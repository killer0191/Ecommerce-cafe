import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';
import { Heart, Home, ShoppingCart } from 'lucide-react-native';

export default function Menu() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('HomeCustomerPage')}>
        <Home />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('HomeCustomerPage')}>
        <ShoppingCart />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button} 
        onPress={() => navigation.navigate('HomeCustomerPage')}>
        <Heart />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
    flexDirection: 'row',
    color:'#1e1e1e'
  },
});
