import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View className='bg-white h-screen'>
      <Image
        source={require("../assets/undraw_Financial_data_re_p0fl.png")}
        className='w-full h-60'
      />
      <Text className='text-3xl text-center text-blue-700 pt-5'>
        Inicia sesion
      </Text>

      <TextInput
        className=' bg-blue-700 w-80 h-16 mx-auto text-white rounded-xl pl-5 mt-3'
        placeholder='Usuario'
        placeholderTextColor={"#fff"}
      />
      <TextInput
        secureTextEntry
        className=' bg-blue-700 w-80 h-16 mx-auto text-white rounded-xl pl-5 mt-6'
        placeholder='Contrasena'
        placeholderTextColor={"#fff"}
      />

      <TouchableOpacity
        onPress={handlePress}
        className='flex justify-center items-center mx-auto mt-6 bg-blue-500 w-48 h-14 rounded-full'
      >
        <Text className='text-xl text-white'>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};
