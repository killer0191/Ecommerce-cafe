import { View, StyleSheet } from 'react-native'
import globalStyles from '../../../styles/globalStyles'

export default function ProgressBar({ progress = 0.33 }) {
    return (
        <View style={globalStyles.progressBarContainer}>
          <View style={globalStyles.progressIndicator} />
        </View>
      )
}