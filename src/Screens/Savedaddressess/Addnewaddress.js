import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme';
import Inputfield1 from '../../Components/Inputfields1';
import { ValidateFullname, ValidateMobileNo, ValidateSurname } from '../../Components/ValidationConfig/Validations';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const Addnewaddress = (props) => {
    const [Network, setNetwork] = useState('');
    const [NetworkError, setNetworkError] = useState('');
    const [Coin, setCoin] = useState('');
    const [CoinError, setCoinError] = useState('');
    const [Address, setAddress] = useState('');
    const [AddressError, setAddressError] = useState('');
    const [Address1, setAddress1] = useState('');
    const [AddressError1, setAddressError1] = useState('');
    const [Wallet, setWallet] = useState('');
    const [WalletError, setWalletError] = useState('');

    const [ShowError, setShowError] = useState({

        NetworkError: false,


    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    Add={true}
                    navigate={() => props.navigation.goBack()}
                />
                <Text style={styles.logintext}>Add new address</Text>

                {/* <Image source={IMAGEPATH.EmptyAddress}  style={{width:150,height:150, alignSelf:'center',marginTop:height*0.13}}/>
                <Text style={styles.textStyel}>No addresses found</Text> */}


                <View style={styles.inputStyle}>
                    <Text style={styles.account}>Coin</Text>
                    <Inputfield1
                        placeholder={'Choose coin'}
                        MaxLength={256}
                        Rigtharrow
                        value={Coin}
                        // onBlur={() => {
                        //     if (Coin != '' || Coin != undefined) {
                        //         setShowError(prevState => ({
                        //             ...prevState,
                        //             CoinError: true,
                        //         }));
                        //     }
                        // }}
                        onChangeText={(text) => {
                            if (Coin != '' || Coin != undefined) {
                                setCoin(text);
                                setCoinError(ValidateFullname(text));
                            }
                        }}
                        ShowError={ShowError.CoinError}
                        Error={CoinError} />
                    <Text style={styles.account}>Address</Text>


                    <Inputfield1
                        placeholder={'Long press to paste'}
                        MaxLength={256}
                        scann
                        value={Address}
                        onBlur={() => {
                            if (Address.trim() !== '') {
                                setShowError((prevState) => ({
                                    ...prevState,
                                    AddressError: true,
                                }));
                            }
                        }}
                        onChangeText={(text) => {
                            if (Address != '' || Address != undefined) {
                                setAddress(text);
                                setAddressError(ValidateSurname(text));
                            }
                        }}
                        ShowError={ShowError.AddressError}
                        Error={AddressError}
                    />
                    <Text style={styles.account}>Network</Text>
                    <Inputfield1
                        placeholder={'Select Network'}
                        MaxLength={256}
                        Network

                        value={Network}
                        // onBlur={() => {
                        //   if (Network != '' || Network != undefined) {
                        //     setShowError(prevState => ({
                        //       ...prevState,
                        //       NetworkError: true,
                        //     }));
                        //   }
                        // }}
                        onChangeText={(text) => {
                            if (Network != '' || Network != undefined) {
                                setNetwork(text);
                                setNetworkError(ValidateFullname(text));
                            }
                        }}
                        ShowError={ShowError.NetworkError}
                        Error={NetworkError} />


                    <Text style={styles.account}>Address origin</Text>
                    <Inputfield1
                        // edit={EmailEdit}
                        placeholder={'Select'}
                        Network
                        MaxLength={12}
                        value={Address1}
                        keyboardType="number-pad"
                        onBlur={() => {
                            if (Address1 != '' || Address1 != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    Address1error: true,
                                }));
                            }
                        }}
                        onChangeText={(num) => {
                            if (Address1 != '' || Address1 != undefined) {
                                setAddress1(num);
                                setAddressError1(ValidateMobileNo(num));
                            }
                        }}
                        ShowError={ShowError.Address1Error}
                        Error={AddressError1}

                    />
                    <Text style={styles.account}>Wallet label (Optional)</Text>

                    <Inputfield1
                        // edit={EmailEdit}
                        placeholder={'Select'}
                        MaxLength={12}
                        value={Wallet}
                        keyboardType="number-pad"
                        onBlur={() => {
                            if (Wallet != '' || Wallet != undefined) {
                                setShowError(prevState => ({
                                    ...prevState,
                                    Walleterror: true,
                                }));
                            }
                        }}
                        onChangeText={(num) => {
                            if (Wallet != '' || Wallet != undefined) {
                                setWallet(num);
                                setWalletError(ValidateMobileNo(num));
                            }
                        }}
                        ShowError={ShowError.WalletError}
                        Error={WalletError}

                    />


                </View>
                <WholeButton1 Label={'Withdraw'} Action={() => { }}
                    buttonStyle={{ color: 'rgba(255, 255, 255, 0.4)' }}
                    styles={{ width: width * 0.9, padding: '3%', backgroundColor: 'rgba(118, 140, 92, 0.25)',marginTop:'18%' }} />

            </View>
        </SafeAreaView>
    )
}

export default Addnewaddress

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '2%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '20%',
        lineHeight: 32.97,
    },
    textStyel: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center',
        marginTop: '3%'

    },
    inputStyle: {
        marginTop: 20,
    },
    account: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '1%'
    }
})