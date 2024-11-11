import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { VECTOR_ICONS } from '../../assets/Theme'
import Inputfield1 from '../../Components/Inputfields1'
import COLORS from '../../assets/colors/Colors'
import WholeButton1 from '../../Components/WholeButton1'
import FONTS from '../../assets/Fonts'
import { ValidateConfirmPassword, ValidatePassword } from '../../Components/ValidationConfig/Validations'
import Header from '../../Components/Header'
const { height, width } = Dimensions.get('window');
const SetPassword = (props) => {
    const [NewPassword, setNewPassword] = useState('')
    const [NewPasswordError, setNewPasswordError] = useState('')
    const [SeeNewPassword, setSeeNewPassword] = useState(true)
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [ConfirmPasswordError, setConfirmPasswordError] = useState('')
    const [SeeConfirmPassword, setSeeConfirmPassword] = useState(true)

    const [ShowError, setShowError] = useState({

        NewPasswordError: false,
        ConfirmPasswordError: false

    });

    const [isLengthValid, setIsLengthValid] = useState(false);
    const [isComplexityValid, setIsComplexityValid] = useState(false);
    const [isNoSpaces, setIsNoSpaces] = useState(false);

    const ValidatePassword = (password) => {
        setIsLengthValid(password.length >= 10 && password.length <= 32);
        setIsComplexityValid(
            /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)
        );
        setIsNoSpaces(!/\s/.test(password));
        if (!isLengthValid) return 'Password must be 10-32 characters';
        if (!isComplexityValid) return 'Must include uppercase, lowercase, and number';
        if (!isNoSpaces) return 'Password cannot contain spaces';
        return ''; 
    };
    const ValidateConfirmPassword = (confirmPassword) => {
        return confirmPassword === NewPassword ? '' : 'Passwords do not match';
    };
    const onPasswordChange = (text) => {
        setNewPassword(text);
        setNewPasswordError(ValidatePassword(text));
    };
    const onConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        setConfirmPasswordError(ValidateConfirmPassword(text));
    };

    const ConfirmPasswordfun = () => {
        const NewPassErr = ValidatePassword(NewPassword);
        const ConPassErr = ValidateConfirmPassword(ConfirmPassword);

        if (NewPassErr == '' && ConPassErr == '') {
            props.navigation.navigate('Login');
        } else {
            setNewPasswordError(NewPassErr);
            setConfirmPasswordError(ConPassErr);
            setShowError({
                NewPasswordError:!!NewPassErr,
                ConfirmPasswordError:!!ConPassErr,
            });
        }
    };

    const isValid = isLengthValid && isComplexityValid && isNoSpaces;
    const buttonBackgroundColor = isValid ? 'rgba(118, 140, 92, 1)' : 'rgba(118, 140, 92, 0.2)';
    const buttonTextColor = isValid ? '#fff' : 'rgba(255, 255, 255, 0.2)';


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
                        <Text style={styles.logintext}>Set password</Text>
                        <Text style={styles.signStyle}>Almost done! Just one final step to go.</Text>



                        <View style={styles.inputStyle}>
                            <Text style={styles.account}>Create password</Text>
                            <Inputfield1
                                placeholder="New password"
                                placeholderTextColor="#B1B1B1"
                                MaxLength={16}
                                ShowPassword={SeeNewPassword}
                                value={NewPassword}
                                PasswordPress={() => setSeeNewPassword(!SeeNewPassword)}
                                onBlur={() => {
                                    setShowError((prevState) => ({
                                        ...prevState,
                                        NewPasswordError: NewPasswordError ? true : false,
                                    }));
                                }}
                                InputFieldStyle={{
                                    borderColor: ShowError.NewPasswordError ? 'red' : 'rgba(255, 255, 255, 0.06)',
                                    borderWidth: 1,
                                }}
                                onChangeText={onPasswordChange}
                                ShowError={ShowError.NewPasswordError}
                                Error={NewPasswordError}
                                Errorstyle={{ fontSize: 12, fontFamily: FONTS.light }}
                            />
                            <Inputfield1
                                placeholder="Confirm password"
                                placeholderTextColor="#B1B1B1"
                                MaxLength={16}
                                value={ConfirmPassword}
                                PasswordPress={() => setSeeConfirmPassword(!SeeConfirmPassword)}
                                ShowPassword={SeeConfirmPassword}
                                onBlur={() => {
                                    setShowError((prevState) => ({
                                        ...prevState,
                                        ConfirmPasswordError: ConfirmPasswordError ? true : false,
                                    }));
                                }}
                                InputFieldStyle={{
                                    borderColor: ShowError.ConfirmPasswordError ? 'red' : 'rgba(255, 255, 255, 0.06)',
                                    borderWidth: 1,
                                }}
                                onChangeText={onConfirmPasswordChange}
                                ShowError={ShowError.ConfirmPasswordError}
                                Error={ConfirmPasswordError}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%', marginTop: '4%' }}>
                            <VECTOR_ICONS.AntDesign name="check" size={15} color={isLengthValid ? 'rgba(118, 140, 92, 1)' : 'rgba(255, 255, 255, 0.4)'} />
                            <Text style={styles.account2}>Must contain 10-32 characters</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}>
                            <VECTOR_ICONS.AntDesign name="check" size={15} color={isComplexityValid ? 'rgba(118, 140, 92, 1)' : 'rgba(255, 255, 255, 0.4)'} />
                            <Text style={styles.account2}>At least one uppercase, lowercase, and number.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}>
                            <VECTOR_ICONS.AntDesign name="check" size={15} color={isNoSpaces ? 'rgba(118, 140, 92, 1)' : 'rgba(255, 255, 255, 0.4)'} />
                            <Text style={styles.account2}>No spaces.</Text>
                        </View>

                        <WholeButton1
                Label={'Confirm'}
                Action={ConfirmPasswordfun}
                styles={{
                    width:width*0.9,
                    backgroundColor: buttonBackgroundColor,
                    color: buttonTextColor,
                }}
            />






                    </View>
                </KeyboardAwareScrollView>
            </View>

        </SafeAreaView>
    )
}

export default SetPassword

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