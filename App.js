import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppLoading } from 'expo'
import {Asset} from 'expo-asset'
import * as Font from 'expo-font'
import {Ionicons} from '@expo/vector-icons'
import Stack from './navigations/Stack'
import {NavigationContainer} from '@react-navigation/native'


// 캐시 이미지 처리
const cacheImages = images =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync
    }
  })


// 캐시 폰트 처리
const cacheFonts = fonts => (
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)])
)
  

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ])
    const fonts = cacheFonts([Ionicons.font])
    return Promise.all([...images, ...fonts])
  }

  const loadingFinished = () => setIsReady(true)

  return (

    isReady ? (
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
    ) : (
      <AppLoading
          startAsync={loadAssets}
          onFinish={loadingFinished}
          onError={console.error}
      />
    )
  )
}
