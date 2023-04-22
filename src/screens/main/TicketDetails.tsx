import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Typography from '../../components/Common/Typography'
import BackHeader from '../../components/Screen/BackHeader'
import { colors, margin, padding } from '../../constants/Colors'

type Props = {}

const TicketDetails = (props: Props) => {
    const navigation = useNavigation();
    const handlePress = () => {
        //@ts-ignore;
        navigation.navigate('TicketSummary');
    };
    return (
        <SafeAreaView style={styles.container}>
            <BackHeader label='Ticket Details' onPress={
                () => navigation.goBack()
            } />
            <View style={styles.bottom}>
                <View style={styles.gridcontainer}>
                    <View style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: padding.primary,
                        paddingVertical: 10,
                        flexDirection: 'row',
                        borderRadius: 10,
                    }}>
                        <Typography variant='h4'>Normal Booking</Typography>
                    </View>
                    <View style={{ padding: padding.primary }}>
                        <Element lable1='Adult' lable2='Child' onPress={() => { }} />
                        <Element lable1='Ticket Type' lable2='Train Type' onPress={() => { }} />
                        {/* class, payment type */}
                        <Element lable1='Class' lable2='Payment Type' onPress={() => { }} />
                        <View>
                            {/* button */}
                            <TouchableOpacity style={{
                                backgroundColor: colors.primary,
                                padding: padding.primary,
                                borderRadius: 10,
                                marginTop: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                onPress={handlePress}
                            >
                                <Typography variant='h4' >Get Fare</Typography>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TicketDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        flex: 1,
        backgroundColor: 'black',
        padding: padding.primary,
    },
    gridcontainer: {
        borderRadius: 10,
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
})

type ElementsProps = {
    onPress: () => void,
    lable1: string,
    lable2: string,
}

const Element = (props: any) => {
    return <View style={styles.gridrow}>
        <TouchableOpacity style={styles.gridcolumn}>
            <Typography
                variant='h4'
            >
                {props.lable1}
            </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridcolumn}>
            <Typography
                variant='h4'
            >
                {props.lable2}
            </Typography>
        </TouchableOpacity>
    </View>
}