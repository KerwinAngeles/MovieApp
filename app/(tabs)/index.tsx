import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingMovie from "@/components/TrendingMovie";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import { useRouter } from 'expo-router';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError
  } = useFetch(getTrendingMovies);

  const {
    data: movie,
    loading: movieLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: ''
  }));


  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView className="flex-1 px-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5" />

        {movieLoading ? (
          <ActivityIndicator
            size='large'
            color='#0000ff'
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError.message}</Text>
        ) : (
          <View>
            <SearchBar
              onPress={() => router.push('/search')}
              placeholder='Search for a movie'
            />

            {trendingMovies && (
              <View>
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Popular Movies
                </Text>

                <FlatList
                  data={trendingMovies}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TrendingMovie
                      movie={item}
                      index={index}
                    />
                  )}
                  keyExtractor={(item) => item.movie_id.toString()}
                  className="mb-4 mt-3"
                >

                </FlatList>
              </View>
            )}
            <>



              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={movie}
                renderItem={({ item }) => (
                  <MovieCard
                    {...item}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}

              ></FlatList>
            </>

          </View>
        )}
      </ScrollView>
    </View>
  );
}
