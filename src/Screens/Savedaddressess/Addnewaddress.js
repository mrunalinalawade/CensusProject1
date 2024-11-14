import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import Inputfield1 from '../../Components/Inputfields1';
import { ValidateFullname, ValidateMobileNo, ValidateSurname } from '../../Components/ValidationConfig/Validations';
import WholeButton1 from '../../Components/WholeButton1';
import RBSheet from 'react-native-raw-bottom-sheet';
import FONTS from '../../assets/Fonts';

const { height, width } = Dimensions.get('window');
const Addnewaddress = (props) => {
    const refRBSheet1 = useRef();
    const refRBSheet = useRef();

    const refRBSheet3 = useRef();
    const refRBSheet4 = useRef();
    const [selected, setSelected] = useState('Exchange');


    const openExchangeSheet = () => {
        setSelected('Exchange');
        refRBSheet3.current.open();
    };

    const openWalletSheet = () => {
        setSelected('Wallet');
        refRBSheet4.current.open();
    };

    const Data = [{
        id: 1,
        crpto: "BitTans",

    },
    {
        id: 2,
        crpto: "Coinbase",

    },
    {
        id: 3,
        crpto: "Binance",

    },
    {
        id: 4,
        crpto: "HTX",

    },
    {
        id: 5,
        crpto: "Bitfinex",

    },
    {
        id: 6,
        crpto: "Coinbase",

    },

    {
        id: 7,
        crpto: "Binance",

    },
    {
        id: 8,
        crpto: "HTX",

    },
    {
        id: 9,
        crpto: "Bitfinex",

    },
    {
        id: '10',
        crpto: "Coinbase",

    },
    ]


    const Data1 = [{
        id: 1,
        crpto: "BitTrans wallet",

    },
    {
        id: 2,
        crpto: "Binance wallet",

    },
    {
        id: 3,
        crpto: "Trust wallet",

    },
    {
        id: 4,
        crpto: "MetaMask",

    },
    {
        id: 5,
        crpto: "Rabby wallet",

    },
    {
        id: 6,
        crpto: "Phantom",

    },

    {
        id: 7,
        crpto: "OKX wallet",

    },
    {
        id: 8,
        crpto: "Coinbase wallet",

    },
    {
        id: 9,
        crpto: "Bitget wallet",

    },
    {
        id: '10',
        crpto: "Other",

    },
    ]
    //   Address Wallet
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

                    <TouchableOpacity onPress={() => { props.navigation.navigate('Selectcurrency') }} style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Choose Coin</Text>
                        <TouchableOpacity onPress={props.RigtharrowPress}>
                            <VECTOR_ICONS.AntDesign
                                name={'right'} color={'#7F8082'} size={15} style={{ right: 16 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.account}>Address</Text>


                    <TouchableOpacity style={[styles.InputFieldStyle, { padding: '2.5%', }]}>
                        <Text style={styles.PlaceholderStyle}>Long press to paste</Text>
                        <TouchableOpacity onPress={props.scannPress}>
                            <Image source={IMAGEPATH.Scanner} style={{ width: 30, height: 40, right: 16 }} />

                        </TouchableOpacity>
                    </TouchableOpacity>


                    <Text style={styles.account}>Network</Text>

                    <TouchableOpacity onPress={() => { refRBSheet.current.open() }} style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Select Network</Text>
                        <TouchableOpacity onPress={props.NetworkPress}>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={15} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>




                    <Text style={styles.account}>Address origin</Text>

                    <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Select </Text>
                        <TouchableOpacity onPress={props.NetworkPress}>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={15} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.account}>Wallet label (Optional)</Text>

                    <TouchableOpacity style={[styles.InputFieldStyle,]}>
                        <Text style={styles.PlaceholderStyle}>Enter wallet label </Text>

                    </TouchableOpacity>




                </View>
                <WholeButton1 Label={'Withdraw'} Action={() => { }}
                    buttonStyle={{ color: 'rgba(255, 255, 255, 0.4)' }}
                    styles={{ width: width * 0.9, padding: '3%', backgroundColor: 'rgba(118, 140, 92, 0.25)', marginTop: '18%' }} />

            </View>


            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={310}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2,
                        height: 100
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center', marginTop: '4%' }}>

                    <Text style={styles.logintext1}>Address origin</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.6, alignSelf: 'flex-start', marginVertical: '6%' }}>
                        <TouchableOpacity onPress={() => {

                            openExchangeSheet();
                        }} style={[styles.inputStyle1, selected === 'Exchange' ? { backgroundColor: 'rgba(118, 140, 92, 0.1)', } : null]}>
                            <Text style={[styles.exStyle, selected === 'Exchange' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Exchange</Text></TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {

                                openWalletSheet();
                            }} style={[styles.inputStyle1, selected === 'Wallet' ? { backgroundColor: 'rgba(118, 140, 92, 0.1)', } : null]}>
                            <Text style={[styles.exStyle, selected === 'Wallet' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Wallet</Text></TouchableOpacity>

                    </View>



                    <Text style={[styles.account, { alignSelf: 'flex-start' }]}>Network</Text>
                    <TouchableOpacity style={[styles.InputFieldStyle]}>
                        <Text style={styles.PlaceholderStyle}>Select platform </Text>
                        <TouchableOpacity onPress={props.NetworkPress}>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={13} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>



                    <WholeButton1 Label={'Confirm'} Action={() => { }} styles={{ width: width * 0.9, bottom: '5%' }} />


                </View>
            </RBSheet>


            <RBSheet
                ref={refRBSheet3}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={620}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2,
                        height: 100
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '2%', flex: 1, width: width * 0.9, alignSelf: 'center', marginTop: '4%' }}>

                    <Text style={styles.logintext1}>Select exchange</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}


                        data={Data}
                        style={{ marginVertical: '4%', }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }}>
                                No Data Found
                            </Text>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <TouchableOpacity><Text style={styles.textStyle1}>{item?.crpto}</Text></TouchableOpacity>


                            </View>
                        )}
                    />



                </View>
            </RBSheet>

            <RBSheet
                ref={refRBSheet4}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={620}
                animationType={"fade"}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                    draggableIcon: {
                        backgroundColor: '#fff',
                        width: width * 0.2,
                        height: 100
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                        backgroundColor: "#1C1D22",
                    },
                }}
            >
                <View style={{ marginBottom: '2%', flex: 1, width: width * 0.9, alignSelf: 'center', marginTop: '4%' }}>

                    <Text style={styles.logintext1}>Address Wallet</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}


                        data={Data1}
                        style={{ marginVertical: '4%', }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: FONTS.semiBold, textAlign: 'center', marginTop: '10%' }}>
                                No Data Found
                            </Text>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>

                                <TouchableOpacity><Text style={styles.textStyle1}>{item?.crpto}</Text></TouchableOpacity>

                            </View>
                        )}
                    />



                </View>
            </RBSheet>



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
    signStyle1: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 18,
        // marginTop: '6%',
        // textAlign:'center'
    },
    inputStyle1: {
        alignItems: 'center',
        width: width * 0.25,

        padding: '3.8%',

        borderRadius: 5

    },
    exStyle: {

        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '500',
    },
    textStyle1: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'flex-start',
    },
    itemContainer: {
        alignSelf: 'flex-start',
        marginTop: '10%'


    }
})