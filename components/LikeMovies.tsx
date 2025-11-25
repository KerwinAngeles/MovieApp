import { Link, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
const LikeMovies = ({ movie_id, title, poster_path, islike, popularity }: Likes) => {
    const router = useRouter();

    console.log(islike)
    return (
        <Link href={`/movies/${movie_id}`}
            asChild
        >
            {islike && (
                <TouchableOpacity className="w-32 relative">
                    <Image
                        source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png' }}
                        className='w-32 h-48 rounded-lg'
                        resizeMode='cover'
                    />
                    <View className='flex-row'>
                        <Text className='text-sm text-light-100 font-bold mt-2' numberOfLines={1}>
                            {title}
                        </Text>
                    </View>
                </TouchableOpacity>
                )}
        </Link>
    )
}

export default LikeMovies