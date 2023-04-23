import { AntDesign } from "@expo/vector-icons";
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Typography from '../../components/Common/Typography';
import { colors } from "../../constants/Colors";
interface Ticket {
  fare: number;
  startStation: string;
  endStation: string;
  via: string;
  adults: number;
  children: number;
  bookingDate: string;
  utsNo: string;
}

const TICKETS_DATA: Ticket[] = [
  {
    fare: 100,
    startStation: 'Mumbai',
    endStation: 'Delhi',
    via: 'Jaipur',
    adults: 2,
    children: 1,
    bookingDate: '2023-05-01',
    utsNo: '123456',
  },
  {
    fare: 150,
    startStation: 'Bangalore',
    endStation: 'Chennai',
    via: '',
    adults: 1,
    children: 0,
    bookingDate: '2023-06-15',
    utsNo: '789012',
  },
];

type Props = {}
const TicketItem: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  return (
    <View style={styles.ticketItem}>
      <View style={styles.rightRow}>
        <View style={styles.ticketItemRow}>
          <Typography variant='default' style={{
            color: colors.gray,
            fontWeight: '600',
            fontSize: 12,
          }}>
            Journey M-Ticket
          </Typography>
        </View>
        <View style={styles.ticketItemRow}>
          <Text style={styles.ticketItemTitle}>Bandra Jn. To Mumbai CSMT</Text>
          {/* right arrow */}
        </View>
        <View style={{ ...styles.ticketItemRow, gap: 10 }}>
          <View style={{
            flexDirection: "row"
          }}>
            <Text style={{ ...styles.ticketItemTitle, color: colors.gray }}>Adult: </Text><Text>1</Text>
          </View>
          <View style={{
            flexDirection: "row"
          }}>
            <Text style={{ ...styles.ticketItemTitle, color: colors.gray }}>Child: </Text><Text>0</Text>

          </View>
        </View>
        <View style={styles.ticketItemRow}>
          <Text style={{ ...styles.ticketItemTitle, color: colors.gray }}>Date: </Text> <Text>04/08/2020</Text>
        </View>


      </View >
      <View style={styles.viewTicketButton}>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View >
  );
};
const TicketScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Tickets</Text>
      <ScrollView style={styles.ticketList}>
        {TICKETS_DATA.map((ticket, index) => (
          <TicketItem key={index} ticket={ticket} />
        ))}
      </ScrollView>
    </View>
  )
}

export default TicketScreen

const styles = StyleSheet.create({
  ticketItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: "row",
    width: "100%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3
  },
  rightRow: {
    backgroundColor: '#fff',

    width: "80%"
  },
  viewTicketButton: {
    width: "20%",
    flexDirection: "row",
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketItemRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  ticketItemTitle: {
    fontWeight: 'bold',
    marginRight: 10,
    color: colors.gray,
  },
  ticketItemValue: {
    flex: 1,
    textAlign: 'right',
  },

  viewTicketButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  currentLanguageText: {
    fontSize: 16,
    marginBottom: 10,
  },
  ticketList: {
    flex: 1,

  },
})