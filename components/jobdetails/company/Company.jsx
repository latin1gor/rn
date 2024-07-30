import React from 'react'
import {View, Text, Image} from 'react-native'

import styles from './company.style'
import {AVATAR_PLACEHOLDER} from "../../../constants/images";
import {icons} from "../../../constants";

const Company = ({ companyLogo, companyName, jobTitle, location, jobPublisher }) => {
  return (
    <View style={styles.container}>
     <View style={styles.logoBox}>
      <Image source={{uri: companyLogo || AVATAR_PLACEHOLDER}} style={styles.logoImage} />
     </View>
        <View style={styles.jobTitleBox}>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
        </View>
        <View style={styles.companyInfoBox}>
            <Text style={styles.companyName}>{companyName}</Text>
            <View style={styles.locationBox}>
                <Image source={icons.location} resizeMode={"contain"} style={styles.locationImage} />
                <Text style={styles.locationName}>{location}</Text>
            </View>
        </View>
        <View style={styles.publisherContainer}>
            <Text style={styles.publisherName}>Publisher: {jobPublisher}</Text>
        </View>
    </View>
  );
};

export default Company