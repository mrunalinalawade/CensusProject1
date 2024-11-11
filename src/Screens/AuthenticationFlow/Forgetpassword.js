import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FONTS from '../../assets/Fonts';
import COLORS from '../../assets/colors/Colors';
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import Inputfield1 from '../../Components/Inputfields1';
import WholeButton1 from '../../Components/WholeButton1';
import { ValidateEmail, ValidatePassword } from '../../Components/ValidationConfig/Validations';
import Header from '../../Components/Header';

const { height, width } = Dimensions.get('window');
const Forgetpassword = (props) => {
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [show, setshow] = useState(true);
  const [selected, setSelected] = useState('phone');
  const [ShowError, setShowError] = useState({

    EmailError: false,


  });

  const OnSignupBtnPress = () => {
    if (CheckValidation()) {
      props.navigation.navigate("SetPassword");
    } else {
      setShowError({
        EmailError: EmailError !== '',

      });
    }
  };

  const ValidateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email address.";
  };

  const ValidateMobileNo = (text) => {
    const phoneRegex = /^([0-9]{10,14})$/;
    return phoneRegex.test(text) ? "" : "Please enter a valid phone number (7-14 digits).";
  };
  const CheckValidation = () => {
    let valid = true;

    // Validate email or phone
    const emailError = ValidateEmail(Email) === "" || ValidateMobileNo(Email) === "";
    setEmailError(emailError ? "" : "Please enter a valid email address or phone number.");
    if (!emailError) valid = false;


    return valid;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.mainviewStyle}>
            <Header
              sign={true}
              navigate={() => props.navigation.goBack()}
              navigate1={() => props.navigation.navigate('Signup')}
            />
            <Text style={styles.logintext}>Forget password?</Text>

            <View style={styles.viewStyle1}>
              <TouchableOpacity
                style={[
                  styles.inputStyle1,
                  selected === 'phone' ? { backgroundColor: 'rgba(42, 43, 47, 1)' } : null
                ]}
                onPress={() => setSelected('phone')}
              >
                <Text style={styles.phoneStyle2}>Phone</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.inputStyle1,
                  selected === 'email' ? { backgroundColor: 'rgba(42, 43, 47, 1)' } : null
                ]}
                onPress={() => setSelected('email')}
              >
                <Text style={styles.phoneStyle2}>Email</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputStyle}>
              <Text style={styles.account}>Phone Number or email</Text>

              



              <Inputfield1
                PhoneField
                placeholder={'Email or Phone number'}
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
                // Errorstyle={{ marginLeft: '5%' }}
                ShowError={ShowError.EmailError}
                Error={EmailError}
              />

            </View>


            <WholeButton1 Label={'Next'} Action={OnSignupBtnPress} styles={{ width: width * 0.9 }} />
          </View>
        </KeyboardAwareScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Forgetpassword

const styles = StyleSheet.create({
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    marginVertical: '6%',
  },
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    color: '#fff',
    marginTop: '20%',
    lineHeight: 32.97,
  },
  viewStyle1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    backgroundColor: '#000',
    padding: '2%',
    justifyContent: 'space-between',
    marginTop: '12%',
    borderRadius: 7
  },

  inputStyle: {
    marginTop: 40,
  },

  viewStyle: {
    width: width * 0.35,
    backgroundColor: '#2D2F36',
    height: 1.5


  },
  inputStyle1: {
    alignItems: 'center',
    width: width * 0.42,
    // backgroundColor:'red',
    padding: '3.8%',

    borderRadius: 5

  },
  phoneStyle2: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  account: {
    fontSize: 12,
    // fontFamily: FONTS.Regular,
    fontWeight: '400',
    color: '#rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    // marginTop: 2,
    marginVertical: '2%'
  },


})