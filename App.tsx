import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContentContext, AppContextProvider, StationProvider } from './src/context/appcontent';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import ResetPasswordScreen from './src/screens/auth/ResetPasswordScreen';

import { ThemeProvider, createTheme } from '@rneui/themed';

SplashScreen.preventAutoHideAsync();
const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
    CheckBox: {
      checkedColor: 'red',
      style: {
        height: 18,
        width: 18,
        borderRadius: 4,
      }
    }
  },
});
export default function App() {
  const { handleLogin, isLoggedIn } = useContext(AppContentContext);


  return (
    <ThemeProvider>
      <AppContextProvider>
        <StationProvider>
          <SafeAreaProviderWrapper>
            {isLoggedIn ? <BottomTabNavigator /> : <AuthScreenStack />}
          </SafeAreaProviderWrapper>
        </StationProvider>
      </AppContextProvider >
    </ThemeProvider>
  )


};

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
}
const AuthStack = createStackNavigator<AuthStackParamList>();




const AuthScreenStack = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName='Register'
      >
        <AuthStack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false,
        }} />
        <AuthStack.Screen name="Register" component={RegisterScreen} options={{
          headerShown: false,
        }} />
        <AuthStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen} options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{
          headerShown: false,
        }} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};




type SafeAreaProviderWrapperProps = {
  children: React.ReactNode;
}
const SafeAreaProviderWrapper = (props: SafeAreaProviderWrapperProps) => {
  return <SafeAreaProvider>
    {props.children}
  </SafeAreaProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
