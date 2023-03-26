import { TouchableOpacity } from 'react-native';
import { Text, View, TextInput, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

export const LoginScreen = () => {
  return (
    <View className="bg-[#1E1E1E] h-screen flex items-center">
      <Text className="text-white text-3xl font-extrabold pt-10">
        Welcome Back
      </Text>
      <Text className="text-[#A0A0A0] font-extrabold mt-4 w-4/5 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        doloremque illo itaque explicabo nam, voluptatem aspernatur eius
        molestiae
      </Text>
      <TextInput
        className="bg-[#2E2E2E] block mt-5 w-4/5 h-16 rounded-xl pl-3 text-white active:bg-gray-800 focus:outline-none focus:ring focus:ring-[#22D3EE] focus:ring-opacity-50 ]"
        placeholder="Username, Email & Phone number"
        placeholderTextColor="gray"
      />
      <TextInput
        className="bg-[#2E2E2E] block mt-5 w-4/5 h-16 rounded-xl pl-3 text-white  active:bg-gray-800 focus:outline-none focus:ring focus:ring-[#22D3EE] focus:ring-opacity-50 ]  "
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <View className="flex items-end w-4/5 p-4">
        <Text className=" text-[#A0A0A0]">Forgot Password?</Text>
      </View>

      <TouchableOpacity className="flex items-center justify-center bg-[#22D3EE] w-4/5 h-16 rounded-xl mt-2">
        <Text className="text-lg font-bold text-white">Sign in</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-between items-center w-4/5 h-10 mt-4">
        <LinearGradient
          colors={['#22D3EE', 'rgba(196, 196, 196, 0)']}
          className="w-20 h-1"
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
        />
        <Text className="text-[#A0A0A0]">Or sign up With</Text>
        <LinearGradient
          colors={['#22D3EE', 'rgba(196, 196, 196, 0)']}
          className="w-20 h-1"
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>

      <View className="flex flex-row justify-between w-4/5 h-14 mt-8 ">
        <TouchableOpacity className="flex flex-row items-center justify-around rounded-full  w-20 h-20 bg-[#2E2E2E] sm:justify-center">
          <Image
            source={require('../assets/img/Googlelogo.png')}
            className="w-1/2 h-1/2"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center justify-around w-20 h-20 sm:justify-center rounded-full bg-[#2E2E2E]">
          <Image
            source={require('../assets/img/Facbook.png')}
            className="w-1/2 h-1/2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
