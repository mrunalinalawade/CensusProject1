import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../Components/Header';
import FONTS from '../../assets/Fonts';
import WholeButton1 from '../../Components/WholeButton1';
import OTPTextInput from 'react-native-otp-textinput';
import COLORS from '../../assets/colors/Colors';
import ResendOtp from '../../Components/ResendOtp';
import { OTPVerification, OTPVerification1 } from '../../Components/ValidationConfig/Validations';
import RBSheet from 'react-native-raw-bottom-sheet';

const { height, width } = Dimensions.get('window');

const TradingEnterOtp = (props) => {
    const refRBSheet1 = useRef();
    const [otp, setOtp] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [second, setSecond] = useState(60);
    const [enableResend, setEnableResend] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isValidOtp, setIsValidOtp] = useState(null);

    const handleContinue = () => {
        if (CheckValidation()) {
            setErrorMsg(""); // Clear any error message
            props.navigation.navigate("SetPassword"); // Navigate to the next screen
        }
    };

    const restartTimer = () => {
        setSecond(60);
        setEnableResend(false);
    };

    const handleOtpTimer = () => {
        setEnableResend(true);
    };

    const CheckValidation = () => {
        const valid = OTPVerification1(otp); // Replace with your OTP validation logic
        setIsValidOtp(valid);
        if (!valid) {
            setErrorMsg("Please enter a valid OTP");
            return false;
        }
        return true;
    };

    const handleOtpChange = (value) => {
        setOtp(value);
        const valid = OTPVerification1(value); 
        setIsValidOtp(valid);
        if (valid || value.length !== 6) setErrorMsg(""); 
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={{ flex: 1 }}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={styles.mainviewStyle}>
                        <Header
                            sign={true}
                            navigate={() => props.navigation.goBack()}
                            navigate1={() => props.navigation.navigate("Signup")}
                        />
                        <Text style={styles.logintext}>Enter OTP</Text>
                        <Text style={styles.signStyle}>To secure your account, we need to verify your identity.</Text>
                        <View>
                            <OTPTextInput
                                tintColor={isFocused ? "#768C5C" : "#B45958"}
                                handleTextChange={handleOtpChange}
                                inputCount={6}
                                containerStyle={[
                                    styles.otpContainerStyle,
                                    {
                                        borderColor: isFocused
                                            ? "#768C5C"
                                            : isValidOtp === null
                                            ? "transparent"
                                            : isValidOtp
                                            ? "#768C5C"
                                            : "#B45958",
                                    },
                                ]}
                                textInputStyle={[
                                    styles.otpTextInputStyle,
                                    {
                                        borderColor: isFocused
                                            ? "#768C5C"
                                            : isValidOtp === null
                                            ? "transparent"
                                            : isValidOtp
                                            ? "#768C5C"
                                            : "#B45958",
                                    },
                                ]}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                                {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : <Text></Text>}
                                <View style={{ justifyContent: "flex-end" }}>
                                    {enableResend ? (
                                        <View style={styles.resendTextContainer}>
                                            <TouchableOpacity onPress={restartTimer} disabled={!enableResend}>
                                                <Text style={styles.resendSubText}>Resend</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ) : (
                                        <ResendOtp second={second} setSecond={setSecond} handleTimer={handleOtpTimer} />
                                    )}
                                </View>
                            </View>
                        </View>
                        <View style={styles.CheakBoxEntireVIEW}>
                            <TouchableOpacity onPress={() => refRBSheet1.current.open()}>
                                <Text style={styles.Forgotpass}>Cannot receive SMS?</Text>
                            </TouchableOpacity>
                        </View>
                        {otp.length === 6 && (
                            <WholeButton1 Label={"Continue"} Action={handleContinue} styles={{ width: width * 0.9 }} />
                        )}
                    </View>
                </KeyboardAwareScrollView>
            </View>













         
        </SafeAreaView>
    );
};

export default TradingEnterOtp;

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
      
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '20%',
        lineHeight: 32.97,
    },
    signStyle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        marginTop: 9,
    },
    CheakBoxEntireVIEW: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignSelf: 'center',
    },
    Forgotpass: {
        fontSize: 14,
        fontFamily: FONTS.semiBold,
        fontWeight: '400',
        color: '#2F9ED6',
        marginTop: '2%',
        marginLeft: '2%',
    },
    otpContainerStyle: {
        marginTop: 20,
    },
    otpTextInputStyle: {
        width: 45,
        color: '#fff',
        // fontFamily: 'bold',
        fontSize: 16,
        fontWeight: '600',
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 7,
        borderColor: 'rgba(255, 255, 255, 0.06)',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        // marginTop: 2,
        marginStart: 5,
    },
    resendTextContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        // marginTop: 30,
        alignItems: 'center',
    },
    resendSubText: {
        color: '#768C5C',
        fontFamily: 'bold',
        fontSize: 12,
        fontWeight: '500',
    },
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
    signStyle1: {
        fontSize: 12,

        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 18,

    },
    account3: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // lineHeight: 20,
        // marginLeft: '2%',

      


    },
});