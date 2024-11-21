import React from 'react';
import { View, Text } from 'react-native';
import BackButton from '../molecules/RegisterMolecules/BackButton';
import LoginLink from '../molecules/RegisterMolecules/LoginLink';
import RegisterForm from '../organisms/RegisterOrganisms/RegisterForms';
import styles from '../../styles/HomeCustomerPageStyles';

export default function RegisterTemplate({ onBackPress, onLoginPress }: { onBackPress: () => void; onLoginPress: () => void }) {
  return (
    <View>
      <BackButton onPress={onBackPress} />
      
      <LoginLink onPress={onLoginPress} />
      <RegisterForm navigation={navigation}/>
    </View>
  );
}
