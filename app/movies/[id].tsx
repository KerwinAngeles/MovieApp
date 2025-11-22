import { icons } from '@/constants/icons';
import useFetch from '@/hooks/useFetch';
import { fetchMoviesDetail } from '@/services/api';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface MovieInfoProp {
  label: string;
  value: string | number | null
}

const MovieInfo = ({ label, value }: MovieInfoProp) => {
  return (
    <View className='flex-col items-start justify-start mt-5'>
      <Text className='text-light-100 font-normal text-sm'>
        {label}
      </Text>
      <Text className='text-light-100 font-bold text-sm mt-2 '>
        {value || 'N/A'}
      </Text>
    </View>
  )

}

const MovieDetails = () => {

  const { id } = useLocalSearchParams();
  const { data: movie, loading } = useFetch(() => fetchMoviesDetail(id as string))

  return (
    <View className='bg-primary flex-1'>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80
        }}
      >
        <View>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
            className='w-full h-[550px]'
            resizeMode='cover'
          >
          </Image>
        </View>

        <View className='mt-5 flex-col justify-start px-5'>
          <Text className='text-white font-bold text-xl'>
            {movie?.title}
          </Text>
          <View className='flex-row items-center gap-x-2 mt-2'>
            <Text className='text-light-300 text-sm'>
              {movie?.release_date?.split('-')[0]}
            </Text>
            <Text className='text-light-300 text-sm'>
              {movie?.runtime} m
            </Text>
          </View>
          <View className='w-auto flex-row items-center bg-dark-200 px-2 py-1 rounded-md gap-x-1 mt-2'>
            <Image source={icons.star} className='size-4' />
            <Text className='text-white font-bold text-sm'>
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className='text-light-100 text-sm'>
              ({movie?.vote_count} votes)
            </Text>
          </View>
          <MovieInfo label='Overview' value={movie?.overview} />
          <MovieInfo label='Genres' value={movie?.genres?.map((g: { name: string }) => g.name).join(' - ') || 'N/A'} />
          <View className='flex flex-row justify-between w-1/2'>
            <MovieInfo label='Bugdet' value={`$${movie?.budget / 1_000_000} million`} />
            <MovieInfo label='Revenue' value={`$${Math.round(movie?.revenue) / 1_000_000}`} />
          </View>
          <MovieInfo label='Production Companies' value={movie?.production_companies.map((c: { name: string }) => c.name).join(' - ') || 'N/A'} />
        </View>
      </ScrollView>
      <TouchableOpacity className='absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row justify-center z-50'
        onPress={router.back}
      >
        <Image source={icons.arrow} className='size-5 mr-1 mt-0.5 rotate-180' tintColor='#fff' />
        <Text className='text-white font-semibold text-base'>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieDetails