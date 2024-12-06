import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../../Components/Header';
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';
import FONTS from '../../../assets/Fonts';
import WholeButton1 from '../../../Components/WholeButton1';
import RBSheet from 'react-native-raw-bottom-sheet';


const { height, width } = Dimensions.get('window');
const Tranfer = (props) => {
    const refRBSheet = useRef();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQuery1, setSearchQuery1] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header navigate={() => props.navigation.goBack()} />

                <Text style={styles.logintext}>Transfer</Text>

                <View style={{ marginTop: '9%', alignItems: 'center', width: width * 0.9, backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: 5, padding: '3%', marginVertical: '3%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.8 }}>

                        <Text style={styles.account}>From</Text>
                        <View style={{ width: width * 0.68, flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={IMAGEPATH.Doc} style={{ width: 20, height: 20 }} />
                            <TextInput
                                placeholder="BitTrans spot & Funding Wallet"
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
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Walletfunding')}} style={{ alignSelf: 'flex-end', right: 10 }}>
                        <Image source={IMAGEPATH.VerticalArrow} style={{ width: 20, height: 25 }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.8, bottom: '4%' }}>

                        <Text style={styles.account}>To</Text>
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

                </View>


                <View style={styles.inputStyle}>
                    <Text style={styles.account}>Coin</Text>

                    <TouchableOpacity onPress={() => { props.navigation.navigate('SelectCoin') }} style={[styles.InputFieldStyle,]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={IMAGEPATH.BNBChain} style={{ width: 25, height: 25 }} />
                            <Text style={[styles.signStyle]}>USDT</Text>
                        </View>
                        <TouchableOpacity onPress={props.RigtharrowPress}>
                            <VECTOR_ICONS.AntDesign
                                name={'right'} color={'#7F8082'} size={15} style={{ right: 16 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>


                    <Text style={styles.account}>Network</Text>

                    <TouchableOpacity onPress={() => { refRBSheet.current.open() }} style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Select Network</Text>
                        <TouchableOpacity onPress={props.NetworkPress}>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={15} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                </View>

                <WholeButton1 Label={'Transfer'} Action={() => { }} styles={{ width: width * 0.9, marginTop: height * 0.2 }} />




            </View>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={630}
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
                    <Text style={styles.logintext1}>Choose network</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                            <View>
                                <Text style={styles.crptoStyle}>BNB smart chain (BEP20?</Text>
                                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.00000)</Text>
                                <Text style={styles.signStyle1}>Minimum withdrawal 6 USDT</Text>
                                <Text style={styles.signStyle1}>Arrival time ≈ 3 mins </Text>
                            </View>


                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                            <View>
                                <Text style={styles.crptoStyle}>Tron (TRC20)</Text>
                                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.999999)</Text>
                                <Text style={styles.signStyle1}>Minimum withdrawal 10 USDT</Text>
                                <Text style={styles.signStyle1}>Arrival time ≈ 2 mins </Text>
                            </View>


                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                            <View>
                                <Text style={styles.crptoStyle}>BNB smart chain (BEP20?</Text>
                                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.00000)</Text>
                                <Text style={styles.signStyle1}>Minimum withdrawal 6 USDT</Text>
                                <Text style={styles.signStyle1}>Arrival time ≈ 3 mins </Text>
                            </View>


                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                            <View>
                                <Text style={styles.crptoStyle}>Tron (TRC20)</Text>
                                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.999999)</Text>
                                <Text style={styles.signStyle1}>Minimum withdrawal 10 USDT</Text>
                                <Text style={styles.signStyle1}>Arrival time ≈ 2 mins </Text>
                            </View>


                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                            <View>
                                <Text style={styles.crptoStyle}>BNB smart chain (BEP20?</Text>
                                <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.00000)</Text>
                                <Text style={styles.signStyle1}>Minimum withdrawal 6 USDT</Text>
                                <Text style={styles.signStyle1}>Arrival time ≈ 3 mins </Text>
                            </View>


                        </View>
                    </ScrollView>
                    <View style={[styles.viewStyle]}></View>
                    <View style={{ flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, backgroundColor: '#2E2F36', borderRadius: 5, padding: '4%', marginVertical: '1%' }}>
                        <Image source={IMAGEPATH.Square} style={{ width: 20, height: 20, }} />
                        <Text style={[styles.account, { color: 'rgba(255, 255, 255, 0.6)', width: width * 0.75 }]}>Ensure the network matches the withdrawal address and thedeposit platform support it, or assets may be lost</Text>

                    </View>




                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

export default Tranfer

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
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
    inputStyle: {
        marginTop: 20,
    },
    account: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '1%'
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
    PlaceholderStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 12,
        marginLeft: '3%',
        fontWeight: '400',
        fontFamily: FONTS.regular,

    },
    signStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginLeft: '8%'

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
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
})