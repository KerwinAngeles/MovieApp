import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from 'expo-router';
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();
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
          <View className="flex-1">
            <SearchBar 
              onPress={() => router.push('/search')}
              placeholder='Search for a movie'
            />
          </View>
      </ScrollView>
    </View>
  );
}
 