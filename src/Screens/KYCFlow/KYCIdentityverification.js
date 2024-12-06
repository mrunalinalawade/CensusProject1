import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Modal } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import WholeButton1 from '../../Components/WholeButton1'
import Header from '../../Components/Header'
import RBSheet from "react-native-raw-bottom-sheet";

const { height, width } = Dimensions.get('window');
const KYCIdentityverification = (props) => {

    const refRBSheet1 = useRef();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                <View style={styles.mainviewStyle}>
                    <Header
                        label={true}
                        navigate={() => props.navigation.goBack()}
                        // navigate3={() =>}
                        navigate4={() => refRBSheet1.current.open()}

                    />
                    <Text style={styles.logintext}>Identity verification</Text>
                    <View style={styles.inputStyle}>
                        <Image source={IMAGEPATH.Identity} style={{ marginTop: '5%' }} />
                        <Text style={styles.account}>Standard Identity verification</Text>
                        <Text style={[styles.account1]}>It only takes 3-5 minutes to verify your account.Unlock all trading permissions and enjoy exclusive newcomer benefits of to 10,800 USDT!</Text>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Startverification') }} style={{ width: width * 0.8, borderRadius: 5, alignItems: 'center', flexDirection: 'row',backgroundColor:'#768C5C',justifyContent:'center',padding:'4%',marginVertical:'4%' }}>
                            <Text style={styles.textStyle64}>Get Verified  </Text>
                             <Image source={IMAGEPATH.Arrowwhite} style={{width:24,height:17}} />
                        </TouchableOpacity>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginVertical:'3%'}}>
                            <Image source={IMAGEPATH.Vector1} style={{ width: 10, height: 12 }} />
                            <Text style={styles.account2}>Your information on BitTrans is encrypted</Text>
                        </View>
                    </View>

                    <Text style={[styles.account, { fontSize: 16, marginTop: '7%' }]}>Once verified, you’ll enjoy the following benefits</Text>
                    <View style={[styles.inputStyle, { flexDirection: 'row', justifyContent: 'space-between', padding: '5%' }]}>
                        <Text style={styles.textStyle6}>Features</Text>
                        <Text style={styles.textStyle6}>Unverified<Text style={[styles.textStyle6, { color: '#2F9ED6' }]}> Current</Text></Text>
                        <Text style={styles.textStyle6}>Verified</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.9, marginVertical: '4%' }}>

                        <View style={{ alignItems: 'flex-start', width: width * 0.3 }}>
                            <Text style={styles.textStyle3}>Withdrawals</Text>
                            <Text style={styles.textStyle3}>P2P</Text>
                            <Text style={styles.textStyle3}>Trading</Text>
                            <Text style={styles.textStyle3}>Deposits/crypto purchases</Text>
                            <Text style={styles.textStyle3}>BitTrans earn</Text>
                            <Text style={styles.textStyle3}>Futures leverage</Text>

                        </View>

                        <View style={{ alignItems: 'center', width: width * 0.28 }}>
                            <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'center' }]}>0USDT</Text>
                            <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'center' }]}>0USDT</Text>
                            <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} style={{ marginTop: '7%' }} />
                            <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} style={{ right: '20%', marginTop: '7%' }} />
                            <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} style={{ marginTop: '7%' }} />
                            <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} style={{ marginTop: '7%' }} />


                        </View>

                        <View style={{ alignItems: 'flex-end', width: width * 0.28, }}>
                            <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>999,000 USDT</Text>
                            <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>500,000 USD</Text>
                            <VECTOR_ICONS.AntDesign name={'check'} size={15} color={'#FFFFFF'} style={{ marginTop: '14%' }} />
                            <VECTOR_ICONS.AntDesign name={'check'} size={15} color={'#FFFFFF'} style={{ marginTop: '14%' }} />
                            <VECTOR_ICONS.AntDesign name={'check'} size={15} color={'#FFFFFF'} style={{ marginTop: '14%' }} />
                            <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right', marginTop: '14%' }]}>Up to 125x</Text>

                        </View>

                    </View>
                    {/* <View style={[styles.inputStyle4, { marginTop: '2%' }]}>
                        <Text style={styles.textStyle3}>Withdrawals</Text>
                        <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'center' }]}>0USDT</Text>
                        <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>999,000 USDT</Text>
                    </View>
                    <View style={[styles.inputStyle4]}>
                        <Text style={styles.textStyle3}>P2P</Text>
                        <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'center' }]}>0USDT</Text>
                        <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>500,000 USD</Text>
                    </View>
                    <View style={[styles.inputStyle4]}>
                        <Text style={styles.textStyle3}>Trading</Text>
                        <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} />
                        <VECTOR_ICONS.AntDesign name={'check'} size={15} color={'#FFFFFF'} />
                    </View>

                    <View style={[styles.inputStyle4]}>
                        <Text style={styles.textStyle3}>Deposits/crypto purchases</Text>
                        <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} style={{ right: '20%' }} />
                        <VECTOR_ICONS.AntDesign name={'check'} size={15} color={'#FFFFFF'} />
                    </View>
                    <View style={[styles.inputStyle4]}>
                        <Text style={styles.textStyle3}>BitTrans earn</Text>
                        <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} />
                        <VECTOR_ICONS.AntDesign name={'check'} size={15} color={'#FFFFFF'} />
                    </View>
                    <View style={[styles.inputStyle4]}>
                        <Text style={styles.textStyle3}>Futures leverage</Text>
                        <VECTOR_ICONS.AntDesign name={'minus'} size={25} color={'#FFFFFF'} />
                        <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>Up to 125x</Text>
                    </View> */}









                </View>

            </ScrollView>



            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={570}
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
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>

                    <Image source={IMAGEPATH.Cancel} style={{ width: 60, height: 60, marginTop: '10%' }} />
                    <Text style={[styles.logintext1, { textAlign: 'center' }]}>Didn’t receive the SMS verification code?</Text>
                    <Text style={[styles.signStyle1, { textAlign: 'center', width: width * 0.75, marginTop: '6%', }]}>Make sure that the information you provide is true, accurate, and clear before trying again.</Text>

                    <View style={{ flexDirection: 'row', marginTop: '7%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>1.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start', }]}> The personal information you provide must match that  shown on your ID.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '2%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>2.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start' }]}> Make sure that your entire ID is clearly visible.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '2%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>3.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start' }]}> Only passports, driver’s licenses, and ID cards can beused for verification.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '2%', alignSelf: 'flex-start' }}>
                        <Text style={styles.signStyle1}>4.</Text>
                        <Text style={[styles.signStyle1, { alignSelf: 'flex-start' }]}> You must be at least 18 years old, and your ID must be valid and cannot be expired.</Text>
                    </View>

                    <WholeButton1 Label={'Try again'} Action={() => { props.navigation.navigate('Startverification') }} styles={{ width: width * 0.9, }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>
                        <Image source={IMAGEPATH.Telegram} style={{ height: 17, width: 17, }} />
                        <Text style={[styles.account3, { width: width * .799 }]}>Having trouble your account? Join our Telegram group and get help from our official customer support team</Text>
                    </View>
                </View>
            </RBSheet>

        </SafeAreaView>
    )
}

export default KYCIdentityverification

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '1%',
    },
    logoStyle: {
        // marginTop: 84.43,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '13%',
        lineHeight: 32.97,
    },
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
    inputStyle: {
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: '2%',
        marginTop: '7%',
        borderRadius: 7

    },
    account: {
        fontSize: 20,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)',
        lineHeight: 20,
        marginVertical: '3%'
    },
    account1: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        // marginVertical: '2%',
        textAlign: 'center',
        width: width * 0.87,
    },
    account2: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        marginLeft: '2%',


    },
    textStyle3: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        width: width * 0.26,
        // backgroundColor:'red',
        alignItems: 'center',
        marginTop: '7%'


    },
    textStyle6: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,

        alignItems: 'center',


    },

    inputStyle4: {
        alignItems: 'center',
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2%',
        alignSelf: 'center'
        // marginVertical:'2%'

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
    account3: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // lineHeight: 20,
        marginLeft: '2%',


    },
    textStyle64: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    }
})