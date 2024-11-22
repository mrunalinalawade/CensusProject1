import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import Inputfield1 from '../../Components/Inputfields1';
import { OTPVerification } from '../../Components/ValidationConfig/Validations';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const TwoFAverification = (props) => {
  const [Mobile, setMobile] = useState('');
  const [MobileError, setMobileError] = useState('');
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [Google, setGoogle] = useState('');
  const [GoogleError, setGoogleError] = useState('');


  const [ShowError, setShowError] = useState({
    MobileError: false,
    EmailError: false,
    GoogleError: false,

  });


  // const Form1com = () => {
  //   let mobileError = OTPVerification(Mobile);
  //   let emailError = OTPVerification(Email);
  //   let googleError = OTPVerification(Google);


  //   if (mobileError == '' && emailError == '' && googleError == "") {
  //     props.navigation.navigate('IDphotoinfo')

  //   } else {
  //     setMobileError(mobileError);
  //     setEmailError(emailError);
  //     setGoogleError(googleError);

  //     setShowError({
  //       MobileError: true,
  //       EmailError: true,
  //       GoogleError: true,

  //     });
  //   }

  // }

  const OTPVerification = (value) => {
    // Replace this with your actual validation logic
    return value.trim() === '' ? 'This field is required' : '';
  };

  const getErrors = () => {
    const mobileError = OTPVerification(Mobile);
    const emailError = OTPVerification(Email);
    const googleError = OTPVerification(Google);
    return { mobileError, emailError, googleError };
  };

  const isVerificationComplete = () => {
    const { mobileError, emailError, googleError } = getErrors();
    return !mobileError && !emailError && !googleError;
  };

  const handleSubmit = () => {
    const { mobileError, emailError, googleError } = getErrors();

    if (isVerificationComplete()) {
      props.navigation.navigate('SubmittedSwap');
    } else {
      setShowError({
        MobileError: !!mobileError,
        EmailError: !!emailError,
        GoogleError: !!googleError,
      });
    }
  };









  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

      <View style={styles.mainviewStyle}>
        <Header

          navigate={() => props.navigation.goBack()}
        />
        <Text style={styles.logintext}>Verification</Text>


        <View style={styles.inputStyle}>
          <Text style={styles.account}>Code will be sent to ***3028</Text>
          <Inputfield1
            placeholder={'Mobile verification code'}
            SendCode
            MaxLength={6}
            keyboardType="number-pad"
            value={Mobile}
            onBlur={() => {
              if (Mobile != '' || Mobile != undefined) {
                setShowError(prevState => ({
                  ...prevState,
                  MobileError: true,
                }));
              }
            }}
            onChangeText={(text) => {
              if (Mobile != '' || Mobile != undefined) {
                setMobile(text);
                setMobileError(OTPVerification(text));
              }
            }}
            ShowError={ShowError.MobileError}
            Error={MobileError} />
          <Text style={styles.account}>Code will be sent to fai***@***.com</Text>


          <Inputfield1
            placeholder={'Email verification code'}
            SendCode
            MaxLength={6}
            keyboardType="number-pad"
            value={Email}
            onBlur={() => {
              if (Email.trim() !== '') {
                setShowError((prevState) => ({
                  ...prevState,
                  EmailError: true,
                }));
              }
            }}
            onChangeText={(text) => {
              if (Email != '' || Email != undefined) {
                setEmail(text);
                setEmailError(OTPVerification(text));
              }
            }}
            ShowError={ShowError.EmailError}
            Error={EmailError}
          />
          <Text style={styles.account}>Google authentication code</Text>

          <Inputfield1
            SendCode
            placeholder={'Google authentication code'}
            MaxLength={6}
            value={Google}
            keyboardType="number-pad"
            onBlur={() => {
              if (Google != '' || Google != undefined) {
                setShowError(prevState => ({
                  ...prevState,
                  Googleerror: true,
                }));
              }
            }}
            onChangeText={(num) => {
              if (Google != '' || Google != undefined) {
                setGoogle(num);
                setGoogleError(OTPVerification(num));
              }
            }}
            ShowError={ShowError.GoogleError}
            Error={GoogleError}

          />

        </View>




        <WholeButton1 Label={'Submit'} Action={handleSubmit} styles={{ width: width * 0.9,
          
          marginTop: height * 0.32 ,backgroundColor:isVerificationComplete() ? '#768C5C':'rgba(118, 140, 92, 0.25)',
          color : isVerificationComplete() ?'#fff':'rgba(255, 255, 255, 0.4)'}} />















      </View>
    </SafeAreaView>
  )
}


export default TwoFAverification

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
    marginTop: '12%',
    lineHeight: 32.97,
  },
  inputStyle: {
    marginTop: 40,
  },
  account: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    marginVertical: '1%'

  }

})