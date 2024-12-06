import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';
import RBSheet from 'react-native-raw-bottom-sheet';
import Header1 from '../../Components/Header1';

const { height, width } = Dimensions.get('window');
const Addressreveal = (props) => {
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();

    
    const openExchangeSheet = () => {
     props.navigation.navigate('Addnewaddress')
    };

    const [selectedTab, setSelectedTab] = useState('Address book');
    const tabs = ['Address book', 'Recently']
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header1
                    label={true}
                    navigate={()=>{props.navigation.goBack()}}
                    // navigate4={() => refRBSheet1.current.open()}

                />
                <Text style={styles.logintext1}>Deposit USDT</Text>
                <Text style={styles.logintext2}>For USDT deposit only</Text>
                <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>
                    <View>
                        <Text style={styles.signStyle1}>Network</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.crptoStyle}>TRC20</Text>
                            <Text style={styles.signStyle1}>   Tron(TRX)</Text>
                        </View>
                    </View>
                    <VECTOR_ICONS.AntDesign name={'right'} color={'rgba(255, 255, 255, 0.6)'} size={20} style={{ right: 8 }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>
                    <View>
                        <Text style={styles.signStyle1}>Address</Text>
                        <Text style={[styles.crptoStyle, { width: width * 0.6 }]}>wddasdafefdfefegdffdvfdbgfngnsdfasdascsdfcsdfs</Text>
                    </View>
                    <Image source={IMAGEPATH.Copy} style={{ width: 18, height: 20, right: 10 }} />
                </View>


                <Text style={[styles.crptoStyle, { fontSize: 15, marginLeft: '1%' }]}>Other details</Text>

                <View style={[styles.inputStyle4, { marginTop: '2%' }]}>
                    <Text style={styles.textStyle3}>Deposit to</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>Funding account  </Text>
                        <TouchableOpacity>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#7F8082'} size={15} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.inputStyle4, { marginTop: '2%' }]}>
                    <Text style={styles.textStyle3}>Min deposit</Text>

                    <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>₹ 89.95</Text>

                </View>

                <View style={[styles.inputStyle4, { marginTop: '2%' }]}>
                    <Text style={styles.textStyle3}>Deposit confirmation</Text>

                    <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>3 Block(s)</Text>

                </View>
                <View style={[styles.inputStyle4, { marginTop: '2%' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.textStyle3}>Withdrawal amount</Text>
                        <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, }} />
                    </View>

                    <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>3 Block(s)</Text>

                </View>
                <View style={[styles.inputStyle4, { marginTop: '2%' }]}>
                    <Text style={styles.textStyle3}>Contract address</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textStyle3, { color: '#FFFFFF', textAlign: 'right' }]}>****jLj6t  </Text>
                        <TouchableOpacity>
                            <Image source={IMAGEPATH.CopyGay} style={{ width: 15, height: 16, }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: '6%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                    <WholeButton1 Label={'Save Image'} Action={() => { refRBSheet1.current.open() }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                    <WholeButton1 Label={'Share address'} Action={() => { refRBSheet2.current.open() }} styles={{ width: width * 0.43, padding: '3%', }} />
                </View>
            </View>


            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={280}
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

                    <Image source={IMAGEPATH.Checkmaark} style={{ marginLeft: '5%', marginTop: '10%' }} />
                    <Text style={[styles.logintext1, { textAlign: 'center', marginTop: '4%', }]}>Saved</Text>
                    <Text style={[styles.signStyle1, { textAlign: 'center', width: width * 0.75, marginTop: '2%', }]}>Screenshot saved to your phone</Text>



                    <WholeButton1 Label={'Okay, Thank you'} Action={() => { refRBSheet1.current.close()  }} styles={{ width: width * 0.9, }} />


                </View>
            </RBSheet>


            <RBSheet
                ref={refRBSheet2}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={700}
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, }}>
                        <Text style={[styles.logintext1, { textAlign: 'center', }]}></Text>
                        <Image source={IMAGEPATH.EditAddress} style={{ width: 20, height: 20, marginTop: '5%' }} />
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
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, }}>
                        <Text>Address book</Text>
                        <Text>Recently</Text>
                    </View> */}




                    <Image source={IMAGEPATH.EmptyAddress} style={{ width: 110, height: 110, alignSelf: 'center', marginTop: height * 0.13 }} />
                    <Text style={styles.textStyel}>No saved addresses </Text>


                    <WholeButton1 Label={'Add new address'} Action={openExchangeSheet} styles={{ width: width * 0.9, marginTop: height * 0.38 }} />


                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

export default Addressreveal

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '4%',
    },
    logintext1: {
        fontSize: 20,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'center',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
    logintext2: {
        fontSize: 12,
        fontWeight: '400',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'center',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '5%',

    },
    signStyle1: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 18,
        marginTop: '3%',

    },
    crptoStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginTop: '2%',

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
    textStyle3: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        width: width * 0.31,
        // backgroundColor:'red',
        alignItems: 'center',


    },
    textStyel: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center',
        marginTop: '3%'

    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.48,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: '7%',
        // left: '3%',
        // marginLeft:'2%',
        // right: 2
    },
    tabText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FFF',
    },
    underline: {
        marginTop: 4,
        height: 2,
        width: '40%',
        backgroundColor: 'rgba(118, 140, 92, 1)',
        alignSelf: 'center',
    },
})