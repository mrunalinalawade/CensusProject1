import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';
import RBSheet from 'react-native-raw-bottom-sheet';

const { height, width } = Dimensions.get('window');
const BuyUSDT = (props) => {
    const refRBSheet1 = useRef();

    const [selectedTab, setSelectedTab] = useState('By Fiat');
    const tabs = ['By Fiat', 'By crypto']

    const [selectedTab1, setSelectedTab1] = useState('By Fiat');
    const tabs1 = ['By Fiat', 'Advertiser’s info']


    const [activeTab, setActiveTab] = useState(1);

    const tabs2 = [
        { id: 1, label: 'All' },
        { id: 2, label: 'Positive (3448)' },
        { id: 3, label: 'Negative (24)' },
    ];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Buy USDT'}
                    navigate={() => props.navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: '15%' }} >
                    <TouchableOpacity style={styles.viewStyle1}>
                        <Text style={[styles.Text11, { textAlign: 'center' }]}>Price </Text>
                        <Text style={[styles.Text11, { textAlign: 'center' }]}>₹89.64 </Text>
                        <Image source={IMAGEPATH.Indicator} style={{ width: 15, height: 15 }} />
                    </TouchableOpacity>

                    <View style={styles.ViewStylew2}>
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
                        <View style={styles.viewStyle3}>
                            <Text style={styles.crptoStyle}>₹600</Text>
                            <Text style={{ color: '#768C5C', fontSize: 14, fontWeight: '400' }}>Max</Text>
                        </View>
                        <View style={styles.viewStle4}>
                            <Text style={styles.tabText6} >Limit </Text>
                            <Text style={[styles.tabText4, { marginLeft: '2%' }]}>INR 5,000.00 - INR 30,000</Text>
                        </View>
                        <View style={styles.viewStle5}>
                            <Text style={styles.tabText61} >You receive </Text>
                            <Text style={styles.tabText62}>11.10 USDT</Text>
                        </View>
                        <View style={styles.viewStle6}>
                            <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.tabText61}>Processing fee</Text>
                                <Image source={IMAGEPATH.Square} style={{ width: 12, height: 12, marginLeft: '4%', marginTop: '4%' }} />
                            </TouchableOpacity>
                            <Text style={styles.tabText62}>0.05 USDT</Text>
                        </View>
                    </View>

                    <View style={styles.ViewStylew2}>
                        <View style={styles.viewStyle8}>
                            <Image source={IMAGEPATH.Google} style={{ width: 35, height: 30 }} />
                            <Text style={[styles.tabText62, { marginLeft: '3%' }]} >Google pay (Gpay)</Text>
                        </View>
                        <View style={styles.viewStle5}>
                            <Text style={styles.tabText61} >Payment time limit </Text>
                            <Text style={styles.tabText62}>15 min</Text>
                        </View>
                        <View style={styles.viewStle6}>
                            <Text style={styles.tabText61}>Advertiser’s Status</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <VECTOR_ICONS.Entypo name={'dot-single'} size={30} color={'#42C9A1'} />
                                <Text style={styles.tabText62}>Online</Text>
                            </View>

                        </View>

                    </View>


                    <View style={[styles.tabContainer, { width: width * 0.50, marginTop: '10%', marginLeft: '2%', }]}>
                        {tabs1.map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                onPress={() => setSelectedTab1(tab)}
                                style={styles.tabButton}
                            >
                                <Text
                                    style={[
                                        styles.tabText,
                                        selectedTab1 === tab && styles.selectedTabText,
                                    ]}
                                >
                                    {tab}
                                </Text>
                                {selectedTab1 === tab && <View style={styles.underline} />}
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.viewStyle89}>
                        <View style={{ backgroundColor: 'rgba(118, 140, 92, 0.1)', padding: '4%', borderRadius: 7, alignSelf: 'flex-start', marginTop: '3%' }}>
                            <Text style={[styles.tabText61, { color: '#768C5C' }]}>Payment receipt required</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%', right: 5 }}>
                            <VECTOR_ICONS.Entypo name={'dot-single'} size={30} color={'#fff'} />
                            <Text style={styles.tabText4}>Please read the advertiser’s terms before placing an order</Text>
                        </View>
                        <Text style={[styles.tabText6, { alignSelf: 'flex-start', marginTop: '5%' }]}>COMPULSORY ONE TIME VERIFICATION</Text>
                        <Text style={[styles.tabText6, { alignSelf: 'flex-start', marginTop: '5%' }]}>Please send contact number and payment screenshot</Text>
                        <Text style={[styles.tabText6, { alignSelf: 'flex-start', marginTop: '5%' }]}>Google pay (G pay) only</Text>
                        <Text style={[styles.tabText6, { alignSelf: 'flex-start', marginTop: '5%' }]}>NO THIRD PARTY PAYMENT STRICTLY</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '8%', alignSelf: 'flex-start' }}>
                            <VECTOR_ICONS.FontAwesome name={'thumbs-up'} color={'#2F9ED6'} size={20} />
                            <Text style={[styles.tabText61, { color: '#2F9ED6', marginLeft: '2%' }]}>99.31% </Text>
                            <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#2F9ED6'} />
                            <Text style={[styles.tabText61, { color: '#2F9ED6' }]}>(245) Review(s)</Text>
                        </View>
                    </View>

                    <View style={styles.viewStyle89}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                alignSelf: 'flex-start',
                                width: width * 0.74,
                            }}
                        >
                            {tabs2.map((tab) => (
                                <TouchableOpacity
                                    key={tab.id}
                                    style={{
                                        backgroundColor:
                                            activeTab === tab.id ? 'rgba(118, 140, 92, 0.1)' : null,
                                        padding: '4%',
                                        borderRadius: 7,
                                        alignItems: 'center',
                                        marginTop: '3%',
                                    }}
                                    onPress={() => setActiveTab(tab.id)}
                                >
                                    <Text
                                        style={[styles.tabText61, {
                                            color: activeTab === tab.id ? '#768C5C' : 'rgba(255, 255, 255, 0.6)',
                                            marginHorizontal: '3%'
                                        }]}
                                    >
                                        {tab.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={{ alignSelf: 'flex-start', marginTop: '9%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={IMAGEPATH.CSquare} style={{ width: 30, height: 30 }} />
                                <Text style={[styles.tabText4, { fontSize: 12, marginLeft: '4%' }]}>Cr*****.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'flex-end', width: width * 0.69, marginLeft: '14%', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={styles.tabText6}>13-10-2024</Text>
                                    <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                                    <Text style={styles.tabText6}>UPI</Text>
                                </View>
                                <VECTOR_ICONS.FontAwesome name={'thumbs-up'} color={'#42C9A1'} size={20} />

                            </View>
                            <Text style={[styles.tabText4, { marginTop: '1%' }]}>Fast Transferred</Text>

                        </View>

                        <View style={{ alignSelf: 'flex-start', marginTop: '9%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={IMAGEPATH.CSquare} style={{ width: 30, height: 30 }} />
                                <Text style={[styles.tabText4, { fontSize: 12, marginLeft: '4%' }]}>Cr*****.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'flex-end', width: width * 0.69, marginLeft: '14%', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={styles.tabText6}>13-10-2024</Text>
                                    <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                                    <Text style={styles.tabText6}>UPI</Text>
                                </View>
                                <VECTOR_ICONS.FontAwesome name={'thumbs-up'} color={'#42C9A1'} size={20} />

                            </View>
                            <Text style={[styles.tabText4, { marginTop: '1%' }]}>Fast Transferred</Text>

                        </View>
                        <TouchableOpacity><Text style={[styles.tabText61, { color: '#2F9ED6', alignSelf: 'center', marginTop: '9%' }]}>View more</Text></TouchableOpacity>
                    </View>
                    <View style={styles.ViewStylew2}>
                        <View style={{ alignSelf: 'flex-start', marginTop: '2%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={IMAGEPATH.CSquare} style={{ width: 30, height: 30 }} />
                                <Text style={[styles.tabText4, { fontSize: 12, marginLeft: '4%' }]}>GlobalTradeBizInc</Text>
                                <Image source={IMAGEPATH.RightStar} style={{ width: 15, height: 15, marginLeft: '4%' }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'flex-end', width: width * 0.69, marginLeft: '14%', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={styles.tabText6}>13-10-2024</Text>
                                    <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                                    <Text style={styles.tabText6}>UPI</Text>
                                </View>
                                <VECTOR_ICONS.FontAwesome name={'thumbs-up'} color={'#42C9A1'} size={20} />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%' }}>
                                <Image source={IMAGEPATH.RightStar} style={{ width: 15, height: 15 }} />
                                <Text style={[styles.tabText4, { marginLeft: '2%' }]}>Verified merchant</Text>
                                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', width: 2, height: 14, marginLeft: '2%', marginTop: '1%' }} />
                                <Text style={[styles.tabText4, { marginLeft: '2%' }]}>Deposit 2000 USDT</Text>
                                <Image source={IMAGEPATH.Square} style={{ width: 12, height: 12, marginLeft: '4%', }} />
                            </View>


                        </View>

                    </View>

                    <View style={[styles.viewStle5, { width: width * 0.88, alignSelf: 'center', marginTop: '8%' }]}>
                        <Text style={styles.tabText61} >30d Trades </Text>
                        <Text style={styles.tabText62}>15 min</Text>
                    </View>
                    <View style={[styles.viewStle5, { width: width * 0.88, alignSelf: 'center', marginTop: '4%' }]}>
                        <Text style={styles.tabText61} >30d Completion rate </Text>
                        <Text style={styles.tabText62}>100.00%</Text>
                    </View>
                    <View style={[styles.viewStle5, { width: width * 0.88, alignSelf: 'center', marginTop: '4%' }]}>
                        <Text style={styles.tabText61} >Avg. Release time </Text>
                        <Text style={styles.tabText62}>1.92 Minute(s)</Text>
                    </View>
                    <View style={[styles.viewStle5, { width: width * 0.88, alignSelf: 'center', marginTop: '4%' }]}>
                        <Text style={styles.tabText61} >Avg. Pay time </Text>
                        <Text style={styles.tabText62}>3.40 Minutes(s)</Text>
                    </View>
                </ScrollView>
                <View style={[styles.viewStyle]}></View>
                <WholeButton1 Label={'Okay'} Action={() => { }} styles={{ width: width * 0.9, bottom: '7%' }} />
            </View>


            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={285}
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
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center', padding: '3%', }}>
                    <Text style={[styles.logintext3, { width: width * 0.9 }]}>Order processing fee</Text>
                    <Text style={[styles.signStyle, { marginTop: '6%', width: width * 0.9 }]}>Upon order completion, this fee will be deducted automatically form the total crypto quantity released by the seller to the buyer</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginVertical: '8%', alignSelf: 'center' }}>
                        <Text style={styles.signStyle}>Current order fee rate:</Text>
                        <Text style={[styles.signupStyle, { fontSize: 12, }]}>  0%</Text>
                    </View>
                    <WholeButton1 Label={'Okay'} Action={() => { }} styles={{ width: width * 0.9, bottom: '6%' }} />

                </View>
            </RBSheet>

        </SafeAreaView>
    )
}

export default BuyUSDT

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.40,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: '2%',
    },
    tabText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',

    },
    tabText4: {
        fontSize: 11,
        fontWeight: '400',
        color: '#fff',

    },
    tabText6: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

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

    underline: {
        marginTop: 6,
        height: 3,
        borderRadius: 10,
        width: '45%',
        backgroundColor: 'rgba(118, 140, 92, 1)',
        alignSelf: 'center',
    },
    crptoStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        // marginTop: '5%',

    },
    viewStyle1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.37,
        borderWidth: 1,
        borderColor: '#2A2B2F',
        alignSelf: 'flex-start',
        padding: '4%',
        borderRadius: 7,
        marginTop: '8%',
        margin: 2
    },
    ViewStylew2: {
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: width * 0.89,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        alignSelf: 'flex-start',
        padding: '4%',
        borderRadius: 10,
        marginTop: '8%',
        margin: 2
    },
    viewStyle3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.82,
        borderWidth: 1.5,
        borderRadius: 6,
        borderColor: '#B45958',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: '6%',
        marginTop: '10%'
    },
    viewStyle8: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.82,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: '4%',
        marginTop: '2%'
    },
    viewStyle89: {
        // flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        borderRadius: 7,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: '4%',
        marginTop: '10%'
    },
    viewStle4: {
        flexDirection: 'row',
        alignItems: 'center', alignSelf: 'flex-start', marginTop: '3%',
        // marginLeft:'2%'
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
    viewStyle: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        // marginTop: '1%',
        bottom: '4%'


    },
    signStyle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    logintext3: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
        marginTop: '8%',
        lineHeight: 32.97,

    },

    signupStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#fff',
    },
    selectedTabText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
      },
})