import React from 'react'
import {View, Text, FlatList} from 'react-native'

import styles from './specifics.style'

const Specifics = ({title, points}) => {
  return (
    <View  style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.pointsContainer} >
            {points && points.map((p, i) => (
                <View style={styles.pointWrapper} key={p + i}>
                    <Text style={styles.pointDot} />
                    <Text style={styles.pointText}>{p}</Text>
                </View>
            ))}
        </View>
    </View>
  )
}

export default Specifics