import React from 'react'
import { View, Text } from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello ember</Text>
        <Text style={styles.welcomeMessage}>Hello ember xxxxxxxxxxxxxxxxx</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
          ></TextInput>
        </View>
      </View>
    </View>
  )
}

export default Welcome