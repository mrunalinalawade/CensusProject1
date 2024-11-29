// import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import Header from '../../Components/Header';
// import FONTS from '../../assets/Fonts';
// import WholeButton1 from '../../Components/WholeButton1';
// import OTPTextInput from "react-native-otp-textinput";
// import COLORS from '../../assets/colors/Colors';
// import ResendOtp from '../../Components/ResendOtp';
// import { OTPVerification } from '../../Components/ValidationConfig/Validations';

// const { height, width } = Dimensions.get('window');
// const EnterOTP = () => {

//     const [otp, setOtp] = useState("");
//     const [eOtp, setEotp] = useState();
//     const [second, setSecond] = useState(60);
//     const [enableResend, setEnableResend] = useState(false);

//     const handleContinue = () => {
//         if (CheckValidation()) {
//             navigation.navigate("SetPassword");
//         }
//     };

//     const restartTimer = () => {
//         setSecond(60);
//         setEnableResend(false);
//     };
//     const handleOtpTimer = () => {
//         setEnableResend(true);
//     };



//     const CheckValidation = () => {
//         if (!OTPVerification(otp)) {
//             setEotp("Please enter valid otp");
//             return false;
//         }
//         return true;
//     };
//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
//             <View style={{ flex: 1 }}>
//                 <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
//                     <View style={styles.mainviewStyle}>
//                         <Header
//                             sign={true}
//                             navigate={() => props.navigation.goBack()}
//                             navigate1={() => props.navigation.navigate('Signup')}
//                         />

//                         <Text style={styles.logintext}>Enter OTP</Text>
//                         <Text style={styles.signStyle}>To secure account, we need to verify you identity.</Text>

//                         <View style={{}}>
//                             <OTPTextInput
//                                 tintColor={'rgba(118, 140, 92, 1)'}
//                                 handleTextChange={setOtp}
//                                 inputCount={6}
//                                 containerStyle={styles.otpContainerStyle}
//                                 textInputStyle={styles.otpTextInputStyle}
//                             />

//                             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//                                 {eOtp ? <Text style={styles.errorText}>{eOtp}</Text> : null}
//                                 <View style={{justifyContent:'flex-end'}}>
//                                     {!enableResend && (
//                                         <ResendOtp
//                                             second={second}
//                                             setSecond={setSecond}
//                                             handleTimer={handleOtpTimer}
//                                         />
//                                     )}
//                                     {enableResend && (
//                                         <View style={styles.resendTextContainer}>

//                                             <TouchableOpacity onPress={restartTimer} disabled={!enableResend}>
//                                                 <Text style={styles.resendSubText}>{" " + ("Resend")}</Text>
//                                             </TouchableOpacity>
//                                         </View>
//                                     )}

//                                 </View>


//                             </View>

//                         </View>
//                         <View style={styles.CheakBoxEntireVIEW}>
//                             <TouchableOpacity onPress={() => { props.navigation.navigate('Forgetpassword') }}>
//                                 <Text style={styles.Forgotpass}>Cannot receive SMS?</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <WholeButton1 Label={'Continue'} Action={handleContinue} styles={{ width: width * 0.9 }} />


//                     </View>



//                 </KeyboardAwareScrollView>
//             </View>

//         </SafeAreaView>
//     )
// }

// export default EnterOTP

// const styles = StyleSheet.create({
//     mainviewStyle: {
//         justifyContent: 'center',
//         width: width * 0.9,
//         alignSelf: 'center',
//         marginVertical: '6%',
//     },
//     logintext: {
//         fontSize: 32,
//         fontWeight: '600',
//         color: '#fff',
//         marginTop: '20%',
//         lineHeight: 32.97,
//     },
//     signStyle: {
//         fontSize: 12,
//         fontWeight: '400',
//         color: '#rgba(255, 255, 255, 0.6)',
//         lineHeight: 20,
//         marginTop: 9,
//     },
//     CheakBoxEntireVIEW: {
//         marginTop: 5,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: width * 0.9,
//         alignSelf: 'center',
//     },
//     Forgotpass: {
//         fontSize: 14,
//         fontFamily: FONTS.semiBold,
//         fontWeight: '400',
//         color: '#2F9ED6',
//         marginTop: '2%', marginLeft: '2%'
//     },


//     otpContainerStyle: {
//         marginTop: 20,
//         // borderStyle: "solid",

//     },

//     otpTextInputStyle: {
//         width: 45,
//         color: '#fff',
//         fontFamily: "bold",
//         fontSize: 16,
//         fontWeight: '600',
//         borderWidth: 1,
//         borderBottomWidth: 1,
//         borderRadius: 7,
//         borderColor: 'rgba(255, 255, 255, 0.06)',
//         backgroundColor: 'rgba(255, 255, 255, 0.06)'
//     },
//     errorText: {
//         color: "red",
//         fontSize: 12,
//         marginTop: 4,
//         marginStart: 5,

//     },

//     resendTextContainer: {
//         flexDirection: "row",
//         // marginStart: 5,
//         alignSelf: 'flex-end',
//         justifyContent: 'flex-end',
//         marginTop: 30,
//         alignItems: "center",
//     },
//     resendSubText: {
//         color: '#768C5C',
//         fontFamily: "bold",
//         fontSize: 12,
//         fontWeight: '500',
//     },
// })

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

const EnterOTP = (props) => {
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













            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={430}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2,
                        height: 100
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={[styles.logintext1, { alignSelf: 'flex-start' }]}>Didn’t receive the SMS verification code?</Text>
                    <Text style={[styles.signStyle1, { width: width * 0.9, marginTop: '5%', }]}>We’ve sent a verification code to your mobile. If you haven’t receive it, please try the following:</Text>

                    <View style={{ flexDirection: 'row', marginTop: '7%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>1.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start', }]}> Make sure your mobile phone does not have any outstanding payments.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '2%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>2.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start' }]}> Check if the text message is your span folder.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '2%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>3.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start' }]}> Make sure your mobile phone number is: 8709723028.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '2%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>4.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start' }]}> It may take a few minutes for the text message to arrive.please check again after 10 minutes..</Text>
                    </View>
                    <View style={{ width: width * 0.9, alignItems: 'center', flexDirection: 'row',  marginTop: '8%' }}>
                        <Text style={[styles.account3, {}]}>If your issue is still not resolved, please visit our </Text>
                        <TouchableOpacity><Text style={[styles.account3, { color: '#2F9ED6', marginLeft: '1%' }]}>Help Center</Text></TouchableOpacity>
                    </View>


                    <WholeButton1 Label={'Okay, Thank you'} Action={() => { props.navigation.navigate('Startverification') }} styles={{ width: width * 0.9, }} />


                </View>
            </RBSheet>
        </SafeAreaView>
    );
};

export default EnterOTP;

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
