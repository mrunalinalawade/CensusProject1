import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image ,Animated} from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import FONTS from '../../assets/Fonts'
import Inputfield1 from '../../Components/Inputfields1'
import { OTPVerification, ValidateEmail } from '../../Components/ValidationConfig/Validations'
import WholeButton1 from '../../Components/WholeButton1'
import Header from '../../Components/Header'
const { height, width } = Dimensions.get('window');

const Signup = (props) => {
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [EmailOrPhone, setEmailOrPhone] = useState('');
  const [Pincode, setPincode] = useState(null);
  const [PincodeError, setPincodeError] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [rotateAnim] = useState(new Animated.Value(0)); 
  const [ShowError, setShowError] = useState({
    EmailError: false,
    PincodeError: false,
  });

  const handleIconPress = () => {
    setIsInputVisible(!isInputVisible);
    Animated.timing(rotateAnim, {
      toValue: isInputVisible ? 0 : 1, 
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const rotateIcon = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });


  const OnSignupBtnPress = () => {
    if (CheckValidation()) {
      props.navigation.navigate("Login");
    } else {
      setShowError({
        EmailError: EmailError !== '',
        PincodeError: PincodeError !== ''
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
    const emailError = ValidateEmail(Email) === "" || ValidateMobileNo(Email) === "";
    setEmailError(emailError ? "" : "Please enter a valid email address or phone number.");
    if (!emailError) valid = false;
    if (Pincode) {
      const pincodeError = OTPVerification(Pincode);
      setPincodeError(pincodeError);
      if (pincodeError) valid = false;
    } else {
      setPincodeError("");
    }
  
    return valid;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.mainviewStyle}>
           <Header navigate={() => props.navigation.goBack()}/>
            <Text style={styles.logintext}>Sign</Text>
          </View>
          <View style={styles.inputStyle}>
            <Text style={styles.account}>Phone Number or email</Text>

            <Inputfield1
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
              Errorstyle={{ marginLeft: '5%' }}
              ShowError={ShowError.EmailError}
              Error={EmailError}
              InputFieldStyle={{
                borderColor: ShowError.EmailError ? 'red' :'rgba(255, 255, 255, 0.06)',
                borderWidth: 1, 
           
              }}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.account}>Referral Code (Optional) </Text>
              <TouchableOpacity onPress={handleIconPress}>
              <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
          <VECTOR_ICONS.AntDesign name="down" size={15} color={'rgba(255, 255, 255, 0.6)'} />
        </Animated.View>
        </TouchableOpacity>
            </View>

            {isInputVisible && (
            <Inputfield1
              placeholder={'Enter referral code'}
              MaxLength={6}
              keyboardType="number-pad"
              value={Pincode}
              onBlur={() => {
                if (Pincode) {
                  setShowError((prevState) => ({
                    ...prevState,
                    PincodeError: true,
                  }));
                }
              }}
              onChangeText={(text) => {
                setPincode(text);
                if (text) {
                  setPincodeError(OTPVerification(text));
                } else {
                  setPincodeError("");
                  setShowError((prevState) => ({
                    ...prevState,
                    PincodeError: false,
                  }));
                }
              }}
              Errorstyle={{ marginLeft: '5%' }}
              ShowError={ShowError.PincodeError}
              Error={PincodeError}
              InputFieldStyle={{
                borderColor: ShowError.PincodeError ? 'red' :'rgba(255, 255, 255, 0.06)',
                borderWidth: 1, 
           
              }}
            />
            )}

          </View>

          <WholeButton1 Label={'Next'} Action={OnSignupBtnPress} styles={{ width: width * 0.9 }} />
          <View style={styles.accountStyle}>
            <View style={styles.viewStyle}></View>
            <Text style={styles.accounttextStyle}>Or, sign in with</Text>
            <View style={styles.viewStyle}></View>
          </View>



          <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: width * 0.34, alignSelf: 'center', marginTop: '10%', }}>
            <TouchableOpacity  style={styles.loginWithGoogleViewIos}>
              <Image
                source={IMAGEPATH.Apple} style={{ width: 25, height: 32, marginHorizontal: '1%' }} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.loginWithGoogleViewIos, { paddingVertical: '13%', }]}>
              <Image source={IMAGEPATH.Google} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
          </View>


          <View style={{ width: width * 0.9, alignSelf: 'center', marginTop: '35%', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.account1}>By signing up, you agree to the</Text>
              <TouchableOpacity><Text style={[styles.account1, { color: '#2F9ED6' }]}> Privacy policy</Text></TouchableOpacity><Text style={styles.account1}>and</Text>
            </View>
            <TouchableOpacity style={{ alignItems: 'center' }}><Text style={[styles.account1, { color: '#2F9ED6' }]}>Terms of use</Text></TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  mainviewStyle: {
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    marginVertical: '6%',
  },
  logoStyle: {
    // marginTop: 84.43,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  logintext: {
    fontSize: 32,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    color: '#fff',
    marginTop: '14%',
    lineHeight: 32.97,
  },
  inputStyle: {
    marginTop: 15,

  },
  accountStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 3,

  },
  accounttextStyle: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: '#3E4049',
    marginHorizontal: '3%'
  },
  loginWithGoogleViewIos: {

    backgroundColor: '#F6F6F633',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    width: width * 0.15,
    alignSelf: 'center'
  },
  account: {
    fontSize: 12,
    // fontFamily: FONTS.Regular,
    fontWeight: '400',
    color: '#rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    marginLeft: '6%',
    marginVertical: '2%'
  },
  account1: {
    fontSize: 12,
    // fontFamily: FONTS.Regular,
    fontWeight: '500',
    color: '#rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    marginLeft: '1%',

  },
  viewStyle: {
    width: width * 0.35,
    backgroundColor: '#2D2F36',
    height: 1.5


  },
})