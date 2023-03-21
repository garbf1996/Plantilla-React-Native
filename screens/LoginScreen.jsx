import { Text, View, TextInput } from "react-native";

export const LoginScreen = () => {
  return (
    <View>
      <Text>Welcome Back</Text>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        doloremque illo itaque explicabo nam, voluptatem aspernatur eius
        molestiae
      </Text>

      <View>
        <TextInput
          keyboardType='visible-password'
          className='w-full h-14 border border-slate-800'
        />
        <TextInput
          className=' w-full h-14 bg-slate-800'
          placeholderTextColor='white'
        />
      </View>
    </View>
  );
};
