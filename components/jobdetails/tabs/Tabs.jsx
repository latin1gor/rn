import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'

import styles from './tabs.style'
import {SIZES} from "../../../constants";

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList data={tabs} renderItem={({item}) => (
          <TabButton activeTab={activeTab} name={item} onHandleSearchTab={setActiveTab} />
      )} horizontal showsHorizontalScrollIndicator={false} keyExtractor={item => item} contentContainerStyle={{columnGap: SIZES.small / 2}}/>
    </View>
  )
}

export default Tabs


const TabButton = ({name, activeTab, onHandleSearchTab}) => (
    <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchTab}>
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
)