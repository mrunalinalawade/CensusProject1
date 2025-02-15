
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import WholeButton1 from '../../../Components/WholeButton1';
import Inputfield1 from '../../../Components/Inputfields1';
import { OTPVerification, ValidateEmail, ValidateMobileNo } from '../../../Components/ValidationConfig/Validations';


const { height, width } = Dimensions.get('window');
const VerifyEmailVerificator = (props) => {
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('')
    const [Code, setCode] = useState('');
    const [CodeError, setCodeError] = useState('')

    const [ShowError, setShowError] = useState({
      
        EmailError: false,
        CodeError:false,
      
    
      });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    navigate={() => props.navigation.goBack()}
                />
                <Text style={styles.logintext}>Email Verification</Text>
                <Text style={styles.signStyle}>Enter the 6-digit code generated by the Authenticator App</Text>
                <Text style={[styles.account,{ marginTop: '10%'}]}>New Email Address</Text>
                <Inputfield1
                placeholder={''}
                MaxLength={256}
                value={Email}
                onBlur={() => {
                  setShowError((prevState) => ({
                    ...prevState,
                    EmailError: !!EmailError,
                  }));
                }}
                onChangeText={(text) => {
                  setEmail(text);
                  const isEmailValid = ValidateEmail(text) === "";
                  const isPhoneValid = ValidateMobileNo(text) === "";
                  if (isEmailValid || isPhoneValid) {
                    setEmailError("");
                    setShowError((prevState) => ({
                      ...prevState,
                      EmailError: false,
                    }));
                  } else {
                    setEmailError("Please enter a valid email address or phone number.");
                    setShowError((prevState) => ({
                      ...prevState,
                      EmailError: true,
                    }));
                  }
                }}
                ShowError={ShowError.EmailError}
                Error={EmailError}
                // InputFieldStyle={{
                //   borderColor: ShowError.EmailError ? 'red' :'rgba(255, 255, 255, 0.06)',
                //   borderWidth: 1, 
             
                // }}
              />

                <Text style={styles.account}>Enter Verification code</Text>
                <Inputfield1
                    placeholder={''}
                    GetCode
                    MaxLength={6}
                    keyboardType="number-pad"
                    value={Code}
                    onBlur={() => {
                        if (Code.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                CodeError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Code != '' || Code != undefined) {
                            setCode(text);
                            setCodeError(OTPVerification(text));
                        }
                    }}
                    ShowError={ShowError.CodeError}
                    Error={CodeError}
                />

                <WholeButton1 Label={'Submit'} Action={() => { props.navigation.navigate('Home') }} styles={{ width: width * 0.9, marginTop: height * 0.4 }} />
            </View>

        </SafeAreaView>
    )
}

export default VerifyEmailVerificator

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
        marginTop: 7,
    },
    account: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
       
    },
})

