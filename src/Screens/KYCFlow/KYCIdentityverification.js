import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import WholeButton1 from '../../Components/WholeButton1'
import Header from '../../Components/Header'

const { height, width } = Dimensions.get('window');
const KYCIdentityverification = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                <View style={styles.mainviewStyle}>
                    <Header
                        label={true}
                        navigate={() => props.navigation.goBack()}

                    />
                    <Text style={styles.logintext}>Identity verification</Text>
                    <View style={styles.inputStyle}>
                        <Image source={IMAGEPATH.Identity} style={{ marginTop: '5%' }} />
                        <Text style={styles.account}>Standard Identity verification</Text>
                        <Text style={[styles.account1]}>It only takes 3-5 minutes to verify your account.Unlock all trading permissions and enjoy exclusive newcomer benefits of to 10,800 USDT!</Text>

                        <WholeButton1 Label={'Get Verified'} Action={() => { props.navigation.navigate('Startverification') }} styles={{ width: width * 0.8, }} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bottom: '5%', }}>
                            <Image source={IMAGEPATH.Vector} />
                            <Text style={styles.account2}>Your information on BitTrans is encrypted</Text>
                        </View>
                    </View>

                    <Text style={[styles.account, { fontSize: 16, marginTop: '7%' }]}>Once verified, you’ll enjoy the following benefits</Text>
                    <View style={[styles.inputStyle, { flexDirection: 'row', justifyContent: 'space-between', padding: '5%' }]}>
                        <Text style={styles.textStyle6}>Features</Text>
                        <Text style={styles.textStyle6}>Unverified<Text style={[styles.textStyle6, { color: '#2F9ED6' }]}> Current</Text></Text>
                        <Text style={styles.textStyle6}>Verified</Text>
                    </View>
                    <View style={[styles.inputStyle4, { marginTop: '2%' }]}>
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
                    </View>









                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default KYCIdentityverification

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '6%',
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
    inputStyle: {
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: '2%',
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

    }
})