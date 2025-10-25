import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

const TabIcon = ({focused, title, icon} : {
  focused: boolean,
  title: string,
  icon: ImageSourcePropType
}) => {
  if(focused){
    return ( <ImageBackground
      source={images.highlight}
      className='flex flex-row w-full flex-1 min-w-[114px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
    >
      <Image source={icon} className='size-5' tintColor="#151312" />
      <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
    </ImageBackground>)
  }

  return (
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image source={icon} className='size-5' tintColor="#A8B5DB" />
    </View>
  )
  
}

const _layout = () => {
  return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          },

          tabBarStyle: {
            backgroundColor: '#0f0d23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 0,
            borderColor: '0f0d23'

          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={
            {
                title: 'Home',
                 headerShown: false,
                  tabBarIcon: ({focused}) => (
                    <TabIcon
                      focused={focused}
                      title="Home"
                      icon={icons.home}
                    />
                  ) 
            }}
        />

        <Tabs.Screen
          name="saved"
          options={
            {
                title: 'Saved',
                 headerShown: false,
                 tabBarIcon: ({focused}) => (
                    <TabIcon
                      focused={focused}
                      title="Saved"
                      icon={icons.save}
                    />
                  ) 
            }}
        />

         <Tabs.Screen
          name="search"
          options={
            {
                 title: 'Search',
                 headerShown: false,
                 tabBarIcon: ({focused}) => (
                    <TabIcon
                      focused={focused}
                      title="Search"
                      icon={icons.search}
                    />
                  ) 
            }}
        />

         <Tabs.Screen
          name="profile"
          options={
            {
                title: 'Profile',
                 headerShown: false,
                 tabBarIcon: ({focused}) => (
                    <TabIcon
                      focused={focused}
                      title="Profile"
                      icon={icons.person}
                    />
                  ) 
            }}
        />
      </Tabs>
  )
}

export default _layout