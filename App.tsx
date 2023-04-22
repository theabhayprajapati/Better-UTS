import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import SplashScreen from './src/screens/SplashScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isAppReady) {
    // Show a splash screen while the app is initializing.
    return (
      <SplashScreen />
    );
  }

  if (!isLoggedIn) {
    // Show the login screen if the user is not logged in.
    return <SafeAreaProviderWrapper>
      {/* <LoginScreen onLogin={handleLogin} /> */}
      <RegisterScreen />
    </SafeAreaProviderWrapper>
  }

  // If the user is logged in, show the tab navigator screen.
  return <SafeAreaProviderWrapper>
    <BottomTabNavigator />
  </SafeAreaProviderWrapper>
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
