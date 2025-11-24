import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const TopRateCard = ({ movie, index }: TopRateMovieProps) => {
    return (
        <Link
            href={`/movies/${movie.id}`}
            asChild
        >
            <TouchableOpacity className='w-32 relative'>
                <Image
                    source={{ uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png' }}
                    className='w-32 h-48 rounded-lg'
                    resizeMode='cover'
                />
                
                <View className='flex-row'>
                    <Text className='text-sm text-light-100 font-bold mt-2' numberOfLines={1}>
                        {movie.title}
                    </Text>
                </View>
                <View className='flex flex-row justify-between'>
                    <Text className='text-sm text-light-300 font-bold mt-2' numberOfLines={1}>
                        {movie.vote_average.toFixed(1)}
                    </Text>
                     <Text className='text-sm text-light-300 font-bold mt-2' numberOfLines={1}>
                        {movie.popularity.toFixed(2)}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default TopRateCard