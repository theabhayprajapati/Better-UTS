import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Screen/Header';
import { colors, padding } from '../../constants/Colors';

interface Props {
  name: string;
  userId: string;
}

const ProfileScreen = () => {
  const name = 'John Doe';
  const userId = '1234567890';
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.bottom}>
        <View style={styles.userInfo}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profilePhoto} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.userId}>User ID: {userId}</Text>
          </View>
        </View>
        <View style={styles.settings}>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Privacy Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Notification Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  bottom: {
    paddingHorizontal: padding.primary,
    backgroundColor: "black",
    flex: 1,
    color: '#fff',

    paddingTop: 20,
  },
  userInfo: {
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    color: '#fff',
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  userId: {
    fontSize: 16,
    color: '#fff',
  },
  settings: {
    color: '#fff',

    marginTop: 30,
  },
  settingItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#fff',

    paddingVertical: 10,
  },
  settingText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ProfileScreen;
