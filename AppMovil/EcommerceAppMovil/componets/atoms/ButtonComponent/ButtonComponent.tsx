import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import globalStyles from '../../../styles/globalStyles'
import { GestureResponderEvent } from 'react-native'

interface ButtonComponentProps {
  title: string
  onPress: (event: GestureResponderEvent) => void
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent
