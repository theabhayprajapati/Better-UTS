import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/themed";
import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Common/Typography";
import { UpDownElement } from "../../components/Common/UpDownElement";
import BackHeader from "../../components/Screen/BackHeader";
import Header from "../../components/Screen/Header";
import { colors, margin, padding } from "../../constants/Colors";
import { mumbaiLocalTrainStations } from "../../constants/stations";
import { StationContext } from "../../context/appcontent";
import TicketDetails from "./TicketDetails";
import TicketSummary from "./TicketSummary";
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
    <HomeStack.Navigator initialRouteName="MainHomeScreen">
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

type MainHomeScreenProps = {};
type SearchHomeScreenProps = {
  route: any;
  navigation: any;
};

const SearchHomeScreen = ({ route, navigation }: SearchHomeScreenProps) => {
  const [recentlySelected, setRecentlySelected] = useState(
    mumbaiLocalTrainStations.slice(0, 3)
  );
  const [allStations, setAllStations] = useState(mumbaiLocalTrainStations);
  const [searchResults, setSearchResults] = useState([]);
  const { setFromStation, setToStation } = useContext(StationContext);

  const { select } = route.params || 'from';
  console.log("select", select);
  const handleSearch = (text: any) => {
    // Perform the search here and update the searchResults state
    if (text === "") {
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
  const selectStation = (station: string) => {
    console.log("selectStation", station);
    if (select === "from") {
      setFromStation(station);
    } else {
      setToStation(station);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader label="Enter Source Station" onPress={() => navigation.goBack()} />
      <View style={styles.bottom}>
        <View style={styles.searchContainer}>
          <UpDownElement
            label="Search Station Name / Code"
            element={
              // search icon
              <View style={{ flexDirection: 'row', gap: 5, marginTop: 8, alignItems: 'center' }}>
                <AntDesign name="search1" size={14} color={colors.primary} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleSearch(text)}
                  placeholder={"Search"}
                  placeholderTextColor={colors.primary}
                />
              </View>
            } />
          <TouchableOpacity>
            <Text style={{
              color: '#a1a1a1',
              fontSize: 12,
              marginTop: margin.sm,
            }}>
              Nearby Stations
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.stationsContainer}>
          {searchResults.length === 0 && (
            <>
              <View style={styles.recentlySelectedContainer}>
                <Text style={styles.heading}>Recently selected:</Text>
                {recentlySelected.map((station) => (
                  <TouchableOpacity
                    style={styles.stationContainer}
                    onPress={() => selectStation(station)}
                  >
                    <Text style={styles.station} key={station}>
                      {station}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.allStationsContainer}>
                <Text style={styles.heading}>All stations:</Text>
                {allStations.map((station) => (
                  <TouchableOpacity
                    style={styles.stationContainer}
                    onPress={() => selectStation(station)}
                  >
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
                <TouchableOpacity
                  style={styles.stationContainer}
                  onPress={() => selectStation(station)}
                >
                  <Text style={styles.station} key={station}>
                    {station}
                  </Text>
                </TouchableOpacity>
              ))
              : null}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const MainHomeScreen = ({ navigation }: any) => {
  type station = "from" | "to";
  const handlePress = (fromStation: station) => {
    navigation.navigate("SearchHomeScreen", {
      select: fromStation,
    });
  };

  const { fromStation, toStation, setToStation, setFromStation } =
    useContext(StationContext);
  const handleSwapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
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
              value={fromStation}
              color={colors.primary}
              onPress={() => handlePress("from")}
            />
            <View
              style={{
                width: "20%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <TouchableOpacity onPress={handleSwapStations}>
                <Ionicons
                  name="swap-horizontal-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <PlaceInput
              label="To"
              value={toStation}
              color={colors.primary}
              onPress={() => handlePress("to")}
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
                borderRadius: 58,
                height: 48,
                backgroundColor: colors.primary,
              }}
              onPress={() => navigation.navigate("TicketDetails")}
            >
              <Typography variant="h4">Book Ticket</Typography>
            </Button>
          </TouchableOpacity>
        </View>
        <View style={styles.otherBookingSection}>
          <Typography variant="h4">Other Booking mode</Typography>
          <View style={styles.gridcontainer}>
            <View style={styles.gridrow}>
              <TextWithIcon
                icon={
                  <Ionicons
                    name="timer-outline"
                    size={24}
                    color={colors.primary}
                  />
                }
                text="Quick Booking"
              />
              {/* platform icon */}
              <TextWithIcon
                icon={
                  <Ionicons
                    name="train-outline"
                    size={24}
                    color={colors.primary}
                  />
                }
                text="Platform Booking"
              />
            </View>

            <View style={styles.gridrow}>
              <TextWithIcon
                icon={<Entypo name="ticket" size={24} color={colors.primary} />}
                text="Season Booking"
              />
              <TextWithIcon
                icon={
                  <Ionicons
                    name="qr-code-outline"
                    size={24}
                    color={colors.primary}
                  />
                }
                text="QR Booking"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const TextWithIcon = ({ icon, text }: any) => {
  return (
    <TouchableOpacity style={styles.gridcolumn}>
      {/* qr icons */}
      <View style={{ width: "25%" }}>{icon}</View>
      <View style={{ width: "75%" }}>
        <Typography
          variant="default"
          style={{
            color: "white",
            fontSize: 12,
          }}
        >
          {text}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    fontFamily: "Rubik-Regular",
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
    borderRadius: 18,
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
    width: "100%",
    marginTop: 16,
    gap: margin.primary,
  },
  gridcolumn: {
    width: "49%",
    height: 50,
    alignItems: "center",
    backgroundColor: "#131313",
    borderRadius: 10,
    paddingHorizontal: padding.primary,
    flexDirection: "row",
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
  },
  searchContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
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
    color: "#FFFFFF",
    fontSize: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    color: "white",
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
    marginBottom: margin.sm,
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
    marginBottom: margin.sm
  },
  searchResultsContainer: {
    marginBottom: 16,
  },
});

// horixonal line
export const HorizontalLine = ({ color }: { color: string }) => {
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
        width: "40%",
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
            color: value === "Select Station" ? "#A3A3A3" : "#FFFFFF",
            fontSize: 18,
          }}
        >
          {value}
        </Text>
        <HorizontalLine color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};
