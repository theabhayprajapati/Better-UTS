import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Typography from '../../components/Common/Typography';
import Header from '../../components/Screen/Header';
import { colors } from '../../constants/Colors';

import { Button } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';


type Props = {
    onLogin: () => void;
};

const LoginScreen = ({ onLogin }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    const handleLogin = () => {
        // Perform authentication logic here.
        // Call `onLogin` callback when authentication is successful.
        onLogin();
    };

    return (
        <SafeAreaView style={{
            backgroundColor: colors.gray,
            flex: 1
        }}>
            <View style={styles.container}>
                <Header />
                <View style={{
                    borderRadius: 20,
                    backgroundColor: colors.gray,
                    marginTop: 30,
                    padding: 16,
                    marginHorizontal: 24
                }}>
                    <Typography variant='h2'>
                        Login
                    </Typography>
                    <View style={{
                        marginTop: 20
                    }}
                    >
                        <InputComponent variant="default" label="Mobile Number" placeholder="Enter Mobile Number" onChangeText={text => setEmail(text)} defaultValue={email} />
                        <InputComponent variant="default" label="Password" placeholder="Enter Password" onChangeText={text => setPassword(text)} defaultValue={password} secureTextEntry={true} />
                    </View>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                        <Typography variant='default'>
                            Forgot Password?
                        </Typography>
                    </View>
                    <View style={{
                        marginTop: 20
                    }}>

                        <Button
                            title="Let me in"
                            buttonStyle={{
                                backgroundColor: colors.primary,
                                borderRadius: 30,
                                height: 48
                            }}
                        />
                    </View>
                </View>
                <View
                    style={
                        {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                            gap: 10
                        }
                    }>
                    <Typography variant='default'>
                        Don't have an account?
                    </Typography>
                    <TouchableOpacity>
                        <Typography variant='default' style={
                            {
                                color: colors.primary
                            }

                        }>
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
        backgroundColor: "black"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        width: '100%',
        padding: 12,

        borderRadius: 6,
        color: 'white'
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 12,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    checkbox: {
        alignSelf: 'center',
    },
});

export default LoginScreen;

// vertical line
const VerticalLine = () => {
    return (
        <View
            style={{
                height: 2,
                width: '100%',
                backgroundColor: 'gray',
                marginHorizontal: 10
            }}
        />
    )
}

type InputCompnentProps = {
    variant: 'default' | 'h1' | 'h2' | 'h3' | 'h4';
    label: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    defaultValue: string;
    secureTextEntry?: boolean;
};

export const InputComponent = ({
    variant,
    label,
    placeholder,
    onChangeText,
    defaultValue,
    secureTextEntry,
}: InputCompnentProps) => {
    return (
        <View>
            <Typography variant={variant ? variant : "default"}>{label}</Typography>
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
