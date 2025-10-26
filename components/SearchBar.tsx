import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    placeholder: string,
    onPress?: () => void;
}

const SearchBar = ({onPress, placeholder}: Props) => {
  return (
    <View className='flex-row self-center items-center bg-dark-200 rounded-full px-10 py-5'>
      <Image source={icons.search} className='size-5 px-5' resizeMode='contain' tintColor='#ab8bff'/>
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar