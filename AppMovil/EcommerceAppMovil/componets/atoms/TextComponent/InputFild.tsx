import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from '../../../styles/RegisterPageStyles';

interface InputFieldProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function InputField({ placeholder, value, onChangeText, ...props }: InputFieldProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
}
