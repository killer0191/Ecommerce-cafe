import React from 'react';
import { Image, ImageProps } from 'react-native';

export default function ProfileImage(props: ImageProps) {
  return <Image style={{ width: 40, height: 40, borderRadius: 20 }} {...props} />;
}
