import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import Inputfield1 from '../../Components/Inputfields1';
import { ValidateAccountnumber, ValidateBankDeposit, ValidateFullname, ValidateFullname2, ValidateMobileNo1 } from '../../Components/ValidationConfig/Validations';
import WholeButton1 from '../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const PaymentMethod = (props) => {

    const [FName, setFName] = useState('');
    const [FNameError, setFNameError] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [Deposit, setDeposit] = useState('')
    const [DepositError, setDepositError] = useState('')

    const [BankAccount, setBankAccount] = useState('')
    const [BankAccountError, setBankAccountError] = useState('')

    const [BankBranch, setBankBranch] = useState('')
    const [BankBranchtError, setBankBranchError] = useState('')

    const [ShowError, setShowError] = useState({
        FNameError: false,
        phoneError: false,
        DepositError: false,
        BankAccountError: false,
        BankBranchtError: false


    });

    const Form1com = () => {
        let fnameError = ValidateFullname(FName);
        let PhoneError = ValidateMobileNo1(phone);
        let depositError = ValidateBankDeposit(Deposit);
        let bankaccountError = ValidateAccountnumber(BankAccount);
        let bankbranchError = ValidateFullname2(BankBranch);

        if (fnameError == '' && PhoneError == '' && depositError == "" && bankaccountError == "" && bankbranchError == "") {
            props.navigation.navigate('Bankaddedsuccessfully')

        } else {
            setFNameError(fnameError);
            setPhoneError(PhoneError);
            setDepositError(depositError);
            setBankAccountError(bankaccountError);
            setBankBranchError(bankbranchError);
            setShowError({
                FNameError: true,
                phoneError: true,
                DepositError: false,
                BankAccountError: false,
                BankBranchtError: false

            });
        }

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <View style={styles.mainviewStyle}>
                    <Header
                        navigate={() => props.navigation.goBack()}
                    />
                    <Text style={styles.logintext}>Payment method</Text>
                    <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'space-between', width: width * 0.9, backgroundColor: 'rgba(233, 116, 3, 0.1)', borderRadius: 7, padding: '4%', marginVertical: '1%' }}>
                        <Image source={IMAGEPATH.Orange} style={{ width: 20, height: 20, }} />
                        <Text style={[styles.account, { width: width * 0.77, marginLeft: '2%' }]}>The name you used for KYC is <Text style={[styles.account, { fontWeight: '600', }]}>FAIZAN DANISH. Make sure the account you’re using is your own, otherwise you depositwill deposit will be rejected.</Text></Text>
                    </View>
                    <Text style={styles.confirm}>Payment method</Text>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('SearchBank')}} style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Select bank</Text>
                        <TouchableOpacity >
                            <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={15} style={{ right: 10 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.confirm}>Bank of deposit</Text>
                    <Inputfield1

                        placeholder={'Enter the of the depositing bank'}
                        MaxLength={12}
                        value={Deposit}
                        keyboardType="number-pad"
                        onBlur={() => {
                            if (Deposit != '' || Deposit != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    DepositError: true,
                                }));
                            }
                        }}
                        onChangeText={(num) => {
                            if (Deposit != '' || Deposit != undefined) {
                                setDeposit(num);
                                setDepositError(ValidateBankDeposit(num));
                            }
                        }}
                        ShowError={ShowError.DepositError}
                        Error={DepositError}

                    />
                    <Text style={styles.confirm}>Bank account</Text>
                    <Inputfield1

                        placeholder={'Enter account number'}
                        MaxLength={12}
                        value={BankAccount}
                        keyboardType="number-pad"
                        onBlur={() => {
                            if (BankAccount != '' || BankAccount != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    BankAccountError: true,
                                }));
                            }
                        }}
                        onChangeText={(num) => {
                            if (BankAccount != '' || BankAccount != undefined) {
                                setBankAccount(num);
                                setBankAccountError(ValidateAccountnumber(num));
                            }
                        }}
                        ShowError={ShowError.BankAccountError}
                        Error={BankAccountError}

                    />

                    <Text style={styles.confirm}>Bank branch (optional)</Text>

                    <Inputfield1
                        placeholder={'Enter the branch of your bank'}
                        MaxLength={256}
                        value={BankBranch}
                        onBlur={() => {
                            if (BankBranch != '' || BankBranch != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    BankBranchtError: true,
                                }));
                            }
                        }}
                        onChangeText={(text) => {
                            if (BankBranch != '' || BankBranch != undefined) {
                                setBankBranch(text);
                                setBankBranchError(ValidateFullname2(text));
                            }
                        }}
                        ShowError={ShowError.BankBranchtError}
                        Error={BankBranchtError} />

                    <Text style={styles.confirm}>Full name</Text>

                    <Inputfield1
                        placeholder={'Enter full name'}
                        MaxLength={256}
                        value={FName}
                        onBlur={() => {
                            if (FName != '' || FName != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    FNameError: true,
                                }));
                            }
                        }}
                        onChangeText={(text) => {
                            if (FName != '' || FName != undefined) {
                                setFName(text);
                                setFNameError(ValidateFullname(text));
                            }
                        }}
                        ShowError={ShowError.FNameError}
                        Error={FNameError} />

                    <Text style={styles.confirm}>Phone number</Text>

                    <Inputfield1
                        // edit={EmailEdit}
                        placeholder={'Phone number'}
                        MaxLength={12}
                        value={phone}
                        keyboardType="number-pad"
                        onBlur={() => {
                            if (phone != '' || phone != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    phoneerror: true,
                                }));
                            }
                        }}
                        onChangeText={(num) => {
                            if (phone != '' || phone != undefined) {
                                setPhone(num);
                                setPhoneError(ValidateMobileNo1(num));
                            }
                        }}
                        ShowError={ShowError.phoneError}
                        Error={phoneError}

                    />
                    <WholeButton1 Label={'Add payment method'} Action={Form1com} styles={{ width: width * 0.9 }} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default PaymentMethod

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
    account: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 125, 0, 1)',
        lineHeight: 20,
        // marginVertical: '1.5%'
    },
    confirm: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '3%'
    },
    InputFieldStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        paddingHorizontal: 8,
        fontSize: 12,
        fontWeight: '400',
        borderRadius: 7,
        width: width * 0.9,
        padding: '6%',
        // fontFamily: FONTS.regular,
        color: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'space-between',
        marginVertical: '2%'
    },
    PlaceholderStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 12,
        marginLeft: '3%',
        fontWeight: '400',
        // fontFamily: FONTS.regular,

    },
})