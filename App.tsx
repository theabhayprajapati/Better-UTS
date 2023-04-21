import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LoginScreen from './src/screens/auth/LoginScreen';



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!isLoggedIn) {
    // Show the login screen if the user is not logged in.
    return <SafeAreaProviderWrapper>
      <LoginScreen onLogin={handleLogin} />
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
