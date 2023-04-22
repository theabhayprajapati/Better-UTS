import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  name: string;
  userId: string;
}

const ProfileScreen = () => {
  const name = 'John Doe';
  const userId = '1234567890';
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userId: {
    fontSize: 16,
    color: '#666',
  },
  settings: {
    marginTop: 30,
  },
  settingItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ProfileScreen;
