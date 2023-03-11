import { Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"

export const Home = ({ navigation }) => {
    return (
      <View className='bg-black min-h-screen flex justify-center items-center'>
        <Text className='text-6xl text-center text-white'>Home</Text>
        <StatusBar style="auto" />
      </View>
    )
  }