import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

export const LoginScreen = () => {
  return (
    <View className='bg-white h-screen flex items-center'>
      <StatusBar />
      <View className='bg-yellow-400 w-11/12 h-3/6 rounded-3xl mt-4'></View>

      <Text className='text-black font-extrabold text-2xl'>
        Run your business better
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum ad
        ratione molestias sint id! Odio impedit eum, atque molestias quidem
        perspiciatis reprehenderit magnam, quasi aliquam dolorum voluptatibus
        adipisci suscipit.
      </Text>

      <TouchableOpacity>
        <Text>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
