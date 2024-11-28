import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';

const { height, width } = Dimensions.get('window');
const Deposithistory = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Deposit history'}
                    label4={true}
                    navigate={() => props.navigation.goBack()} />

                <View style={styles.inputStyle}>
                    <Image source={IMAGEPATH.Checkmaark} style={{ marginLeft: '5%' }} />
                    <Text style={styles.account}>+650 USDT</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: '3%' }}>
                    <VECTOR_ICONS.FontAwesome6 name={'circle-check'} size={15} color={'#42C9A1'} />
                    <Text style={styles.complete}>Completed</Text>
                </View>

                <View style={styles.ViewStylew2}>
                    <View style={styles.viewStle5}>
                        <Text style={styles.tabText61} >Network</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.tabText62}>TRC20 </Text>
                            <Text style={styles.tabText61} > Tron(TRX)</Text>
                        </View>

                    </View>
                    <View style={[styles.viewStle5, { marginTop: '5%',alignItems:'flex-start' }]}>
                        <Text style={styles.tabText61} >Address</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.tabText62, {
                                width: width * 0.55,
                                textAlign: 'right',right:9
                            }]}>wddasdafefdfefegdffdvfdbgfngnsdfasdascsdfcsdfs</Text>
                            <Image source={IMAGEPATH.Txncopy}  style={{width:20,height:22}}/>
                        </View>
                    </View>

                    <View style={[styles.viewStle5, { marginTop: '5%' ,alignItems:'flex-start' }]}>
                        <Text style={styles.tabText61} >Txid</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.tabText62, {
                                width: width * 0.55,
                                textAlign: 'right',right:9
                            }]}>wddasdafefdfefegdffdvfdbgfngnsdfasdascsdfcsdfs</Text>
                            <Image source={IMAGEPATH.Txncopy}  style={{width:20,height:22}}/>
                        </View>
                    </View>

                    <View style={[styles.viewStle5, { marginTop: '5%' }]}>
                        <Text style={styles.tabText61} >Deposit</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.tabText62, {
                                width: width * 0.55,
                                textAlign: 'right'
                            }]}>Spot</Text>
                        </View>
                    </View>
                    <View style={[styles.viewStle5, { marginTop: '5%' }]}>
                        <Text style={styles.tabText61} >Date</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: '2%' }}>
                                            <Text style={styles.tabText6}>10-24-2024</Text>
                                            <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#63687F'} />
                                            <Text style={styles.tabText6}>12:29:22</Text>
                                        </View>
                    </View>



                </View>



            </View>
        </SafeAreaView>
    )
}

export default Deposithistory

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',

    },
    account: {
        fontSize: 35,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 1)',

        marginTop: '6%'
    },
    account3: {
        fontSize: 12,
        fontWeight: '500',
        color: '#2F9ED6',
        marginTop: '4%'


    },
    inputStyle: {
        marginTop: height * 0.1,
        alignSelf: 'center',
        width: width * 0.9,
        alignItems: 'center'
    },
    complete: {

        fontSize: 12,
        fontWeight: '500',
        color: '#42C9A1',
        marginLeft: '2%'
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
    buy: {
        fontSize: 18,
        color: '#42C9A1',
        fontWeight: '600',

    },
    buyUS: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600',
        marginLeft: '4%'

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
    viewStle5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,

    },
    viewStle6: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,
        marginVertical: '4%'
    },
    tabText6: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
})