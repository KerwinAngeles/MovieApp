import LikeMovies from '@/components/LikeMovies'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import useFetch from '@/hooks/useFetch'
import { AllLikeMovies } from '@/services/appwrite'
import { useFocusEffect } from 'expo-router'
import React, { useCallback } from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
const saved = () => {
  
  const { data: likesMovies, refetch } = useFetch(AllLikeMovies)
  useFocusEffect(
    useCallback(() => {
      refetch();   // 💥 cuando la pantalla vuelve a enfocarse
    }, [])
  );
  console.log("Likes Movies: " + likesMovies)
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView className='flex-1 px-5'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10
        }}
      >

        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-20" />
        {likesMovies && (
          <View>
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Your list of save movies 
            </Text>
            <FlatList
              data={likesMovies}
              renderItem={({ item }) => (
                <LikeMovies
                  {...item}
                />
              )}
              keyExtractor={(item) => item.movie_id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap: 20,
                paddingRight: 5,
                marginBottom: 10
              }}
              scrollEnabled={false}
            >
            </FlatList>
          </View>

        )}
      </ScrollView>


    </View>
  )
}

export default saved