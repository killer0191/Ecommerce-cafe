import React from 'react';
import { Text, TextProps } from 'react-native';

export default function TextComponent({ style, ...props }: TextProps) {
  return <Text style={style} {...props} />;
}
