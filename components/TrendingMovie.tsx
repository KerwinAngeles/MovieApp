import { images } from '@/constants/images'
import MaskedView from '@react-native-masked-view/masked-view'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'


const TrendingMovie = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
    return (
        <Link
            href={`/movies/${movie_id}`}
            asChild
        >
            <TouchableOpacity
                className='w-40 relative pl-5'>
               
                <Image
                    source={{ uri: poster_url }}
                    className='w-32 h-48 rounded-lg'
                    resizeMode='cover'
                />

                <View className='absolute bottom-9 -left-8 px-2 py-1 -z-30 rounded-full'>

                    <MaskedView
                        maskElement={
                            <Text className='font-bold text-white text-8xl'>
                                {index + 1}
                            </Text>
                        }
                    >
                        <Image
                            source={images.rankingGradient}
                            className='size-20'
                            resizeMode='cover'
                        />
                    </MaskedView>

                </View>
                <View className='flex flex-col justify-start items-start'>
                    <Text className='text-sm text-light-100 font-bold mt-2' numberOfLines={2}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default TrendingMovie