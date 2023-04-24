import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { colors } from "../../constants/Colors";
import { HorizontalLine } from "../../screens/main/HomeScreen";


type PlaceInputProps = {
    label: string;
    color?: string;
    onPress?: () => void;
    width?: string;
    element: JSX.Element;
};
export const UpDownElement = ({ label, color, onPress, width, element, }: PlaceInputProps) => {
    return (
        <View
            style={{
                width: width ? width : "100%",
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
                {element}
                <HorizontalLine color={colors.primary} />
            </View>
        </View>
    );
};
