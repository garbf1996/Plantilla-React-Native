import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

export const Welcome = () => {
  const router = useNavigation();

  const handleLogin = () => {
    router.navigate('Login');
  };
  const handleRegister = () => {
    router.navigate('Dashboard');
  };

  return (
    <SafeAreaView>
      <StatusBar
        style="light"
        animated={true}
        backgroundColor="#1E1E1E"
        networkActivityIndicatorVisible={true}
      />
      <View className="bg-black h-screen flex items-center">
        <StatusBar />
        <View className="bg-[#1C1C1C] w-80 h-80 rounded-3xl mt-4 flex justify-center items-center">
          <Image
            className="w-80 h-80 rounded-xl"
            source={require('../assets/logo.png')}
          />
        </View>

        <Text className="text-[#EDEDED] font-extrabold text-4xl mt-4 text-center">
          Run your business better
        </Text>
        <Text className="w-80 text-[#A0A0A0] text-center tracking-wide mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum ad
          ratione molestias sint id! Odio impedit eum, atque molestias quidem
          perspiciatis reprehenderit.
        </Text>

        <View className="flex flex-row justify-center w-5/6 h-20 mt-6">
          <TouchableOpacity
            onPress={handleLogin}
            className="flex justify-center items-center bg-[#2E2E2E] w-44 rounded-tl-2xl rounded-bl-2xl "
          >
            <Text className="text-[#EDEDED] font-bold text-lg">Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex justify-center items-center bg-[#F3F3F3] w-32 rounded-tr-2xl rounded-br-2xl"
            onPress={handleRegister}
          >
            <Text className="font-bold text-lg text-[#232323]">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
