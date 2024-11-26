import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import WholeButton1 from '../../Components/WholeButton1';



const { height, width } = Dimensions.get('window');
const AdSuccessfullyPosted = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={{ flex: 1 }}>
                <View style={styles.mainviewStyle}>
                    <Header navigate={() => props.navigation.goBack()} />
                    <View style={styles.inputStyle}>
                        <Image source={IMAGEPATH.Checkmaark} style={{ marginLeft: '5%' }} />
                        <Text style={styles.account}>Ad Successfully Posted</Text>
                        <Text style={[styles.account2, { fontSize: 14, marginTop: '3%' }]}>Your ad has been published and users can now place orders.Please pay attention to the prompt for new orders.</Text>
                    </View>


                    <View style={styles.ViewStylew2}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.sell}>Sell</Text>
                                <Text style={styles.UsdtStyle}>USDT</Text>
                                <Text style={styles.withStyle}>with</Text>
                                <Text style={styles.UsdtStyle}>INR</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: 'rgba(46, 227, 158, 0.1)', padding: '5.5%', borderRadius: 7, alignItems: 'center' }}><Text style={[styles.text6, { color: '#2EE39E' }]}>Online </Text></TouchableOpacity>


                                <VECTOR_ICONS.FontAwesome name={'share-alt'} color={'#FFFFFF'} size={20} style={{ left: 15 }} />
                            </View>



                        </View>

                        <Text style={[styles.UsdtStyle, { marginLeft: '0%', marginTop: '2%' }]}>₹ 90.50</Text>

                        <View style={styles.viewStle5}>
                            <Text style={styles.tabText61} >Amount</Text>
                            <Text style={styles.tabText62}>1,495 USDT</Text>
                        </View>
                        <View style={[styles.viewStle5, { marginTop: '5%' }]}>
                            <Text style={styles.tabText61} >Limit</Text>
                            <Text style={styles.tabText62}>200 - 1,00,000 INR</Text>
                        </View>
                        <View style={styles.viewStle6}>

                            <Text style={styles.tabText61}>Ad Number</Text>

                            <Text style={styles.tabText62}>12124235353242536352</Text>
                        </View>
                        <View style={[styles.viewStyle1,]}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '4%' }}>
                            <View style={{ backgroundColor: '#2F9ED6', width: 3, height: 15, }} />
                            <Text style={styles.coin6}>Bank Transfer (India)</Text>
                        </View>


                    </View>
                    <TouchableOpacity><Text style={{ color: '#2F9ED6', fontSize: 12, fontWeight: '400', alignSelf: 'center', marginTop: '14%' }}>View Status</Text></TouchableOpacity>



                    <WholeButton1 Label={'Next'} Action={() => { }} styles={{ width: width * 0.9, bottom: '2%' }} />







                </View>
            </View>
        </SafeAreaView>
    )
}

export default AdSuccessfullyPosted

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '6%',
    },
    inputStyle: {
        marginTop: height * 0.12,
        alignSelf: 'center',
        width: width * 0.9,
        alignItems: 'center'
    },
    account: {
        fontSize: 22,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)',
        // lineHeight: 20,
        marginTop: '6%'
    },
    account2: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // lineHeight: 20,
        marginTop: '6%',
        textAlign: 'center'
    },
    ViewStylew2: {

        width: width * 0.9,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        padding: '5%',
        borderRadius: 10,
        marginTop: '8%',

    },
    sell: {
        fontSize: 18,
        fontWeight: '600',
        color: '#F6465D',

    },
    UsdtStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: '3%'

    },
    withStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: '3%'

    },
    viewStle5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,
        marginTop: '10%'
    },
    viewStle6: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,
        marginVertical: '4%'
    },
    tabText61: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    tabText62: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',

    },
    viewStyle1: {
        width: width * 0.9,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '4%',
        bottom: "1%"
    },
    coin6: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: '3%'

    },
})