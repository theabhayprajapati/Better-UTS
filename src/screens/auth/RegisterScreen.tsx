import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Common/Typography";
import Header from "../../components/Screen/Header";
import { colors } from "../../constants/Colors";
import { InputComponent } from "./LoginScreen";

type Props = {};

const RegisterScreen = (props: Props) => {
  // fullname, password, confirm password, email, mobile number, gender, DOB, 
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const navigation = useNavigation();
  const navigateToLogin = () => {
    // @ts-ignore
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.gray,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'black'
        }}
      >
        <Header />
        <View
          style={{
            borderRadius: 20,
            backgroundColor: colors.gray,
            marginTop: 24,
            padding: 16,
            marginHorizontal: 24,
          }}
        >
          <Typography variant="h2" style={{
            fontSize: 28,
          }}>Register</Typography>
          <View
            style={{
              marginTop: 24,
            }}
          >
            <InputComponent
              labelStyle={{
                color: '#A3A3A3',
                fontSize: 12
              }}
              viewStyle={{
                marginTop: 16,
              }}
              variant="default" label="Full Name" placeholder="Enter Full Name" onChangeText={(text) => setFullname(text)} defaultValue={fullname} />
            <InputComponent
              labelStyle={{
                color: '#A3A3A3',
                fontSize: 12
              }}
              viewStyle={{
                marginTop: 16,
              }}
              variant="default" label="Password" placeholder="Enter Password" onChangeText={(text) => setPassword(text)} defaultValue={password} secureTextEntry={true} />
            <InputComponent
              labelStyle={{
                color: '#A3A3A3',
                fontSize: 12
              }}
              viewStyle={{
                marginTop: 16,
              }}
              variant="default" label="Confirm Password" placeholder="Enter Confirm Password" onChangeText={(text) => setConfirmPassword(text)} defaultValue={confirmPassword} secureTextEntry={true} />
            <InputComponent
              labelStyle={{
                color: '#A3A3A3',
                fontSize: 12
              }}
              viewStyle={{
                marginTop: 16,
              }}
              variant="default" label="Mobile Number" placeholder="Enter Mobile Number" onChangeText={(text) => setMobileNumber(text)} defaultValue={mobileNumber} />
            <GenderPicker label="Gender"
              variant="default"
              labelStyle={{
                color: '#A3A3A3',
                fontSize: 12
              }}
              viewStyle={{
                marginTop: 16,
              }}
              placeholder="Gender"
              onChangeText={(text) => setGender(text)}
              defaultValue="Male"
            />

            <InputComponent
              labelStyle={{
                color: '#A3A3A3',
                fontSize: 12
              }}
              viewStyle={{
                marginTop: 16,
              }}
              variant="default" label="Date of Birth" placeholder="Select Date of Birth" onChangeText={(t) => setDob(t)}
              defaultValue={dob} />
          </View>
          <View style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <CheckBox style={{
              width: '10%',
              height: '10%',
            }} />
            <Typography variant='default' style={{
              fontSize: 14
            }}>
              I accept the UTS Terms of user & Privacy policy
            </Typography>
          </View>
          <View style={{
            marginTop: 20
          }}>

            <Button
              title="Get Started"
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
            Already have an account?
          </Typography>
          <TouchableOpacity
            onPress={navigateToLogin}
          >
            <Typography variant='default' style={
              {
                color: colors.primary
              }

            }>
              Login
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 6,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  picker: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.gray,
    color: 'white',
    padding: 8,
    marginTop: 8
  },
});



type GenderPickerInputCompnentProps = {
  variant: "default" | "h1" | "h2" | "h3" | "h4";
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  defaultValue: string;
  secureTextEntry?: boolean;
  labelStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
};


const GenderPicker = (
  {
    variant,
    label,
    placeholder,
    onChangeText,
    defaultValue,
    secureTextEntry,
    labelStyle,
    viewStyle
  }: GenderPickerInputCompnentProps
) => {
  const [selectedValue, setSelectedValue] = useState('male');

  return (
    <View style={viewStyle}>
      <Typography variant={variant ? variant : "default"} style={labelStyle}>{label}</Typography>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }>
        <Picker.Item style={styles.input} label="Male" value="male" />
        <Picker.Item style={styles.input} label="Female" value="female" />
        <Picker.Item style={styles.input} label="Non-Binary" value="non-binary" />
        <Picker.Item style={styles.input} label="Prefer not to say" value="prefer-not-to-say" />
      </Picker>
    </View>
  );
};

export { GenderPicker };

