import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Typography from '../../components/Common/Typography'
import BackHeader from '../../components/Screen/BackHeader'
import { colors, padding } from '../../constants/Colors'
import { StationContext } from '../../context/appcontent'

type Props = {}

const TicketSummary = (props: Props) => {
    const navigation = useNavigation();
    const { fromStation, toStation, adult, child, ticketType, trainType } = useContext(StationContext);
    return (
        <SafeAreaView style={styles.container}>
            <BackHeader label='Ticket Details' onPress={
                () => navigation.goBack()
            } />
            <View style={styles.bottom}>
                <View style={{
                    backgroundColor: colors.gray,
                    borderRadius: 10,
                    padding: padding.primary,
                }}>
                    <View style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: padding.primary,
                        paddingVertical: 10,
                        flexDirection: 'row',
                        borderRadius: 10,
                    }}>
                        <Typography variant='h4'>Ticket Summary</Typography>
                    </View>
                    <View style={{ padding: padding.primary, flexDirection: 'row' }}>
                        <UpDownText upperText='Source Sation' lowerText={fromStation} />
                        <UpDownText upperText='Destination' lowerText={toStation} />
                    </View>
                    <View style={{ padding: padding.primary, flexDirection: 'row' }}>
                        <UpDownText upperText='Adult' lowerText={adult} />
                        <UpDownText upperText='Child' lowerText={child} />
                    </View>
                    <View style={{ padding: padding.primary, flexDirection: 'row' }}>
                        <UpDownText upperText='Ticket Type' lowerText={ticketType} />
                        <UpDownText upperText='Train Type' lowerText={trainType} />
                    </View>
                    {/* button book */}
                    {/* view total fare */}
                    <View style={{ padding: padding.primary, flexDirection: 'row' }}>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity style={{
                                backgroundColor: colors.gray,
                                padding: padding.primary,
                                borderRadius: 10,
                                marginTop: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                                <Typography variant='h4' >₹100</Typography>

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ padding: padding.primary, flexDirection: 'row' }}>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity style={{
                                backgroundColor: colors.primary,
                                padding: padding.primary,
                                borderRadius: 50,
                                marginTop: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                onPress={() => { }}
                            >
                                <Typography variant='h4' >Book</Typography>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default TicketSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        flex: 1,
        backgroundColor: 'black',
        padding: padding.primary,
    },
    textcontainer: {
        width: "49%",
    },
    upperText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: colors.primary,
    },
    lowerText: {
        fontSize: 14,
        color: 'gray',
    },
});


type UpDownTextProps = {
    upperText: string;
    lowerText: string | number;
};

const UpDownText = ({ upperText, lowerText }: UpDownTextProps) => {
    return (
        <View style={styles.textcontainer}>
            <Text style={styles.upperText}>{upperText}</Text>
            <Text style={styles.lowerText}>{lowerText}</Text>
        </View>
    );
};
