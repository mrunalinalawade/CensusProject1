import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { VECTOR_ICONS } from '../../assets/Theme'
import Inputfield1 from '../../Components/Inputfields1'
import COLORS from '../../assets/colors/Colors'
import WholeButton1 from '../../Components/WholeButton1'
import FONTS from '../../assets/Fonts'
import { PASSWORDREGEX, ValidateConfirmPassword, ValidatePassword } from '../../Components/ValidationConfig/Validations'
import Header from '../../Components/Header'
const { height, width } = Dimensions.get('window');
const SetTradingPassword = (props) => {
    const [password, setpassword] = useState('');
    const [passerror, setpasserror] = useState(null);
    const [show, setshow] = useState(true);

    const [CPassword, setCPassword] = useState('');
    const [CPasserror, setCPasserror] = useState(null);
    const [ShowError, setShowError] = useState({
        CPasserror: false,
        passerror: false,
       
    });

    function validatePasswordFields(passwordText = '') {
        let isValid = true;
    
        if (!PASSWORDREGEX.test(passwordText)) {
            setpasserror(
                passwordText.length === 0
                  ? 'Please enter your password.'
                  : 'Password must be 8-14 characters, include a number, special character, and both cases.'
              );
          isValid = false;
        } else {
            setpasserror(null);
        }
    
    
        return isValid;
      }
    
      function validateConfirmPass(text) {
        if (text === '') {
            setCPasserror('Please confirm your password.');
          return false;
        } else if (text !== password) {
            setCPasserror('Passwords should match.');
          return false;
        } else {
            setCPasserror(null);
          return true;
        }
      }
    
      const isValid = useMemo(() => {
        return (
          validatePasswordFields(password) &&
          validateConfirmPass(CPassword)
        );
      }, [password, CPassword]);
    
      const buttonBackgroundColor = isValid ? 'rgba(118, 140, 92, 1)' : 'rgba(118, 140, 92, 0.2)';
      const buttonTextColor = isValid ? '#fff' : 'rgba(255, 255, 255, 0.4)';
    
      const handleSubmit = () => {
        if (isValid) {
          props.navigation.navigate('PasswordchangedSuccessfully');
        }
      };




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={{ flex: 1 }}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={styles.mainviewStyle}>
                        <Header
                            // sign={true}
                            navigate={() => props.navigation.goBack()}
                        // navigate1={() => props.navigation.navigate('Signup')}
                        />
                        <Text style={styles.logintext}>Set Trading Password</Text>




                        <View style={styles.inputStyle}>
                            <Text style={styles.account}>Enter Password</Text>
                            <Inputfield1
                                Password
                                Line
                                PasswordField
                                passwordIconStyle={{ right: '20%' }}
                                placeholder="Enter new password"
                                TextInputStyle={{ fontSize: 14, }}
                                InputFieldStyle={{
                                    // borderColor: COLORS.BORDERCOLOR,
                                    marginTop: 3,
                                    borderColor: ShowError.passerror ? 'red' : 'rgba(255, 255, 255, 0.06)',
                                    borderWidth: 1,
                                }}
                                PasswordPress={() => setshow(!show)}
                                ShowPassword={show}
                                MaxLength={8}
                                value={password}
                                onBlur={() => setShowError((prevState) => ({
                                    ...prevState,
                                    passerror: !!passerror,
                                }))}
                                onChangeText={(text) => {
                                    setpassword(text);
                                    const error = validatePasswordFields(text);
                                    setpasserror(error);
                                    setShowError((prevState) => ({
                                        ...prevState,
                                        passerror: !!error,
                                    }));
                                }}
                                ShowError={ShowError.passerror}
                                Error={passerror}

                            />

                            <Text style={styles.account}>Confirm password</Text>
                            <Inputfield1
                                Password
                                Line
                                PasswordField
                                passwordIconStyle={{ right: '20%' }}
                                placeholder="Confirm new password"
                                TextInputStyle={{ fontSize: 14, }}
                                InputFieldStyle={{
                                    // borderColor: COLORS.BORDERCOLOR,
                                    marginTop: 3,
                                    borderColor: ShowError.CPasserror ? 'red' : 'rgba(255, 255, 255, 0.06)',
                                    borderWidth: 1,
                                }}
                                PasswordPress={() => setshow(!show)}
                                ShowPassword={show}
                                MaxLength={8}
                                value={CPassword}
                                onBlur={() => setShowError((prevState) => ({
                                    ...prevState,
                                    CPasserror: !!CPasserror,
                                }))}
                                onChangeText={(text) => {
                                    setCPassword(text);
                                    const error = validateConfirmPass(text);
                                    setCPasserror(error);
                                    setShowError((prevState) => ({
                                        ...prevState,
                                        CPasserror: !!error,
                                    }));
                                }}
                                ShowError={ShowError.CPasserror}
                                Error={CPasserror}

                            />

                        </View>
                    

                        <WholeButton1
                            Label={'Confirm'}
                            Action={handleSubmit}
                            styles={{
                                width: width * 0.9,
                                marginTop:height*0.37,
                                backgroundColor: buttonBackgroundColor,
                               
                            }}
                            buttonStyle={{
                                color:buttonTextColor

                            }}
                        />






                    </View>
                </KeyboardAwareScrollView>
            </View>

        </SafeAreaView>
    )
}

export default SetTradingPassword

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '6%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '20%',
        lineHeight: 32.97,
    },
    signStyle: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
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
    logoStyle: {
        // marginTop: 84.43,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-between'
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
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: '#rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        // marginTop: 2,
        marginVertical: '2%'
    },
    account2: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: '#FFF',
        lineHeight: 20,
        marginLeft: '2%',

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

})