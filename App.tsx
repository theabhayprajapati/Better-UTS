import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextProvider, StationProvider } from './src/context/appcontent';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
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

  return (
    <AppContextProvider>
      <StationProvider>
        <SafeAreaProviderWrapper>
          {isLoggedIn ? <BottomTabNavigator /> : <RegisterScreen />}
        </SafeAreaProviderWrapper>
      </StationProvider>
    </AppContextProvider >
  )


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
