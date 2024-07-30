import { View, ScrollView, SafeAreaView, Text} from "react-native";
import {useState} from "react";
import {Stack, useRouter} from "expo-router";
import { COLORS, icons, images, SIZES} from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn } from '../components'
import Welcome from "../components/home/welcome/Welcome";
const Home = () => {
    const router = useRouter()
    const [state, setState] = useState()
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={{flex: 1,
               padding: SIZES.medium}}>

                   <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={() => {
                       if (searchTerm) {
                           router.push(`/search/${searchTerm}`)
                       }
                   }}
                   />
                   <Popularjobs/>
                   <Nearbyjobs />

               </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home