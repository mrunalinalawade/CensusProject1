import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import { IMAGEPATH } from '../../../assets/Theme';
import Inputfield1 from '../../../Components/Inputfields1';
import WholeButton1 from '../../../Components/WholeButton1';
import FONTS from '../../../assets/Fonts';

const { height, width } = Dimensions.get('window');
const Walletfunding = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQuery1, setSearchQuery1] = useState("");

    const [Minimum, setMinimum] = useState('');
    const [MinimumError, setMinimumError] = useState('');

    const [ShowError, setShowError] = useState({

        MinimumError: false,

    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header navigate={() => props.navigation.goBack()} />

                <Text style={styles.logintext}>Transfer</Text>

                <View style={{ marginTop: '9%', alignItems: 'center', width: width * 0.9, backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: 5, padding: '3%', marginVertical: '3%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.8 }}>

                        <Text style={styles.account}>From</Text>
                        <View style={{ width: width * 0.68, flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={IMAGEPATH.ColorDoc} style={{ width: 22, height: 20 }} />

                            <TextInput
                                placeholder="Wallet1 (0x8243b...1455)"
                                style={{
                                    width: width * 0.89,
                                    color: '#fff',
                                    marginLeft: '2%',
                                    // backgroundColor:'red'
                                }}
                                placeholderTextColor={"#fff"}
                                value={searchQuery1}
                                onChangeText={(text) => setSearchQuery1(text)}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', right: 10 }}>
                        <Image source={IMAGEPATH.VerticalArrow} style={{ width: 20, height: 25 }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.8, bottom: '4%' }}>

                        <Text style={styles.account}>To</Text>
                        <View style={{ width: width * 0.68, flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={IMAGEPATH.Doc} style={{ width: 20, height: 20 }} />
                            <TextInput
                                placeholder="BitTrans spot wallet"
                                style={{
                                    width: width * 0.6,
                                    color: '#fff',
                                    marginLeft: '2%',
                                    // backgroundColor:'red'
                                }}
                                placeholderTextColor={"#fff"}
                                value={searchQuery}
                                onChangeText={(text) => setSearchQuery(text)}
                            />

                        </View>
                    </View>

                </View>

                <Text style={styles.textStyle}>Coin</Text>


                <TouchableOpacity onPress={() => {props.navigation.navigate('Coindropdown') }} style={[styles.InputFieldStyle,]}>
                    <Text style={styles.PlaceholderStyle}>Minimum 0.00000001</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.19, right: '3%', justifyContent: 'space-between' }}>
                        <Text style={styles.account1}>USDT</Text>
                        <Text style={[styles.account1, { color: '#768C5C', }]}>Max</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.33 }}>
                    <Text style={styles.account}>Available:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[styles.account, { color: '#FFFFFF' }]}> 0.0000000 </Text>
                        <Text style={[styles.account, { marginHorizontal: '1%', color: '#FFFFFF' }]} > BNB</Text>
                        {/* <VECTOR_ICONS.AntDesign name="down" size={15} color={'#77777A'} /> */}

                    </View>
                </View>

                <WholeButton1 Label={'Transfer'} Action={() => { }} styles={{ width: width * 0.9, marginTop: height * 0.29 }} />
            </View>
        </SafeAreaView>
    )
}

export default Walletfunding

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
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '14%',
        lineHeight: 32.97,
    },
    account: {
        fontSize: 12,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '10%'
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
        fontFamily: FONTS.regular,
        color: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'space-between',
        marginVertical: '2%'
    },
    account1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    PlaceholderStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 12,
        marginLeft: '3%',
        fontWeight: '400',
        fontFamily: FONTS.regular,

    },

})