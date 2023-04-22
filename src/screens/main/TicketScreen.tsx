import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>Fare:</Text>
        <Text style={styles.ticketItemValue}>{ticket.fare}</Text>
      </View>
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>Start Station:</Text>
        <Text style={styles.ticketItemValue}>{ticket.startStation}</Text>
      </View>
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>End Station:</Text>
        <Text style={styles.ticketItemValue}>{ticket.endStation}</Text>
      </View>
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>Via:</Text>
        <Text style={styles.ticketItemValue}>{ticket.via}</Text>
      </View>
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>Adults:</Text>
        <Text style={styles.ticketItemValue}>{ticket.adults}</Text>
      </View>
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>Children:</Text>
        <Text style={styles.ticketItemValue}>{ticket.children}</Text>
      </View>
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>Booking Date:</Text>
        <Text style={styles.ticketItemValue}>{ticket.bookingDate}</Text>
      </View>
      <View style={styles.ticketItemRow}>
        <Text style={styles.ticketItemTitle}>UTS No.:</Text>
        <Text style={styles.ticketItemValue}>{ticket.utsNo}</Text>
      </View>
      <TouchableOpacity style={styles.viewTicketButton}>
        <Text style={styles.viewTicketButtonText}>View Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};
const TicketScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Tickets</Text>
      <Text style={styles.currentLanguageText}>Current Language: {'English'}</Text>
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
  },
  ticketItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  ticketItemTitle: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  ticketItemValue: {
    flex: 1,
    textAlign: 'right',
  },
  viewTicketButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  viewTicketButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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