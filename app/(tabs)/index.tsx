import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TopRateCard from "@/components/TopRateCard";
import TrendingMovie from "@/components/TrendingMovie";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovieByGenres, fetchMovies, fetchToRateMovie } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [actionMovie, setActionMovie] = useState();
  const [adventureMovie, setAdventureMovie] = useState();
  const [thrillerMovie, setThrillerMovie] = useState();
  const [comedyMovie, setComedyMovie] = useState();
  const [horrorMovie, setHorrorMovie] = useState();

  useEffect(() => {
    loadGenres();
  }, []);

  const loadGenres = async () => {
    const action = await fetchMovieByGenres(28);
    const adventure = await fetchMovieByGenres(12);
    const thriller = await fetchMovieByGenres(53);
    const comedy = await fetchMovieByGenres(35);
    const horror = await fetchMovieByGenres(27);
    setActionMovie(action.results);
    setAdventureMovie(adventure.results);
    setThrillerMovie(thriller.results);
    setComedyMovie(comedy.results);
    setHorrorMovie(horror.results);
  }

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError
  } = useFetch(getTrendingMovies);


  const {
    data: topRateMovie,
    loading: topRateMovieLoading,
    error: topRateMovieError
  } = useFetch(fetchToRateMovie)

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
                  Popular Movies <Ionicons name="star" size={14} color="yellow" />
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



            {topRateMovie?.results && (
              <View>
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  TOP 5 Movies All Time <Ionicons name="star" size={14} color="yellow" />
                </Text>

                <FlatList 
                  data={topRateMovie?.results?.slice(0, 5)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TopRateCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  className="mb-4 mt-3"
                >

                </FlatList>
              </View>
            )}

            {actionMovie && (
              <View>
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Action movies that thrill
                </Text>

                <FlatList
                  data={actionMovie}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TopRateCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  className="mb-4 mt-3"
                >

                </FlatList>
              </View>
            )}

            {adventureMovie && (
              <View>
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Adventure Movies
                </Text>

                <FlatList
                  data={adventureMovie}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TopRateCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  className="mb-4 mt-3"
                >

                </FlatList>
              </View>
            )}

            {thrillerMovie && (
              <View>
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Thrillers that grip you
                </Text>

                <FlatList
                  data={thrillerMovie}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TopRateCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  className="mb-4 mt-3"
                >

                </FlatList>
              </View>
            )}

            {comedyMovie && (
              <View>
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Movies to watch with family
                </Text>

                <FlatList
                  data={comedyMovie}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TopRateCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  className="mb-4 mt-3"
                >

                </FlatList>
              </View>
            )}

            {horrorMovie && (
              <View>
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Terrifying horror movies that will give you chills
                </Text>

                <FlatList
                  data={horrorMovie}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  renderItem={({ item, index }) => (
                    <TopRateCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
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
