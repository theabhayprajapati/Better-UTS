import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
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
          <Typography variant="h2">Register</Typography>
          <View
            style={{
              marginTop: 24,
            }}
          >
            <InputComponent variant="default" label="Full Name" placeholder="Enter Full Name" onChangeText={(text) => setFullname(text)} defaultValue={fullname} />
            <InputComponent variant="default" label="Password" placeholder="Enter Password" onChangeText={(text) => setPassword(text)} defaultValue={password} secureTextEntry={true} />
            <InputComponent variant="default" label="Confirm Password" placeholder="Enter Confirm Password" onChangeText={(text) => setConfirmPassword(text)} defaultValue={confirmPassword} secureTextEntry={true} />
            <InputComponent variant="default" label="Mobile Number" placeholder="Enter Mobile Number" onChangeText={(text) => setMobileNumber(text)} defaultValue={mobileNumber} />
            <InputComponent variant="default" label="Gender" placeholder="Select Gender" onChangeText={(t) => setGender(t)}
              defaultValue={gender} />
            <InputComponent variant="default" label="Date of Birth" placeholder="Select Date of Birth" onChangeText={(t) => setDob(t)}
              defaultValue={dob} />
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

export default RegisterScreen;

const styles = StyleSheet.create({});
