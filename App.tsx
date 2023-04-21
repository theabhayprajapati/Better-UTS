import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LoginScreen from './src/screens/auth/LoginScreen';



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Here you can perform any app initialization logic, such as loading fonts or data.
    // Once the initialization is complete, set `isAppReady` to `true`.
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
    return <LoginScreen onLogin={handleLogin} />;
  }

  // If the user is logged in, show the tab navigator screen.
  return <BottomTabNavigator />
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
