import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Screen/Header';
import { colors } from '../../constants/Colors';

type Props = {}

const BookingScreen = (props: Props) => {
  const [currentBalance, setCurrentBalance] = useState(500);
  return (
    <SafeAreaView style={styles.container}>
      {/* First View */}
      <Header />
      <View style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
        <View style={styles.firstView}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.rechargeHistoryButton}>
              <Text style={styles.rechargeHistoryButtonText}>Current Balance:</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rechargeHistoryButton}>
              <Text style={styles.rechargeHistoryButtonText}>Recharge Wallet</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.rechargeHistoryButton}>
              <Text style={styles.rechargeHistoryButtonText}>Recharge History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rechargeHistoryButton}>
              <Text style={styles.rechargeHistoryButtonText}>Surrender Wallet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray
  },
  firstView: {
    padding: 16,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  currentBalanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  currentBalanceAmount: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rechargeWalletButton: {
    backgroundColor: '#008000',
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  rechargeWalletButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rechargeHistoryButton: {
    padding: 8,
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131313",
    marginTop: 8,
    alignSelf: 'flex-start',
    width: '48%',
  },
  rechargeHistoryButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  secondView: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passbookText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  viewCurrentBalanceButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#008000',
  },
  viewCurrentBalanceButtonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#008000',
  },
  thirdView: {
    flex: 1,
  },
})