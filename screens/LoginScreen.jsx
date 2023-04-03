import { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Google } from '../assets/img/Google';
import { Facebook } from '../assets/img/Facebook';
import { StatusBar } from 'expo-status-bar';

// WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {
  // const [token, setToken] = useState('');
  // const [userInfo, setUserInfo] = useState(null);

  // const [request, response, promptAsync] = Googles.useAuthRequest({
  //   androidClientId:
  //     '872118237244-t8m8s5duq9m4kjrdvtdtntr4hq63m2ao.apps.googleusercontent.com',
  //   iosClientId:
  //     '872118237244-mk77jjva2nh75qbiqc8sfr3j1beqotnd.apps.googleusercontent.com',
  //   expoClientId:
  //     '872118237244-j3n28ufm4jnrik9fc60p45c0mbecm9q8.apps.googleusercontent.com',
  //   redirectUri: makeRedirectUri({ scheme: 'myapp' }),
  // });

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     setToken(response.authentication.accessToken);
  //     getUserInfo();
  //   }
  // }, [response, token]);

  // const getUserInfo = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://www.googleapis.com/userinfo/v2/me',
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     const user = await response.json();
  //     console.log(user);
  //     setUserInfo(user);
  //   } catch (error) {
  //     // Add your own error handler here
  //   }
  // };

  return (
    <SafeAreaView>
      <StatusBar
        style="dark"
        animated={true}
        backgroundColor="#1E1E1E"
        networkActivityIndicatorVisible={true}
      />
      <View className="bg-[#1E1E1E] h-screen flex items-center">
        <Text className="text-[#EDEDED]  text-4xl font-extrabold pt-10">
          Welcome Back
        </Text>
        <Text className="text-[#A0A0A0] font-normal mt-2 w-5/6 text-center">
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
          <Text className=" text-[#A0A0A0] font-semibold">
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity className="flex items-center justify-center bg-[#22D3EE] w-4/5 h-16 rounded-xl mt-2">
          <Text className="text-lg font-bold text-white">Sign in</Text>
        </TouchableOpacity>

        <View className="flex flex-row justify-between items-center w-4/5 h-14 mt-2 ">
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

        {/* <View className="flex flex-row justify-between w-3/6 h-16 mt-7">
          <TouchableOpacity
            onPress={() => promptAsync()}
            disabled={!request}
            className="flex flex-row items-center justify-around w-16 h-16 rounded-full sm:justify-center bg-[#2E2E2E] border-2 border-[#505050]"
          >
            <Google height={40} width={40} />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center justify-around w-16 h-16 rounded-full sm:justify-center bg-[#2E2E2E] border-2 border-[#505050]">
            <Facebook height={50} width={50} />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};
