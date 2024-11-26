import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';
import WholeButton1 from '../../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const Chats = (props) => {
    const [selectedTab, setSelectedTab] = useState('Payment');
    const tabs = ['Payment', 'Tips']
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    // order={true}
                    navigate={() => props.navigation.goBack()}

                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '10%' }}>
                    <Text style={styles.logintext}>Pay the seller</Text>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(118, 140, 92, 1)', borderRadius: 8, padding: '3%', alignItems: 'center' }}>
                        <Text style={styles.chatStyle}>Chat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' }}>
                    <Text style={styles.pay}>Order will be cancel in </Text>
                    <Text style={styles.time}>14:53</Text>
                </View>

                <View style={styles.tabContainer}>
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setSelectedTab(tab)}
                            style={styles.tabButton}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    selectedTab === tab && styles.selectedTabText,
                                ]}
                            >
                                {tab}
                            </Text>
                            {selectedTab === tab && <View style={styles.underline} />}
                        </TouchableOpacity>
                    ))}
                </View>
                {
                    selectedTab === 'Payment' ?

                        <ScrollView showsVerticalScrollIndicator={false} style={{ height: height * 0.59, }} >

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '8%' }}>
                                <Image source={IMAGEPATH.One} style={{ width: 30, height: 30 }} />
                                <Text style={styles.pay1}>Transfer via Google pay (Gpay):</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={IMAGEPATH.Line} style={{ marginLeft: '4%', height: 270, marginTop: '4%' }} />
                                <View style={{ width: width * 0.77, marginLeft: '4%' }}>
                                    <View style={styles.ViewStylew2}>
                                        <View style={styles.viewStyle8}>
                                            <Image source={IMAGEPATH.Google} style={{ width: 35, height: 30 }} />
                                            <Text style={[styles.tabText62, { marginLeft: '3%' }]} >Google pay (Gpay)</Text>
                                        </View>
                                        <View style={styles.viewStle5}>
                                            <Text style={styles.tabText61} >You pay</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <Text style={[styles.tabText624, { right: 5 }]}>₹ 6,000.00</Text>
                                                <Image source={IMAGEPATH.Copy} style={{ width: 15, height: 16.5 }} />
                                            </View>

                                        </View>

                                        <View style={styles.viewStle5}>
                                            <Text style={styles.tabText61} >Name</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <Text style={[styles.tabText62, { right: 5 }]}>₹ 89.95</Text>
                                                <Image source={IMAGEPATH.Copy} style={{ width: 15, height: 16.5 }} />
                                            </View>

                                        </View>

                                        <View style={styles.viewStle5}>
                                            <Text style={styles.tabText61} >Google pay wallet VPA</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <Text style={[styles.tabText62, { right: 5 }]}>SBIGpay</Text>
                                                <Image source={IMAGEPATH.Copy} style={{ width: 15, height: 16.5 }} />
                                            </View>
                                        </View>

                                        <View style={styles.viewStle5}>
                                            <Text style={styles.tabText61} >QR code</Text>
                                            <Text style={[styles.tabText62, { right: 5 }]}>View QR</Text>
                                        </View>
                                    </View>
                                    <Text style={{ width: width * 0.78, color: 'rgba(255, 255, 255, 0.5)', fontSize: 11, fontWeight: '400', marginLeft: '6%', marginTop: '2%' }}>Tips: Use your own payment account and ensure that the name on the account matches the name you used to verify you BitTrans...</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={IMAGEPATH.Two} style={{ width: 30, height: 30 }} />
                                <Text style={styles.pay1}>Transfer via Google pay (Gpay):</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', width: width * 0.87, justifyContent: 'space-between', marginVertical: '8%' }}>
                                <Text style={[styles.time, { fontSize: 14, }]}>Advertiser’s Terms</Text>
                                <TouchableOpacity>
                                    <VECTOR_ICONS.AntDesign name={'down'} size={15} color={'rgba(255, 255, 255, 0.5)'} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', backgroundColor: 'rgba(47, 158, 214, 0.1)', padding: '3%', borderRadius: 7, marginTop: height * 0.13, marginBottom: '3%' }}>
                                <VECTOR_ICONS.AntDesign name={'questioncircleo'} size={15} color={'#2F9ED6'} />
                                <Text style={styles.help}>Help</Text></TouchableOpacity>


                        </ScrollView> :
                        <>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.9, marginTop: '8%' }}>
                                <Image source={IMAGEPATH.correct} style={{ width: 18, height: 18 }} />
                                <Text style={[styles.time,{width:width*0.81}]}>Pay with you own payment account that matches your BitTrans verified name.<Text style={styles.pay}> Otherwise, you order may be cancelled, and your account suspended.</Text></Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.9, marginTop: '8%' }}>
                                <Image source={IMAGEPATH.Wrong} style={{ width: 18, height: 18 }} />
                                <Text style={[styles.pay,{width:width*0.81}]}>Do not include any crypto related words (e.g Crypto, BTC) in the description of your payment transfer.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.9, marginTop: '8%' }}>
                                <Image source={IMAGEPATH.Alert} style={{ width: 18, height: 18 }} />
                                <Text style={[styles.pay,{width:width*0.81}]}>Upon payment completion, failure to click the “Transferred, Notify seller” button will cause your order to timeout and be cancelled. you might lose your funds.</Text>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', width: width * 0.87, justifyContent: 'space-between', marginVertical: '8%' }}>
                                <Text style={[styles.time, { fontSize: 14, }]}>Advertiser’s Terms</Text>
                                <TouchableOpacity>
                                    <VECTOR_ICONS.AntDesign name={'down'} size={15} color={'rgba(255, 255, 255, 0.5)'} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', backgroundColor: 'rgba(47, 158, 214, 0.1)', padding: '3%', borderRadius: 7, marginTop: height * 0.13, marginBottom: '3%' }}>
                                <VECTOR_ICONS.AntDesign name={'questioncircleo'} size={15} color={'#2F9ED6'} />
                                <Text style={styles.help}>Help</Text></TouchableOpacity>

                        </>}


                <View style={[styles.viewStyle]}></View>
                <WholeButton1 Label={'View payment details'} Action={() => { props.navigation.navigate('CloseAds')}} styles={{ width: width * 0.9, bottom: '3%' }} />

            </View>
        </SafeAreaView>
    )
}

export default Chats

const styles = StyleSheet.create({
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        // marginTop: '13%',
        lineHeight: 32.97,
    },
    mainviewStyle: {

        width: width * 0.9,
        alignSelf: 'center',

    },
    chatStyle: {
        fontSize: 12,
        color: '#1C1D22',
        fontWeight: '400',
        marginHorizontal: '4%'

    },
    pay: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '400'
    },
    time: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'

    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.36,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: '12%',
    },

    underline: {
        marginTop: 7,
        height: 3,
        borderRadius: 10,
        width: '48%',
        backgroundColor: 'rgba(118, 140, 92, 1)',
        alignSelf: 'center',
    },
    tabText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',

    },
    selectedTabText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    pay1: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '400',
        marginLeft: '5%'
    },
    ViewStylew2: {
        alignItems: 'center',
        width: width * 0.78,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        alignSelf: 'flex-start',
        padding: '4%',
        borderRadius: 10,
        bottom: '2%',
        marginLeft: '5%',
        // backgroundColor: 'red'
    },
    viewStyle8: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',

    },
    tabText62: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    tabText624: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    viewStle5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.69,
        marginTop: '5%'
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
    time: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'

    },
    viewStyle: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '1%',
    },
    help: {
        fontSize: 12,
        fontWeight: '500',
        color: '#2F9ED6',
        marginHorizontal: '2%'

    },
})