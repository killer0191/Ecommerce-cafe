import React from 'react'
import { View } from 'react-native'
import globalStyles from '../../../styles/globalStyles'
import HeroSection from '../../organisms/HeroSection/HeroSection'

export default function HomePage() {
  return (
    <View style={globalStyles.page}>
      <HeroSection />
    </View>
  )
}
