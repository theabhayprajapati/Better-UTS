import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/Colors";
import BookingScreen from "../screens/main/BookingScreen";
import HomeScreen from "../screens/main/HomeScreen";
import TicketScreen from "../screens/main/TicketScreen";

type Props = {};

type BottomTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Ticket: undefined;
  Profile: undefined;
  Language: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type CustomTabBarProps = {
  navigation: any;
  state: any;
  descriptors: any;
};

const BottomTabNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Language"
          component={TicketScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Ticket"
          component={TicketScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={BookingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={TicketScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.bottomTab,
        height: 60,
        alignItems: "center",
        margin: 10,
        borderRadius: 15,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        type IconNameProp = React.ComponentProps<typeof Entypo>["name"];
        let iconName: IconNameProp = "home";
        let iconSize = 24;
        let iconColor = isFocused ? "#f2f2f2" : colors.not_selected;
        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Wallet") {
          iconName = "wallet";
        } else if (route.name === "Ticket") {
          iconName = "ticket";
        } else if (route.name === "Profile") {
          iconName = "user";
        } else if (route.name === "Language") {
          iconName = "language";
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{ flex: 1, alignItems: "center" }}
          >
            <View
              style={{
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name={iconName} size={iconSize} color={iconColor} />

              {isFocused && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: colors.primary,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
