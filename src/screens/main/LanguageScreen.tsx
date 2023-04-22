import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../components/Screen/Header';
import { colors } from '../../constants/Colors';

const IndianLanguages = [
  { id: '0', name: 'English' },
  { id: '1', name: 'Hindi' },
  { id: '2', name: 'Bengali' },
  { id: '3', name: 'Telugu' },
  { id: '4', name: 'Marathi' },
  { id: '5', name: 'Tamil' },
  { id: '6', name: 'Gujarati' },
  { id: '7', name: 'Kannada' },
  { id: '8', name: 'Odia' },
  { id: '9', name: 'Punjabi' },
  { id: '10', name: 'Malayalam' },
];

type Language = {
  id: string;
  name: string;
};

type Props = {}

const LanguageScreen = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const renderLanguageItem = ({ item }: { item: Language }) => {
    const onPress = () => setSelectedLanguage(item);

    return (
      <TouchableOpacity style={[styles.itemContainer, item.id === selectedLanguage?.id && styles.selectedItem]} onPress={onPress}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Select a language</Text>
        {selectedLanguage && <Text style={styles.selectedLanguageText}>{`Selected: ${selectedLanguage.name}`}</Text>}
      </View>
      <FlatList
        data={IndianLanguages}
        renderItem={renderLanguageItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
        contentContainerStyle={styles.listContentContainer}
      />
    </SafeAreaView>
  )
}

export default LanguageScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  selectedLanguageText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 16,
    backgroundColor: 'black'
  },
  listContentContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    paddingVertical: 12,
    backgroundColor: "#131313",
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 50,
    marginBottom: 8,
  },
  selectedItem: {
    backgroundColor: "gray"
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});