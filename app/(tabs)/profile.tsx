import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
const profile = () => {
  const shortcuts = [
    { label: 'Watchlist', value: '18', icon: 'bookmark-outline' },
    { label: 'Reviews', value: '47', icon: 'chatbubble-ellipses-outline' },
    { label: 'Sessions', value: '142', icon: 'play-outline' },
  ]

  const essentials = [
    { title: 'Preferencias', hint: 'Géneros, idiomas y subtítulos' },
    { title: 'Dispositivos', hint: 'Vincula o desconecta equipos' },
    { title: 'Recordatorios', hint: 'Alertas de estrenos y festivales' },
  ]

  const queue = [
    { id: '1', title: 'Midnight Sketches', status: 'En progreso' },
    { id: '2', title: 'Los que vuelven', status: 'Pendiente' },
    { id: '3', title: 'Orbitas rotas', status: 'Agendada' },
  ]

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute z-0 w-full" />

      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
          minHeight: '100%'
        }}
      ><Image source={icons.logo} className="w-12 h-10 mx-auto mt-24 mb-5" />
        <View className='mt-16 bg-secondary/70 border border-white/5 rounded-3xl p-6'>
          <View className='flex-row items-center'>
            <Image source={images.highlight} className='w-16 h-16 rounded-2xl' />
            <View className='ml-4 flex-1'>
              <Text className='text-light-100 text-xs uppercase tracking-[3px]'>perfil</Text>
              <Text className='text-white text-2xl font-semibold mt-1'>Kerwin Angeles</Text>
              <Text className='text-light-300 text-sm'>Miembro desde 2021</Text>
            </View>
            <TouchableOpacity className='px-4 py-2 rounded-full border border-white/10'>
              <Text className='text-light-100 text-xs font-semibold tracking-[1px]'>Editar</Text>
            </TouchableOpacity>
          </View>

          <View className='flex-row mt-6'>
            {shortcuts.map((item) => (
              <View key={item.label} className='flex-1 items-center'>
                <View className='bg-white/5 rounded-2xl p-3 border border-white/5'>
                  <Ionicons name={item.icon as any} size={18} color='#AB8BFF' />
                </View>
                <Text className='text-white text-lg font-semibold mt-2'>{item.value}</Text>
                <Text className='text-light-300 text-xs'>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='mt-8 bg-dark-200 rounded-3xl p-5 border border-white/5'>
          <Text className='text-white text-lg font-semibold'>Sesión en progreso</Text>
          <Text className='text-light-300 text-sm mt-1'>“Dune: Part Two” · 2h 46m</Text>
          <View className='w-full h-2 rounded-full bg-white/10 mt-5'>
            <View className='h-full rounded-full bg-accent' style={{ width: '54%' }} />
          </View>
          <View className='flex-row justify-between mt-3'>
            <Text className='text-light-300 text-xs'>1h 28m vistos</Text>
            <Text className='text-light-300 text-xs'>1h 18m restantes</Text>
          </View>
          <View className='flex-row gap-3 mt-4'>
            <TouchableOpacity className='flex-1 border border-white/15 rounded-2xl py-3'>
              <Text className='text-white text-center font-semibold text-sm'>Ver ficha</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1 bg-accent rounded-2xl py-3'>
              <Text className='text-primary text-center font-semibold text-sm'>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className='mt-8 bg-secondary/60 border border-white/10 rounded-3xl p-5'>
          <Text className='text-white text-lg font-semibold mb-1'>Accesos rápidos</Text>
          <Text className='text-light-300 text-sm mb-4'>Lo básico para mantener tu perfil afinado.</Text>

          {essentials.map((item) => (
            <TouchableOpacity
              key={item.title}
              className='flex-row justify-between items-center py-3 border-b border-white/5 last:border-b-0'
            >
              <View>
                <Text className='text-white font-semibold'>{item.title}</Text>
                <Text className='text-light-300 text-sm'>{item.hint}</Text>
              </View>
              <Ionicons name='chevron-forward' size={18} color='#A8B5DB' />
            </TouchableOpacity>
          ))}
        </View>

        <View className='mt-8 mb-4'>
          <Text className='text-white text-lg font-semibold'>Próximas películas</Text>
          <Text className='text-light-300 text-sm mb-4'>Tu fila personal de títulos para ver.</Text>

          {queue.map((movie) => (
            <View key={movie.id} className='flex-row items-center bg-white/5 rounded-2xl p-4 mb-3 border border-white/5'>
              <View className='w-12 h-12 rounded-xl bg-white/10 items-center justify-center'>
                <Ionicons name='film-outline' size={18} color='#AB8BFF' />
              </View>
              <View className='flex-1 ml-3'>
                <Text className='text-white font-semibold'>{movie.title}</Text>
                <Text className='text-light-300 text-xs'>{movie.status}</Text>
              </View>
              <TouchableOpacity className='px-3 py-1 rounded-full border border-white/10'>
                <Text className='text-light-100 text-xs'>Gestionar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default profile
