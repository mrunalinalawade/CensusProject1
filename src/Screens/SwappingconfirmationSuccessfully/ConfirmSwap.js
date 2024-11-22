import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const ConfirmSwap = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainviewStyle}>
                    <Header
                        swap={true}
                        navigate={() => props.navigation.goBack()}
                    />
                    <Text style={styles.logintext}>Swap</Text>



                    <View style={{ width: width * 0.9, borderWidth: 1, borderColor: '#393C48', borderRadius: 7, alignSelf: 'center', marginVertical: '7%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.33, }}>
                                <Text style={styles.signStyle}>From</Text>
                                <Image source={IMAGEPATH.BNBChain} style={{ width: 25, height: 25 }} />
                                <Text style={styles.signStyle}>BNB Chain</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.30, }}>
                                <Image source={IMAGEPATH.Doc} style={{ width: 25, height: 25 }} />
                                <Text style={styles.signupStyle}>0</Text>
                                <TouchableOpacity onPress={() => { refRBSheet.current.open() }}>
                                    <Text style={[styles.signStyle, { color: '#2F9ED6' }]}>Add Funds</Text>
                                </TouchableOpacity>


                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
                            <Text style={[styles.signupStyle, { fontSize: 20 }]}>1</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.24, }}>
                                <Image source={IMAGEPATH.BNBChainBlack} style={{ width: 25, height: 25 }} />
                                <Text style={styles.logintext1}>BNB</Text>
                                <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={14} />

                            </View>
                        </View>

                        <Text style={[styles.signStyle, { marginHorizontal: '4%', marginTop: '1%' }]}>$2,779.19</Text>

                        <View style={styles.accountStyle}>
                            <View style={styles.viewStyle}></View>
                            <Image source={IMAGEPATH.SwapIcon} style={{ width: 45, height: 45, marginHorizontal: '4%' }} />
                            <View style={styles.viewStyle}></View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.33, }}>
                                <Text style={styles.signStyle}>To</Text>
                                <Image source={IMAGEPATH.BNBChain} style={{ width: 25, height: 25 }} />
                                <Text style={styles.signStyle}>BNB Chain</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.30, }}>
                                <Image source={IMAGEPATH.Doc} style={{ width: 25, height: 25 }} />
                                <Text style={styles.signupStyle}>0</Text>
                                <Text style={[styles.signStyle, { color: '#2F9ED6' }]}>Add Funds</Text>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.82, marginLeft: '3%', marginVertical: '3%' }}>
                            <Text style={[styles.signupStyle, { fontSize: 20 }]}>583.2645435</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.27, }}>
                                <Image source={IMAGEPATH.Tether} style={{ width: 25, height: 25 }} />
                                <Text style={styles.logintext1}>USDT</Text>
                                <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={14} />

                            </View>
                        </View>

                        <Text style={[styles.signStyle, { marginHorizontal: '4%', marginVertical: '4%' }]}>$2,779.19</Text>


                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', }}>
                        <Image source={IMAGEPATH.SwapConfirm} style={{ width: 20, height: 20 }} />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: 'rgba(255, 255, 255, 0.8)',
                            marginLeft: '2%'
                        }}>Expires in </Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: '1%',
                            color: '#FF6666',
                        }}>00:13</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, marginVertical: '3%' }}>
                        <Text style={styles.signStyle}>Network</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Image source={IMAGEPATH.BNBChain} style={{ width: 20, height: 20, right: 8 }} />
                            <Text style={[styles.signupStyle, { fontSize: 12 }]}>BNB smart chain</Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, marginVertical: '3%' }}>
                        <Text style={styles.signStyle}>Network fee</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={[styles.signupStyle, { fontSize: 12 }]}>0.000245 BNB </Text>
                            <Text style={[styles.signupStyle, { fontSize: 12 }]}>($0.14)  </Text>


                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, marginVertical: '3%' }}>
                        <Text style={styles.signStyle}>Minimum received</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={[styles.signupStyle, { fontSize: 12 }]}>577.123424312 USDT</Text>


                        </View>
                    </View>

                    <TouchableOpacity>
                        <Text style={{
                            alignSelf: 'center', marginVertical: '10%', alignItems: 'center', fontSize: 12,
                            fontWeight: '400',
                            color: '#2F9ED6',
                        }}>View Transaction Details</Text>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', marginTop: '6%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                        <WholeButton1 Label={'Cancel'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                        <WholeButton1 Label={'Confirm'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', }} />
                    </View>










                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default ConfirmSwap

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '12%',
        lineHeight: 32.97,
    },
    signStyle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    signupStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#fff',
    },
    logintext1: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    accountStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: '3%'

    },
    viewStyle: {
        width: width * 0.33,
        backgroundColor: '#2D2F36',
        height: 1.5
    },
})