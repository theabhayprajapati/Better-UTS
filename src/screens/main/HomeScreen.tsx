import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Common/Typography";
import Header from "../../components/Screen/Header";
import { colors, margin, padding } from "../../constants/Colors";

type Props = {};

const HomeScreen = (props: Props) => {
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
            />
            <PlaceInput label="To" value="Ahmedabad" color={colors.primary} />
            <View></View>
          </View>
          <View
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
            >
              <Typography variant="h4"  >Book Ticket</Typography>
            </Button>
          </View>
        </View>
        <View style={styles.otherBookingSection}>
          <Typography variant="h3">Other Booking mode</Typography>
          <View style={styles.gridcontainer}>
            <View style={styles.gridrow}>
              <View style={styles.gridcolumn}>
                <Text style={{
                  color: 'white'
                }}>Quick Booking</Text>
              </View>
              <View style={styles.gridcolumn}>
                <Text style={{
                  color: 'white'
                }}>Platform Booking</Text>
              </View>
            </View>

            <View style={styles.gridrow}>
              <View style={styles.gridcolumn}>
                <Text style={{
                  color: 'white'
                }}>Season Booking</Text>
              </View>
              <View style={styles.gridcolumn}>
                {/* qr icons */}

                <Text style={{
                  color: 'white'
                }}>QR Booking</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  bottom: { paddingHorizontal: padding.primary, backgroundColor: 'black', flex: 1 },
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
};

const PlaceInput = ({ label, value, color }: PlaceInputProps) => {
  return (
    <View
      style={{
        width: "49%",
        flexDirection: "column",
        gap: 5,
      }}
    >
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
  );
};
