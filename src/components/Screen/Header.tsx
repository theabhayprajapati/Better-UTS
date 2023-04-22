import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../../constants/Colors'
import Typography from '../Common/Typography'
type Props = {}

const Header = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 10
                }}>
                    {/* logod */}
                    <View >
                        <Image source={require('../../assets/images/lrlarge.png')} style={{
                            width: 40,
                            height: 40,
                        }} />
                    </View>
                    <View style={{
                        flexDirection: "column",
                    }}>
                        <Typography variant='h4' >
                            UTS
                        </Typography>
                        <Typography variant='default'>
                            IR Unreserved Ticketing
                        </Typography>
                    </View>
                </View>
                <View>
                    {/* 3 points entypo icon */}
                    <Entypo name="dots-three-vertical" size={20} color="white" />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.gray,
        paddingHorizontal: 24,
        justifyContent: "center",
        // center

    }

})