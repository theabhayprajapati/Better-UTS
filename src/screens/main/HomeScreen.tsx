import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/themed";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Common/Typography";
import BackHeader from "../../components/Screen/BackHeader";
import Header from "../../components/Screen/Header";
import { colors, margin, padding } from "../../constants/Colors";
import { mumbaiLocalTrainStations } from "../../constants/stations";
import TicketDetails from './TicketDetails';
import TicketSummary from './TicketSummary';
type Props = {};

type HomeStackParamList = {
  MainHomeScreen: undefined;
  SearchHomeScreen: undefined;
  TicketDetails: undefined;
  TicketSummary: undefined;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeScreen = (props: Props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MainHomeScreen"
        component={MainHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TicketSummary"
        component={TicketSummary}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TicketDetails"
        component={TicketDetails}
        options={{
          headerShown: false,
        }}
      />


      <HomeStack.Screen
        name="SearchHomeScreen"
        component={SearchHomeScreen}
        options={{
          headerShown: false,
        }}
      />


    </HomeStack.Navigator>
  );
};

export default HomeScreen;

const SearchHomeScreen = () => {
  const navigation = useNavigation();
  const [recentlySelected, setRecentlySelected] = useState(mumbaiLocalTrainStations.slice(0, 3));
  const [allStations, setAllStations] = useState(mumbaiLocalTrainStations);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text: any) => {
    // Perform the search here and update the searchResults state
    if (text === '') {
      setSearchResults([]);
      return;
    }
    //@ts-ignore
    setSearchResults([
      ...allStations.filter((station) =>
        station.toLowerCase().includes(text.toLowerCase())
      ),
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader label="Search" onPress={() => navigation.goBack()} />
      <View style={styles.bottom}>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#7F8FA6" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleSearch(text)}
            placeholder={'Search'}
            placeholderTextColor="#7F8FA6"
          />
        </View>

        <View style={styles.stationsContainer}>
          {searchResults.length === 0 && (
            <>
              <View style={styles.recentlySelectedContainer}>
                <Text style={styles.heading}>Recently selected:</Text>
                {recentlySelected.map((station) => (
                  <TouchableOpacity style={styles.stationContainer}>
                    <Text style={styles.station} key={station}>
                      {station}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.allStationsContainer}>
                <Text style={styles.heading}>All stations:</Text>
                {allStations.map((station) => (
                  <TouchableOpacity style={styles.stationContainer}>
                    <Text style={styles.station} key={station}>
                      {station}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          <View style={styles.searchResultsContainer}>
            {searchResults.length > 0
              ? searchResults.map((station) => (
                <TouchableOpacity style={styles.stationContainer}>
                  <Text style={styles.station} key={station}>
                    {station}
                  </Text>
                </TouchableOpacity>
              ))
              : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const MainHomeScreen = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate('SearchHomeScreen', {
      screen: 'SearchHomeScreen',
    }
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* header, booking, other booking */}
      <Header />
      <View style={styles.bottom}>
        <View style={styles.bookingSection}>
          <Typography variant="h3">Normal Booking</Typography>
          <View
            style={{
              marginTop: margin.primary,
              flexDirection: "row",
              gap: 1,
            }}
          >
            <PlaceInput
              label="From"
              value="Mumbai Central"
              color={colors.primary}
              onPress={handlePress}
            />
            <PlaceInput
              label="To"
              value="Ahmedabad"
              color={colors.primary}
              onPress={handlePress}
            />
            <View></View>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              marginTop: margin.primary,
            }}
          >
            <Button
              buttonStyle={{
                borderRadius: 50,
                backgroundColor: colors.primary,
              }}
              onPress={() => navigation.navigate('TicketDetails')}
            >
              <Typography variant="h4">Book Ticket</Typography>
            </Button>
          </TouchableOpacity>
        </View>
        <View style={styles.otherBookingSection}>
          <Typography variant="h3">Other Booking mode</Typography>
          <View style={styles.gridcontainer}>
            <View style={styles.gridrow}>
              <TouchableOpacity style={styles.gridcolumn}>
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Quick Booking
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridcolumn}>
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Platform Booking
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.gridrow}>
              <TouchableOpacity style={styles.gridcolumn}>
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Season Booking
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridcolumn}>
                {/* qr icons */}

                <Text
                  style={{
                    color: "white",
                  }}
                >
                  QR Booking
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    paddingTop: 20,
  },
  bookingSection: {
    marginTop: margin.primary,
    backgroundColor: colors.gray,
    paddingHorizontal: padding.primary,
    borderRadius: 10,
    paddingVertical: padding.primary,
  },
  otherBookingSection: {
    marginTop: margin.primary,
    paddingHorizontal: padding.primary,
  },
  gridcontainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gridrow: {
    flexDirection: "row",
    width: '100%',
    marginTop: 16,
    gap: margin.primary,
  },
  gridcolumn: {
    width: "49%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131313",
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  checkboxItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    flex: 1,
    marginHorizontal: 8,
  },
  checkboxLabel: {
    fontWeight: "bold",
  }, searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#131313",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    color: 'white'
  },
  stationsContainer: {
    flexDirection: "column",
    marginBottom: 16,
  },
  stationContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#131313",
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  recentlySelectedContainer: {
    width: "100%",
  },
  allStationsContainer: {
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  station: {
    fontSize: 16,
    color: "white",
    marginBottom: 8,
  },
  searchResultsContainer: {
    marginBottom: 16,
  },
});

// horixonal line
const HorizontalLine = ({ color }: { color: string }) => {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: 1,
        marginTop: 10,
      }}
    />
  );
};

type PlaceInputProps = {
  label: string;
  value: string;
  color: string;
  onPress?: () => void;
};

const PlaceInput = ({ label, value, color, onPress }: PlaceInputProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "49%",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <View>
        {/* text, text, horizontline */}
        <Text
          style={{
            color: "#A3A3A3",
            fontSize: 12,
            fontWeight: "100",
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {value}
        </Text>
        <HorizontalLine color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};
