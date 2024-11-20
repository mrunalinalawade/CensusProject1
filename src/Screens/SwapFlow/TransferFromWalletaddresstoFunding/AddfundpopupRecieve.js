import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WholeButton1 from '../../../Components/WholeButton1';

import Inputfield1 from '../../../Components/Inputfields1';
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';
import Header from '../../../Components/Header';

const { height, width } = Dimensions.get('window');
const AddfundpopupRecieve = (props) => {

    const [FName, setFName] = useState('');
    const [FNameError, setFNameError] = useState('');


    const [ShowError, setShowError] = useState({
        FNameError: false,


    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    swap={true}
                    textlabel={'Send BNB'}
                    navigate={() => props.navigation.goBack()}

                />

                <Text style={styles.account}>Address</Text>
                <Inputfield1
                    placeholder={'wfefsdfdfdsfdsf0x8243b...1455'}
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.account}>Network</Text>
                    <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%' }} />

                </View>

                <TouchableOpacity style={[styles.InputFieldStyle,]}>
                    <Text style={styles.PlaceholderStyle}>Select Network</Text>
                    <TouchableOpacity onPress={props.NetworkPress}>
                        <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={15} style={{ right: 20 }} />
                    </TouchableOpacity>
                </TouchableOpacity>


                <Text style={{
                    width: width * 0.9, fontSize: 11,
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.6)',
                }}>The network you have selected in BSC. Please ensure that the withdrawal address supports in BNB Smart Chain network. you will potentially lose your assets if the chosen platform does not support refunds of wrongfully deposited assets.</Text>
                <Text style={{
                    fontSize: 11,
                    fontWeight: '400',
                    color: '#2F9ED6'
                }}>BSC Network Verification</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.account}>Withdrawal amount</Text>
                    <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%' }} />
                </View>
                <TouchableOpacity onPress={() => { }} style={[styles.InputFieldStyle,]}>
                    <Text style={styles.PlaceholderStyle}>Minimum 0.00000001</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.19, right: '3%', justifyContent: 'space-between' }}>
                        <Text style={styles.account1}>USDT</Text>
                        <Text style={[styles.account1, { color: '#768C5C', }]}> Max</Text>
                    </View>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9 }}>
                    <Text style={styles.account}>Available</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[styles.account, { color: '#FFFFFF' }]}>0.0223435345</Text>
                        <Text style={[styles.account, { marginHorizontal: '1%', color: '#FFFFFF' }]} > USDT</Text>
                        <VECTOR_ICONS.AntDesign name="down" size={15} color={'#77777A'} />

                    </View>
                </View>
            </View>
            <View style={styles.viewStyle}></View>
            <View style={{ width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: '10%', alignSelf: 'flex-start' }}>
                    <VECTOR_ICONS.Entypo name="dot-single" size={20} color={'#77777A'} />
                    <Text style={[styles.signStyle1, { alignSelf: 'flex-start', width: width * 0.84 }]}> Do not withdraw directly to a crowdfund or ICO. We will not credit your account with token form the sale</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '4%', alignSelf: 'flex-start' }}>
                    <VECTOR_ICONS.Entypo name="dot-single" size={20} color={'#77777A'} />
                    <Text style={[styles.signStyle1, { alignSelf: 'flex-start', width: width * 0.84 }]}> Do not transact with sanctioned entitles <Text style={[styles.signStyle1,{color:'#2F9ED6'}]}>Learn more.</Text></Text>
                </View>
            </View>

            <View style={[styles.viewStyle,{marginTop:'10%'}]}></View>
            <View style={{ alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, flexDirection: 'row', alignSelf: 'center' }}>
                <View>
                    <View style={{flexDirection:'row',alignItems:'center', width: width * 0.31,justifyContent:'space-between'}}>
                    <Text style={styles.account}>Receive amount</Text>
                    <VECTOR_ICONS.AntDesign name={'swap'} color={'#8D939F'} size={20} />

                    </View>
                    
                    <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
                        <Text style={styles.account1}>0.00</Text>
                        <Text style={[styles.account1, { fontSize: 14 }]}> BNB</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.account}>Network fee </Text>
                        <Text style={[styles.account, { color: '#fff' }]}> 0.00</Text>
                        <Text style={[styles.account, { color: '#fff' }]}> BNB</Text>

                    </View>

                </View>


                <WholeButton1 Label={'Withdraw'} Action={() => props.navigation.navigate('Addressreveal')} styles={{ width: width * 0.42, padding: '3%', marginTop: '13%' }} />


            </View>





        </SafeAreaView>
    )
}

export default AddfundpopupRecieve

const styles = StyleSheet.create({
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '17%',
        lineHeight: 32.97,
    },
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '1%',
    },
    account: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        marginVertical: '1.5%'
    },
    account1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        // lineHeight: 20,
        // marginVertical: '1.5%'
    },
    signStyle1: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 18,
        // marginTop: '6%',
        // textAlign:'center'
    },
    viewStyle: {
        width: width,
        backgroundColor: '#2D2E36',
        height: 1.5,
        marginTop: '5.5%'


    },
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
    crptoStyle: {
        fontSize: 16,
        fontWeight: '600',

        color: '#fff',
        marginTop: '2%',

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
        //   fontFamily: FONTS.regular,
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
