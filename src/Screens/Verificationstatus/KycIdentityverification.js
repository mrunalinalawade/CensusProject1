
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Modal } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import WholeButton1 from '../../Components/WholeButton1'
import Header from '../../Components/Header'
import RBSheet from "react-native-raw-bottom-sheet";

const { height, width } = Dimensions.get('window');
const KycIdentityverification = (props) => {

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

                        <WholeButton1 Label={'Get Verified'} Action={() => { props.navigation.navigate('Startverification') }} styles={{ width: width * 0.8, }} />
                        

                        {/* <View style={{ backgroundColor:'rgba(255, 145, 0, 0.1)', padding: '4%', width: width * 0.812, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignSelf:'center' ,marginVertical:'3%'}}>
                            <VECTOR_ICONS.Fontisto name={'clock'}  color={'#FF9100'} size={15} />
                            <Text style={{fontSize:12,fontWeight:'400',color:'#FF9100',marginLeft:'3%'}}>Verification in progress, check back in a bit</Text>
                        </View>
                    </View>  */}

                        {/* <View style={{ backgroundColor: 'rgba(255, 102, 102, 0.1)', padding: '4%', width: width * 0.812, alignSelf: 'center', borderRadius: 8, marginTop: '5%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginVertical: '3%' }}>
                                <VECTOR_ICONS.Fontisto name={'clock'} color={'#FF6666'} size={15} />
                                <Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6666', marginLeft: '3%', flexDirection: 'row', alignItems: 'center' }}>Verification failed<TouchableOpacity>
                                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6666', textDecorationLine: 'underline', marginTop: '8%' }}>See why</Text></TouchableOpacity></Text>
                            </View>
                        </View>
                       <WholeButton1 Label={'Try again'} Action={() => { props.navigation.navigate('Startverification') }} styles={{ width: width * 0.8, }} />
                          */}




                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2%', marginTop: '2%' }}>
                            <Image source={IMAGEPATH.Vector1} />
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




        </SafeAreaView>
    )
}

export default KycIdentityverification

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
        padding: '4%',
        marginTop: '7%',
        borderRadius: 4

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
        marginLeft: '3%',


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
})