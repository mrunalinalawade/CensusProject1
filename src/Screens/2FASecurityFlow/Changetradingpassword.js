
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import Header from '../../Components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputfield1 from '../../Components/Inputfields1';
import WholeButton1 from '../../Components/WholeButton1';
import { PASSWORDREGEX } from '../../Components/ValidationConfig/Validations';

const { height, width } = Dimensions.get('window');
const Changetradingpassword = (props) => {
    const [password, setpassword] = useState('');
    const [passerror, setpasserror] = useState(null);

    const [oldpassword, setoldpassword] = useState('');
    const [oldpasserror, setoldpasserror] = useState(null);

    const [CPassword, setCPassword] = useState('');
    const [CPasserror, setCPasserror] = useState(null);
    const [show, setshow] = useState(true);
    const [ShowError, setShowError] = useState({
        CPasserror: false,
        passerror: false,
        oldpasserror: false
    });

    function validatePasswordFields(passwordText = '', oldPasswordText = '') {
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
    
        if (!PASSWORDREGEX.test(oldPasswordText)) {
            setoldpasserror(oldPasswordText.length === 0 ? 'Please enter your old password.' : 
            'Old password must be 8-14 characters, include a number, special character, and both cases.'
          );
          isValid = false;
        } else {
            setoldpasserror(null);
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
          validatePasswordFields(password, oldpassword) &&
          validateConfirmPass(CPassword)
        );
      }, [password, oldpassword, CPassword]);
    
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

                        <Text style={styles.logintext}>Change trading password</Text>

                        <View style={{ marginTop: '9%' }}>
                            <Text style={{ fontSize: 12, fontWeight: '400', color: 'rgba(255, 255, 255, 0.6)', marginTop: '3%' }}>Old password</Text>

                            <Inputfield1
                                Password
                                Line
                                PasswordField
                                passwordIconStyle={{ right: '20%' }}
                                placeholder="Enter old password"
                                TextInputStyle={{ fontSize: 14, }}
                                InputFieldStyle={{
                                    // borderColor: COLORS.BORDERCOLOR,
                                    marginTop: 3,
                                    borderColor: ShowError.oldpasserror ? 'red' : 'rgba(255, 255, 255, 0.06)',
                                    borderWidth: 1,
                                }}
                                PasswordPress={() => setshow(!show)}
                                ShowPassword={show}
                                MaxLength={8}
                                value={oldpassword}
                                onBlur={() => setShowError((prevState) => ({
                                    ...prevState,
                                    oldpasserror: !!oldpasserror,
                                }))}
                                onChangeText={(text) => {
                                    setoldpassword(text);
                                    const error = validatePasswordFields(text);
                                    setoldpasserror(error);
                                    setShowError((prevState) => ({
                                        ...prevState,
                                        oldpasserror: !!error,
                                    }));
                                }}
                                ShowError={ShowError.oldpasserror}
                                Error={oldpasserror}

                            />


                            <Text style={{ fontSize: 12, fontWeight: '400', color: 'rgba(255, 255, 255, 0.6)', marginTop: '3%' }}>New Password</Text>
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

                            <Text style={{ fontSize: 12, fontWeight: '400', color: 'rgba(255, 255, 255, 0.6)', marginTop: '3%' }}>Confirm password</Text>
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
                            Label={'Change'}
                            Action={handleSubmit}
                            styles={{
                                width: width * 0.9,
                                marginTop: height * 0.26,
                                backgroundColor: buttonBackgroundColor,
                                color:buttonTextColor

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

export default Changetradingpassword

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
        marginTop: '16%',
        lineHeight: 32.97,
    },
})