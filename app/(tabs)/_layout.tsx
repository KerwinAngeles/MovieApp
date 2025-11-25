import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
type IoniconName = React.ComponentProps<typeof Ionicons>["name"];
const TabIcon = ({ focused, title, icon }: {
  focused: boolean,
  title: string,
  icon: IoniconName
}) => {
  if (focused) {
    return (<View
      className='flex flex-col w-full flex-1 min-w-[100px] min-h-16 mt-8 justify-center items-center rounded-full overflow-hidden'
    >

      <Ionicons name={icon} size={24} color="#ffffff" />
    </View>)
  }

  return (
    <View className='flex flex-col flex-1 w-full min-w-[100px] min-h-16 justify-center items-center mt-8 rounded-full overflow-hidden'>
      <Ionicons name={icon} size={24} color="#151312" />
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
          marginHorizontal: 60,
          marginBottom: 20,
          height: 65,
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
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Home"
                icon="home"
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
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Search"
                icon="search"
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
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title="Saved"
                icon="heart"
              />
            )
          }}
      />
    </Tabs>
  )
}

export default _layout