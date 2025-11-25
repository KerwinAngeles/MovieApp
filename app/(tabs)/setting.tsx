import { images } from '@/constants/images'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'

const setting = () => {
  
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute z-0 w-full' />

      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 64, minHeight: '100%' }}
      >
        
      </ScrollView>
    </View>
  )
}

export default setting