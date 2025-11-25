import LikeMovies from '@/components/LikeMovies'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import useFetch from '@/hooks/useFetch'
import { AllLikeMovies } from '@/services/appwrite'
import { Ionicons } from '@expo/vector-icons'
import { useFocusEffect, useRouter } from 'expo-router'
import React, { useCallback } from 'react'

import SearchBar from '@/components/SearchBar'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const saved = () => {
  const router = useRouter();

  const { data: likesMovies, refetch } = useFetch(AllLikeMovies)
  const filterMoviesLiked = likesMovies?.filter(m => m.islike == true);
  console.log("filter movies: " + filterMoviesLiked)
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  const savedCount = filterMoviesLiked?.length || 0
  const quickFilters = ['Trending now', 'For later', 'Award buzz', 'Late-night picks']
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView className='flex-1 px-5'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 90
        }}
      >

        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-16 mb-5" />
        <Text className='text-white text-4xl font-semibold'>Saved</Text>
        <Text className='text-light-300 text-base mt-1'>
          Tu bóveda personal de historias favoritas y pendientes.
        </Text>

        <View className='bg-secondary/80 border border-white/10 rounded-3xl p-5 mt-6 flex-row items-center'>
          <View className='w-20 h-24 mr-4 rounded-2xl overflow-hidden border border-white/10'>
            <Image source={images.highlight} className='w-full h-full' resizeMode='cover' />
          </View>
          <View className='flex-1'>
            <Text className='text-light-100 text-xs uppercase tracking-[3px]'>Colección activa</Text>
            <Text className='text-white text-lg font-semibold mt-1'>Night marathon</Text>
            <Text className='text-light-300 text-sm'>3 películas pendientes para completar.</Text>
            <View className='w-full h-1.5 bg-white/10 rounded-full mt-3'>
              <View className='h-full rounded-full bg-accent' style={{ width: '60%' }} />
            </View>
          </View>
          <View className='ml-4 items-center'>
            <Text className='text-accent text-3xl font-semibold'>{savedCount}</Text>
            <Text className='text-light-300 text-xs'>guardadas</Text>
          </View>
        </View>

        <View className='flex-row flex-wrap gap-3 mt-6'>
          {quickFilters.map((filter) => (
            <TouchableOpacity key={filter} className='px-4 py-2 rounded-full border border-white/10 bg-white/5'>
              <Text className='text-light-100 text-xs tracking-[1px]'>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className='mt-6'>
          <SearchBar
            onPress={() => router.push('/search')}
            placeholder='Search for a movie'
          />
        </View>

        <View className='mt-8'>
          <View className='flex-row justify-between items-center mb-3'>
            <View>
              <Text className="text-lg text-white font-bold">
                Tu vitrina cinéfila
              </Text>
              <Text className='text-light-300 text-sm'>Organizada por lo último que guardaste.</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/search')} className='flex-row items-center'>
              <Ionicons name='sparkles-outline' size={16} color='#AB8BFF' />
              <Text className='text-accent text-xs font-semibold ml-1'>Descubrir</Text>
            </TouchableOpacity>
          </View>
          <View>
            {filterMoviesLiked?.length != 0 ? (
              <FlatList
                data={filterMoviesLiked}
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
                ListFooterComponent={<View className='h-12' />}
                scrollEnabled={false}
              >
              </FlatList>
            ) : (
              <View className='items-center mt-14'>
                <Image source={images.empty} className='w-48 h-48' resizeMode='contain' />
                <Text className='text-white text-lg font-semibold mt-6'>Tu lista aún está vacía</Text>
                <Text className='text-light-300 text-center mt-2 px-6'>
                  Guarda películas para recibir recomendaciones personalizadas y mantener tu historial fresco.
                </Text>
                <TouchableOpacity
                  onPress={() => router.push('/search')}
                  className='bg-accent mt-6 px-6 py-3 rounded-full'
                >
                  <Text className='text-primary font-semibold'>Buscar películas</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

        </View>
      </ScrollView >
    </View >
  )
}

export default saved