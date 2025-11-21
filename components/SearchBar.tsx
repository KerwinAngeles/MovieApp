import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    onPress?: () => void;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({placeholder, value, onChangeText, onPress }: Props) => {
  return (
    <View className='flex-row self-center items-center bg-dark-200 rounded-full px-4 py-1'>
      <Image source={icons.search} resizeMode='contain' tintColor='#ab8bff'/>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white'
        onPress={onPress}
      />
    </View>
  )
}

export default SearchBar