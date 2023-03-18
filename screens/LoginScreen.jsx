import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";

export const LoginScreen = () => {
  return (
    <View className='bg-white h-screen flex items-center'>
      <StatusBar />
      <View className='bg-sky-600 w-11/12 h-3/6 rounded-3xl mt-4  flex justify-center items-center'>
        <Text className='text-white font-bold text-3xl'>Logo</Text>
      </View>

      <Text className='text-black font-extrabold text-4xl mt-7 text-center'>
        Run your business better
      </Text>
      <Text className='w-80 text-center tracking-wide mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum ad
        ratione molestias sint id! Odio impedit eum, atque molestias quidem
        perspiciatis reprehenderit.
      </Text>

      <View className='flex flex-row justify-center w-5/6 h-20 mt-8'>
        <TouchableOpacity className='flex justify-center items-center bg-sky-600 w-44 rounded-tl-2xl rounded-bl-2xl shadow-lg shadow-gray-800'>
          <Text className='text-white font-bold text-lg'>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex justify-center items-center bg-gray-200 w-32 rounded-tr-2xl rounded-br-2xl shadow-lg shadow-gray-800'>
          <Text className='font-bold text-lg'>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
