import React, { useContext, useState } from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Common/Typography";
import Header from "../../components/Screen/Header";
import { colors } from "../../constants/Colors";

import { Button, CheckBox } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { AppContentContext } from "../../context/appcontent";

type Props = {};

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => {
        setChecked(!checked);
    };
    // AppContentContext
    const { handleLogin } = useContext(AppContentContext);

    return (
        <SafeAreaView
            style={{
                backgroundColor: colors.gray,
                flex: 1,
            }}
        >
            <View style={styles.container}>
                <Header />
                <View
                    style={{
                        borderRadius: 16,
                        backgroundColor: colors.gray,
                        marginTop: 30,
                        padding: 16,
                        marginHorizontal: 24,
                    }}
                >
                    <Typography variant="h2" style={
                        {
                            fontSize: 28
                        }
                    }>Login</Typography>
                    <View
                        style={{
                            marginTop: 20,
                        }}
                    >
                        <InputComponent
                            variant="default"
                            label="Mobile Number"
                            placeholder="Enter Mobile Number"
                            onChangeText={(text) => setEmail(text)}
                            defaultValue={email}
                            labelStyle={{
                                color: '#A3A3A3',
                                fontSize: 12
                            }}

                            viewStyle={{
                                marginTop: 16,
                            }}
                        />
                        <InputComponent
                            variant="default"
                            label="Password"
                            placeholder="Enter Password"
                            onChangeText={(text) => setPassword(text)}
                            defaultValue={password}
                            secureTextEntry={true}
                            labelStyle={{
                                color: '#A3A3A3',
                                fontSize: 12
                            }}
                            viewStyle={{
                                marginTop: 16,
                            }}

                        />
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <CheckBox
                                checked={checked}
                                onPress={toggleCheckbox}
                                // Use ThemeProvider to make change for all checkbox
                                iconType="material-community"
                                checkedIcon="checkbox-marked"
                                uncheckedIcon="checkbox-blank-outline"
                                checkedColor="red"
                            />
                            <Typography style={{ color: colors.textgray, fontSize: 14 }} variant="default">Stay Signed In</Typography>
                        </View>
                        <TouchableOpacity>
                            <Typography
                                variant="default"
                                style={{
                                    color: colors.textgray,
                                    fontSize: 14
                                }}
                            >
                                Forgot Password?
                            </Typography>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                        }}
                    >
                        <Button
                            title="Let me in"
                            buttonStyle={{
                                backgroundColor: colors.primary,
                                borderRadius: 30,
                                height: 48,
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 20,
                        gap: 10,
                    }}
                >
                    <Typography variant="default">Don't have an account?</Typography>
                    <TouchableOpacity>
                        <Typography
                            variant="default"
                            style={{
                                color: colors.primary,
                            }}
                        >
                            Register
                        </Typography>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
    },
    input: {
        width: "100%",
        padding: 12,
        borderRadius: 6,
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    button: {
        backgroundColor: "#0066cc",
        padding: 12,
        borderRadius: 6,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    checkbox: {
        alignSelf: "center",
    },
});

export default LoginScreen;

// vertical line
const VerticalLine = () => {
    return (
        <View
            style={{
                height: 2,
                width: "100%",
                backgroundColor: "gray",
                marginHorizontal: 10,
            }}
        />
    );
};

type InputCompnentProps = {
    variant: "default" | "h1" | "h2" | "h3" | "h4";
    label: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    defaultValue: string;
    secureTextEntry?: boolean;
    labelStyle?: StyleProp<TextStyle>
    viewStyle?: StyleProp<ViewStyle>
};

export const InputComponent = ({
    variant,
    label,
    placeholder,
    onChangeText,
    defaultValue,
    secureTextEntry,
    labelStyle,
    viewStyle
}: InputCompnentProps) => {
    return (
        <View style={viewStyle}>
            <Typography variant={variant ? variant : "default"} style={labelStyle}>{label}</Typography>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
                secureTextEntry={secureTextEntry}
            />
            <VerticalLine />
        </View>
    );
};
