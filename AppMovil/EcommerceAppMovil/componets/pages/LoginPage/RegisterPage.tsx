import React from 'react';
import { ScrollView } from 'react-native';
import RegisterTemplate from '../../templates/RegisterTemplate';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

type RegisterPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RegisterPage'
>;

type Props = {
  navigation: RegisterPageNavigationProp;
};

export default function RegisterPage({ navigation }: Props) {
  return (
    <ScrollView>
      <RegisterTemplate 
        onBackPress={() => navigation.goBack()}
        onLoginPress={() => navigation}
      />
    </ScrollView>
  );
}
