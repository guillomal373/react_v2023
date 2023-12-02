import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            {/*OPCIÓN 1*/}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"/>
                    <ScreenHeaderBtn iconUrl = {images.profile} dimension = "60%"/>
            </View>
            {/*OPCIÓN 2*/}
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: true,
                    headerLeft: () => {
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"></ScreenHeaderBtn>
                    },
                    headerRight: () => {
                        <ScreenHeaderBtn iconUrl = {icons.profile} dimension = "100%"></ScreenHeaderBtn>
                    },
                    headerTitle: "  "
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding: SIZES.medium}}>
                    <Welcome/>
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;