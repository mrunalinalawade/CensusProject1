import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';
import COLORS from '../../../assets/colors/Colors';
import WholeButton1 from '../../../Components/WholeButton1';
import RBSheet from 'react-native-raw-bottom-sheet';

const { height, width } = Dimensions.get('window');
const Info = (props) => {
    const refRBSheet1 = useRef();
    const [selectedTab, setSelectedTab] = useState('Price');
    const tabs = ['Price', 'Info'];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '4%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack() }} >
                            <VECTOR_ICONS.AntDesign name="arrowleft" size={30} color={COLORS.WHITE} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '8%' }}>

                            <Text style={styles.usdt}>SOL/USDT </Text>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={15} />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.15, justifyContent: 'space-between' }}>
                        <TouchableOpacity><VECTOR_ICONS.FontAwesome name={'star'} color={'rgba(122, 122, 122, 0.6)'} size={25} /></TouchableOpacity>
                        <TouchableOpacity><VECTOR_ICONS.Fontisto name={'share'} color={'#C7C7C7'} size={20} /></TouchableOpacity>

                    </View>

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
                    selectedTab === 'Info' && (
                        <>
                            <ScrollView showsVerticalScrollIndicator={false} style={{ height: height * 0.72 }}>

                                <TouchableOpacity onPress={() => refRBSheet1.current.open()} style={styles.viewStyle}>
                                    <Text style={styles.selectedTabText1}>Coin Info</Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>Rank</Text>
                                    <Text style={styles.rank1}>No. 108</Text>
                                </View>


                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>market Cap</Text>
                                    <Text style={styles.rank1}>$675.56M</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>Full Diluted Market Cap</Text>
                                    <Text style={styles.rank1}>$675.56M</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>Market Dominance</Text>
                                    <Text style={styles.rank1}>0.0262%</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>Circulation Supply</Text>
                                    <Text style={styles.rank1}>102.46B SOL</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>Issue Date</Text>
                                    <Text style={styles.rank1}>2024-05-16</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>All Time Hight</Text>
                                    <Text style={styles.rank1}>$0.0235435934549321</Text>
                                </View>
                                <Text style={styles.date}>2024-05-16</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', width: width * 0.9 }}>
                                    <Text style={styles.rank}>All Time Low</Text>
                                    <Text style={styles.rank1}>$0.0235435934549321</Text>
                                </View>
                                <Text style={styles.date}>2024-05-16</Text>

                                <Text style={styles.links}>Links</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'center', marginVertical: '8%' }}>
                                    <View style={styles.viewStyle2}>
                                        <Text style={styles.crptoStyle}>Official Website</Text>
                                    </View>
                                    <View style={styles.viewStyle2}>
                                        <Text style={styles.crptoStyle}>White Paper</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={styles.links1}>Introduction</Text>
                                    <Image source={IMAGEPATH.CopyGay} style={{ width: 16, height: 18, marginLeft: '3%' }} />
                                </View>
                                <Text style={styles.solan}>Solana started as a viral Telegram game that onboarded many users into graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.</Text>


                            </ScrollView></>
                    )
                }



                <View style={[styles.viewStyle1,]}></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, bottom: '5%' }}>

                    <WholeButton1 Label={'Buy'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: '#2EBD85', }} />
                    <WholeButton1 Label={'Sell'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: '#F6465D', }} />
                </View>

            </View>


            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={650}
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
                <View style={{ flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={[styles.logintext1, { alignSelf: 'flex-start' }]}>Coin Info</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Rank</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Based on the coin’s relative market cap.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Market Cap</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Fully Diluted Market Cap</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Market Dominance</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Circulation Supply</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Max Supply</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Total Supply</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Total Supply</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>Issue Price</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>All Time High</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>
                        <View style={{ marginTop: '7%', alignSelf: 'flex-start' }}>
                            <Text style={styles.signStyle1}>All Time Low</Text>
                            <Text style={[styles.signStyle2, { alignSelf: 'flex-start' }]}>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing.</Text>
                        </View>


                    </ScrollView>

                    <View style={[styles.viewStyle1,]}></View>

                    <WholeButton1 Label={'Okay, Thank you'} Action={() => { props.navigation.navigate('Startverification') }} styles={{ width: width * 0.9, bottom: '3%' }} />


                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

export default Info

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',

    },
    usdt: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        marginLeft: '7%'
    },
    selectedTabText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    selectedTabText1: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    underline: {
        marginTop: 4,
        height: 3,
        width: '40%',
        borderRadius: 20,
        backgroundColor: '#768C5C',
        alignSelf: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.25,
        alignItems: 'center',
        alignSelf: 'flex-start',
        left: '0.5%',
        marginTop: '6%',
        backgroundColor: '#1C1D22',

        right: 4,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,

    },
    tabButton: {
        alignItems: 'center',
    },
    tabText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    viewStyle: {
        // flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.3,
        borderWidth: 1,
        borderColor: '#3B3D49',
        borderRadius: 7,
        padding: '3%',
        marginVertical: '6%'


    },
    rank: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // textDecorationLine:'underline',
        textDecorationColor: 'rgba(122, 122, 122, 0.6)',
        textDecorationStyle: 'dashed'

    },
    rank1: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFFFFF'

    },
    date: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 10,
        fontWeight: '400',
        alignSelf: 'flex-end',
        marginTop: '2%'
    },
    links: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        marginTop: '14%'

    },
    links1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        // marginTop:'14%'

    },
    crptoStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        // marginLeft: '5%'
    },
    viewStyle2: {
        // flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.42,
        borderWidth: 1,
        borderColor: '#3B3D49',
        borderRadius: 7,
        padding: '5%',


    },
    solan: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 12,
        fontWeight: '400',
        marginVertical: '3%'

    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        // marginTop: '9%',
        // bottom: "5%"
    },
    signStyle1: {
        fontSize: 12,

        fontWeight: '500',
        color: '#fff',
        lineHeight: 18,

    },
    signStyle2: {
        fontSize: 10,

        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 18,

    },
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
})