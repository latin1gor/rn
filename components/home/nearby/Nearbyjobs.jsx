import React from 'react'
import { View, Text } from 'react-native'
import {useFetch} from "../../../hooks/useFetch";

const Nearbyjobs = () => {
    const a = useFetch("1")
    console.log(a)
  return (
    <View>
      <Text>Nearbyjobs</Text>
    </View>
  )
}

export default Nearbyjobs