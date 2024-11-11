import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import styles from '../../../styles/RegisterPageStyles';

export default function PasswordInput({ value, onChangeText }: { value: string; onChangeText: (text: string) => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.passwordInput}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
        {showPassword ? <EyeOff size={20} color="#666" /> : <Eye size={20} color="#666" />}
      </TouchableOpacity>
    </View>
  );
}
