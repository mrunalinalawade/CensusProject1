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
                                placeholder={'New password'}
                                // PasswordField
                                placeholderTextColor={'#B1B1B1'}
                                MaxLength={16}
                                ShowPassword={SeeNewPassword}
                                value={NewPassword}
                                PasswordPress={() => setSeeNewPassword(!SeeNewPassword)}
                                onBlur={() => {
                                    if (NewPassword != '' || NewPassword != undefined) {
                                        setShowError(prevState => ({
                                            ...prevState,
                                            NewPasswordError: true,
                                        }));
                                    }
                                }}
                                ViewStyle={{ borderRadius: 5, marginTop: '-1%' }}
                                passwordIconStyle={{ marginRight: '5%' }}
                                InputFieldStyle={{ paddingVertical: '1%', color: 'rgba(38, 38, 38, 0.5)', fontSize: 14, fontFamily: FONTS.Regular, paddingLeft: '3%' }}
                                onChangeText={(text) => {
                                    if (NewPassword != '' || NewPassword != undefined) {
                                        setNewPassword(text);
                                        setNewPasswordError(ValidatePassword(text));
                                    }
                                }}
                                ShowError={ShowError.NewPasswordError}
                                Error={NewPasswordError}
                                Errorstyle={{ fontSize: 12, fontFamily: FONTS.light }}
                                ContainerStyle={{ marginVertical: '1%', marginBottom: 18 }}
                            />

                            <Inputfield1
                                placeholder={'Confirm password'}
                                placeholderTextColor={'#B1B1B1'}
                                MaxLength={16}
                                value={ConfirmPassword}
                                PasswordPress={() => setSeeConfirmPassword(!SeeConfirmPassword)}
                                // PasswordField
                                ViewStyle={{ borderRadius: 5, marginTop: '-1%' }}
                                ShowPassword={SeeConfirmPassword}
                                onBlur={() => {
                                    if (ConfirmPassword != '' || ConfirmPassword != undefined) {
                                        setShowError(prevState => ({
                                            ...prevState,
                                            ConfirmPasswordError: true,
                                        }));
                                    }
                                }}
                                Errorstyle={{ fontSize: 12, fontFamily: FONTS.light, color: 'red' }}
                                passwordIconStyle={{ marginRight: '5%' }}
                                InputFieldStyle={{ paddingVertical: '1%', color: 'rgba(38, 38, 38, 0.5)', fontSize: 14, fontFamily: FONTS.Regular, paddingLeft: '3%' }}
                                onChangeText={(text) => {
                                    if (ConfirmPassword != '' || ConfirmPassword != undefined) {
                                        setConfirmPassword(text);
                                        setConfirmPasswordError(ValidateConfirmPassword(text, NewPassword));
                                    }
                                }}
                                ShowError={ShowError.ConfirmPasswordError}
                                Error={ConfirmPasswordError}
                                ContainerStyle={{ marginVertical: '1%', marginBottom: 20 }}

                            />

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}>
                            <VECTOR_ICONS.AntDesign name={'check'} size={15} />
                            <Text style={styles.account2}>Must contain 10-32 characters</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}>
                            <VECTOR_ICONS.AntDesign name={'check'} size={15} />
                            <Text style={styles.account2}>At least one uppercase, lowercase, and number.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}>
                            <VECTOR_ICONS.AntDesign name={'check'} size={15} />
                            <Text style={styles.account2}>No spaces.</Text>
                        </View>

                        <WholeButton1 Label={'Confirm'} Action={() => { }} styles={{ width: width * 0.9 }} />






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