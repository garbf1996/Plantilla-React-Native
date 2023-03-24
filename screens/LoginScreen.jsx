import { TouchableOpacity } from "react-native";
import { Text, View, TextInput, Image } from "react-native";

export const LoginScreen = () => {
  return (
    <View className='bg-black h-screen flex items-center'>
      <Text className='text-white text-3xl font-extrabold pt-10'>
        Welcome Back
      </Text>
      <Text className='text-white  font-extrabold pt-10'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        doloremque illo itaque explicabo nam, voluptatem aspernatur eius
        molestiae
      </Text>
      <TextInput
        className='bg-[#2E2E2E] block mt-5 w-4/5 h-16 rounded-xl pl-3 text-white active:bg-gray-800 focus:outline-none focus:ring focus:ring-[#22D3EE] focus:ring-opacity-50 ]'
        placeholder='Username, Emzail & Phone number'
        placeholderTextColor='gray'
      />
      <TextInput
        className='bg-[#2E2E2E] block mt-5 w-4/5 h-16 rounded-xl pl-3 text-white  active:bg-gray-800 focus:outline-none focus:ring focus:ring-[#22D3EE] focus:ring-opacity-50 ]  '
        placeholder='Password'
        placeholderTextColor='gray'
        secureTextEntry={true}
      />
      <View className='flex items-end w-4/5 p-4'>
        <Text className=' mt-5 text-white'>Forgot Password?</Text>
      </View>

      <TouchableOpacity className='flex items-center justify-center bg-[#22D3EE] w-4/5 h-16 rounded-xl'>
        <Text className='text-lg font-bold text-white'>Sign in</Text>
      </TouchableOpacity>

      <View className='flex flex-row justify-center w-4/5 h-20 mt-8'>
        <Text className='text-white'>or sing with</Text>
      </View>

      <View className='flex flex-row justify-center w-4/5 h-20 mt-8'>
        <TouchableOpacity className=' flex sm:justify-center space-x-7 '>
          <Text className='text-white'>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
