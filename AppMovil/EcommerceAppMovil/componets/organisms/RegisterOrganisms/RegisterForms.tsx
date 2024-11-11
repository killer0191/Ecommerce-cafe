import React, { useState } from 'react';
import { View } from 'react-native';
import Label from '../../atoms/TextComponent/Label';
import InputField from '../../atoms/TextComponent/InputFild';
import PasswordInput from '../../molecules/RegisterMolecules/PasswordInput';
import CheckboxWithLabel from '../../atoms/ButtonComponent/CheckboxWithLabel';
import SubmitButton from '../../atoms/ButtonComponent/SubmitButton';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', phone: '', address: '' });
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <View style={{ padding: 16 }}>
      <Label text="Usuario" />
      <InputField placeholder="Gabriel" value={formData.username} onChangeText={(text) => setFormData({ ...formData, username: text })} />
      
      <Label text="E-mail" />
      <InputField placeholder="email@gmail.com" value={formData.email} onChangeText={(text) => setFormData({ ...formData, email: text })} />

      <Label text="Password" />
      <PasswordInput value={formData.password} onChangeText={(text) => setFormData({ ...formData, password: text })} />

      <Label text="Phone Number" />
      <InputField placeholder="+62 875 875 098" value={formData.phone} onChangeText={(text) => setFormData({ ...formData, phone: text })} />

      <Label text="Dirección" />
      <InputField placeholder="Betunia #404" value={formData.address} onChangeText={(text) => setFormData({ ...formData, address: text })} />

      <CheckboxWithLabel checked={isChecked} onChange={() => setIsChecked(!isChecked)} />

      <SubmitButton onPress={handleSubmit} disabled={!isChecked} />
    </View>
  );
}
