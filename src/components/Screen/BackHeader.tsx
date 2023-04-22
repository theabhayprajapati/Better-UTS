import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors } from '../../constants/Colors'
import Typography from '../Common/Typography'
type Props = {
    label: string,
    onPress: () => void
}

const BackHeader = (props: Props) => {
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
                    <TouchableOpacity onPress={props.onPress}>
                        {/* back icon */}
                        <Entypo name="chevron-thin-left" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: "column",
                    }}>
                        <Typography variant='h4' >
                            {props.label}
                        </Typography>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BackHeader

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.gray,
        paddingHorizontal: 24,
        justifyContent: "center",
        // center

    }

})