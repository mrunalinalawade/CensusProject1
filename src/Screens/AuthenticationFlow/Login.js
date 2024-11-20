import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FONTS from '../../assets/Fonts';
import COLORS from '../../assets/colors/Colors';
import { IMAGEPATH } from '../../assets/Theme';
import Inputfield1 from '../../Components/Inputfields1';
import WholeButton1 from '../../Components/WholeButton1';
import { ValidateEmail, ValidateMobileNo, } from '../../Components/ValidationConfig/Validations';
import Header from '../../Components/Header';
import RBSheet from "react-native-raw-bottom-sheet";

const { height, width } = Dimensions.get('window');
const Login = (props) => {
  const refRBSheet = useRef();
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [show, setshow] = useState(true);
  const [password, setpassword] = useState('')
  const [PasswordError, setPasswordError] = useState('')
  const [Cheaked, setCheaked] = useState(false);
  const [ShowError, setShowError] = useState({
    EmailError: false,
    PasswordError: false
  });
  const OnLoginBtnPress = () => {
    if (CheckValidation()) {
      refRBSheet.current.open()
     
    } else {
      setShowError({
        EmailError: EmailError !== '',
        PasswordError: PasswordError !== ''
      });
    }
  };

  const OnLoginBtnPress1 = () => {
    refRBSheet.current.close()
    props.navigation.navigate('FaceIDpermission') 
    // props.navigation.navigate('BottomTabbar')
  }


  const ValidatePassword = (password) => {
    const PASSWORDREGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return PASSWORDREGEX.test(password) ? "" : "Please enter valid password";
  };


  const CheckValidation = () => {
    let valid = true;

    // Validate email or phone
    const emailError = ValidateEmail(Email) === "" || ValidateMobileNo(Email) === "";
    setEmailError(emailError ? "" : "Please enter a valid email address or phone number.");
    if (!emailError) valid = false;

    // Validate password
    const passwordError = ValidatePassword(password);
    setPasswordError(passwordError);
    if (passwordError) valid = false;

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

            <Text style={styles.logintext}>Welcome back!</Text>
            <Text style={styles.signStyle}>We’re so excited to see you again!</Text>
            <View style={styles.inputStyle}>
              <Text style={styles.account}>Account Information</Text>
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
                ShowError={ShowError.EmailError}
                Error={EmailError}
                InputFieldStyle={{
                  borderColor: ShowError.EmailError ? 'red' :'rgba(255, 255, 255, 0.06)',
                  borderWidth: 1, 
             
                }}
              />





              <Inputfield1
                Password
                Line
                PasswordField
                passwordIconStyle={{ right: '20%' }}
                placeholder="Password"
                TextInputStyle={{ fontSize: 14, fontFamily: FONTS.medium }}
                InputFieldStyle={{
                  // borderColor: COLORS.BORDERCOLOR,
                  marginTop: 3,
                  borderColor: ShowError.PasswordError ? 'red' :'rgba(255, 255, 255, 0.06)',
                  borderWidth: 1, 
                }}
                PasswordPress={() => setshow(!show)}
                ShowPassword={show}
                MaxLength={8}
                value={password}
                onBlur={() => setShowError((prevState) => ({
                  ...prevState,
                  PasswordError: !!PasswordError,
                }))}
                onChangeText={(text) => {
                  setpassword(text);
                  const error = ValidatePassword(text);
                  setPasswordError(error);
                  setShowError((prevState) => ({
                    ...prevState,
                    PasswordError: !!error,
                  }));
                }}
                ShowError={ShowError.PasswordError}
                Error={PasswordError}
              
              />
            </View>
            <View style={styles.CheakBoxEntireVIEW}>
              <TouchableOpacity onPress={() => { props.navigation.navigate('Forgetpassword') }}>
                <Text style={styles.Forgotpass}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <WholeButton1 Label={'Login'} Action={OnLoginBtnPress} styles={{ width: width * 0.9 }} />
            <View style={styles.accountStyle}>
              <View style={styles.viewStyle}></View>
              <Text style={styles.accounttextStyle}>Or, sign in with</Text>
              <View style={styles.viewStyle}></View>
            </View>
            <View style={styles.appStyle}>
              <TouchableOpacity style={styles.loginWithGoogleViewIos}>
                <Image source={IMAGEPATH.Apple} style={{ width: 25, height: 32, marginHorizontal: '1%' }} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.loginWithGoogleViewIos, { paddingVertical: '13%', }]}>
                <Image source={IMAGEPATH.Google} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
            </View>
          </View>


          <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={235}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={styles.logintext1}>Identify verification required</Text>
                    <Text style={styles.signStyle1}>To enjoy the full range of our products and services, we kindly request you complete the identity verification process.</Text>
                    <WholeButton1 Label={'Okay'} Action={OnLoginBtnPress1} styles={{ width: width * 0.9,marginTop:'15%' }} />

                </View>
            </RBSheet>
        </KeyboardAwareScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Login

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
    color: '#rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    marginTop: 9,
  },
  accountStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,

  },
  accounttextStyle: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: '#3E4049',
    marginHorizontal: '3%'
  },
  signupStyle: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: '#fff',
  },
  Forgotpass: {
    fontSize: 12,
    fontFamily: FONTS.semiBold,
    fontWeight: '400',
    color: '#2F9ED6',
    marginTop: '2%', marginLeft: '2%'
  },
  RememberTEXT: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: '#fff',
    paddingLeft: 12,
    marginTop: '2%',
  },
  CheakBoxEntireVIEW: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
  },
  FALSECHEAK: {
    width: '13%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-1.7%'
  },
  inputStyle: {
    marginTop: 40,
  },

  imgStyle: {
    width: '62%',
    height: 62,
    resizeMode: 'contain',
  },
  signstyele: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: '#768C5C',
    fontWeight: '500'
  },
  account: {
    fontSize: 12,
    fontWeight: '400',
    color: '#rgba(255, 255, 255, 0.6)',
    lineHeight: 20,
    marginVertical: '1.5%'
  },
  viewStyle: {
    width: width * 0.35,
    backgroundColor: '#2D2F36',
    height: 1.5
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
  appStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width * 0.34,
    alignSelf: 'center',
    marginTop: '11%',
  },
  logintext1: {
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: FONTS.semiBold,
    color:'#fff',
    marginTop: '8%',
    lineHeight: 32.97,

},
signStyle1: {
  fontSize: 12,
  // fontFamily: FONTS.Regular,
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.6)',
  lineHeight: 18,
  marginTop: '4%',
  // textAlign:'center'
},

})