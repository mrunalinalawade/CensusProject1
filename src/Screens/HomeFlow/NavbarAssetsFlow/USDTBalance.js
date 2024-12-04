import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';
import COLORS from '../../../assets/colors/Colors';

const { height, width } = Dimensions.get('window');
const USDTBalance = (props) => {
    const [selected1, setSelected1] = useState('All');
    const [selected2, setSelected2] = useState('Deposit');
    const filterData = [
        {
            id: 1,
            coinname: 'Deposit',
            UiId: 'Pay',
            price: '+55.0564532',
        },
        {
            id: 2,
            coinname: 'Withdraw',
            UiId: 'Pay',
            price: '-1495.00',
        },
        {
            id: 3,
            coinname: 'Deposit',
            UiId: 'Pay',
            price: '+55.0564532',

        },
        {
            id: 4,
            coinname: 'Withdraw',
            UiId: 'Pay',
            price: '-1495.00',
        },
        {
            id: 5,
            coinname: 'Deposit',
            UiId: 'Pay',
            price: '+55.0564532',

        },
        {
            id: 6,
            coinname: 'Withdraw',
            UiId: 'Pay',
            price: '-1495.00',

        },
        {
            id: 7,
            coinname: 'Deposit',
            UiId: 'Pay',
            price: '+55.0564532',

        },

        {
            id: 7,
            coinname: 'Withdraw',
            UiId: 'Pay',
            price: '-1495.00',

        },
        {
            id: 8,
            coinname: 'Deposit',
            UiId: 'Pay',
            price: '+55.0564532',

        },
        {
            id: 9,
            coinname: 'Withdraw',
            UiId: 'Pay',
            price: '-1495.00',

        },
        {
            id: 10,
            coinname: 'Deposit',
            UiId: 'Pay',
            price: '+55.0564532',

        },


    ]
    const filterData1 = [
        {
            id: 1,
            coinname: 'Buy',
            Status: 'Completed',
            price: '+66.72',
        },
        {
            id: 2,
            coinname: 'Buy',
            Status: 'Completed',
            price: '+66.72',
        },
        {
            id: 3,
            coinname: 'Buy',
            Status: 'Cancelled',
            price: '+102.72',

        },
        {
            id: 4,
            coinname: 'Sell',
            Status: 'Completed',
            price: '-449.00',
        },
        {
            id: 5,
            coinname: 'Buy',
            Status: 'Completed',
            price: '+66.72',

        },
        {
            id: 6,
            coinname: 'Buy',
            Status: 'Completed',
            price: '+66.72',

        },
        {
            id: 7,
            coinname: 'Sell',
            Status: 'Completed',
            price: '-449.00'

        },

        {
            id: 7,
            coinname: 'Sell',
            Status: 'Completed',
            price: '-449.00'

        },
        {
            id: 8,
            coinname: 'Buy',
            Status: 'Cancelled',
            price: '+102.72',

        },
        {
            id: 9,
            coinname: 'Buy',
            Status: 'Cancelled',
            price: '+102.72',

        },
        {
            id: 10,
            coinname: 'Sell',
            Status: 'Completed',
            price: '-449.00'

        },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.54, marginVertical: '4%' }}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }} >
                        <VECTOR_ICONS.AntDesign name="arrowleft" size={30} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={IMAGEPATH.Tether} style={{ width: 20, height: 20 }} />
                        <Text style={styles.usdt}>USDT</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{height:height*0.78}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                        <Text style={styles.total}>Funding Balance  </Text>
                        <Image source={IMAGEPATH.eye} style={{ width: 20, height: 20 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                        <Text style={styles.selectedTabText1}>1,495.02616812</Text>
                    </View>
                    <Text style={[styles.total, { fontSize: 14, marginTop: '3%' }]}>≈ $1,495.02</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8, marginVertical: '6%', alignSelf: 'flex-start' }}>
                        <View>
                            <Text style={styles.total1}>Available</Text>
                            <Text style={styles.usdt2}>1,495.02616812</Text>
                        </View>
                        <View>
                            <Text style={styles.total1}>Unavailable</Text>
                            <Text style={styles.usdt2}>0.00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'center', marginTop: '6%' }}>
                        <View style={styles.viewStyle}>
                            <Image source={IMAGEPATH.P2Puser} style={{ width: 32, height: 28 }} />
                            <Text style={styles.crptoStyle}>P2P Trading</Text>
                        </View>
                        <View style={styles.viewStyle}>
                            <Image source={IMAGEPATH.Convert} style={{ width: 32, height: 30 }} />
                            <Text style={styles.crptoStyle}>Convert</Text>
                        </View>
                    </View>
                    <Text style={styles.histrory}>History</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'flex-start', marginVertical: '2%' }}>
                        <TouchableOpacity onPress={() => { setSelected1('All') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'All' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
                            <Text style={[styles.exStyle, selected1 === 'All' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>All</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelected1('Deposit & withdraw') }}
                            style={[styles.inputStyle1, { backgroundColor: selected1 === 'Deposit & withdraw' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
                            <Text style={[styles.exStyle, selected1 === 'Deposit & withdraw' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Deposit & withdraw</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelected1('Buy & Sell') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Buy & Sell' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
                            <Text style={[styles.exStyle, selected1 === 'Buy & Sell' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Buy & Sell</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelected1('Transfer') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Transfer' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
                            <Text style={[styles.exStyle, selected1 === 'Transfer' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Transfer</Text></TouchableOpacity>
                    </View>
                    {selected1 === 'Deposit & withdraw' &&
                        (<FlatList
                            showsVerticalScrollIndicator={false}
                            data={filterData}
                            style={{ height: height * 0.24,  marginTop: '5%' }}
                            ListEmptyComponent={() => (
                                <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                    No Data Found
                                </Text>
                            )}
                            renderItem={(item) => (<>
                                <TouchableOpacity style={styles.FlatlistView}>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: width * 0.35 }}>
                                        <View style={styles.TextView}>
                                            <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                            <Text style={[styles.Text2]} >{item?.item?.UiId}</Text>
                                        </View>
                                    </View>

                                    <Text style={[styles.Text3, { color: item.item.coinname === 'Deposit' ? '#42C9A1' : '#FF6666' }]}>{item?.item?.price}</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginVertical: '2%' }}>
                                    <Text style={styles.tabText6}>10-24-2024</Text>
                                    <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                                    <Text style={styles.tabText6}>12:29:22</Text>
                                </View>
                                <View style={[styles.viewStyle1,]}></View>
                            </>
                            )}
                        />)}

                    {selected1 === 'Buy & Sell' &&
                        (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={filterData1}
                                style={{ height:  height * 0.24,  marginTop: '5%' }}
                                ListEmptyComponent={() => (
                                    <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                        No Data Found
                                    </Text>
                                )}
                                renderItem={(item) => (<>
                                    <TouchableOpacity style={styles.FlatlistView}>
                                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: width * 0.35 }}>
                                            <View style={styles.TextView}>
                                                <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                            </View>
                                        </View>
                                        <Text style={[styles.Text3, { color: item.item.coinname === 'Buy' ? '#42C9A1' : '#FF6666' }]}>{item?.item?.price}</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: width * 0.9, marginVertical: '2%' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Text style={styles.tabText6}>10-24-2024</Text>
                                            <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                                            <Text style={styles.tabText6}>12:29:22</Text>
                                        </View>
                                        <Text style={styles.Textsty}>{item.item.Status}</Text>
                                    </View>
                                    <View style={[styles.viewStyle1]}></View>
                                </>
                                )}
                            />
                        )}

                    {selected1 === 'Transfer' &&
                        (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                                style={{ height: height * 0.24, marginTop: '5%' }}
                                ListEmptyComponent={() => (
                                    <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                        No Data Found
                                    </Text>
                                )}
                                renderItem={(item) => (<>
                                    <TouchableOpacity style={styles.FlatlistView}>
                                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: width * 0.35 }}>
                                            <View style={styles.TextView}>
                                                <Text style={styles.Text11}>Transfer</Text>
                                                <Text style={[styles.Text2]} >Spot Wallet</Text>
                                            </View>
                                        </View>

                                        <Text style={[styles.Text3]}>+1495.00</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginVertical: '2%' }}>
                                        <Text style={styles.tabText6}>10-24-2024</Text>
                                        <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                                        <Text style={styles.tabText6}>12:29:22</Text>
                                    </View>
                                    <View style={[styles.viewStyle1,]}></View>
                                </>
                                )}
                            />

                        )}
                </ScrollView>


                <View style={[styles.viewStyle1,]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'flex-start', marginVertical: '2%' }}>
                <TouchableOpacity onPress={() => { setSelected2('Deposit') }} style={[styles.inputStyle2, { backgroundColor: selected2 === 'Deposit' ? '#768C5C' : '#24262A' }]}>
                    <Text style={[styles.exStyle1, selected2 === 'Deposit' ? { color: '#FFFFFF' } : { color: '#FFFFFF' }]}>Deposit</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelected2('Withdrawal') }}
                    style={[styles.inputStyle2, { backgroundColor: selected2 === 'Withdrawal' ? '#768C5C' : '#24262A' }]}>
                    <Text style={[styles.exStyle1, selected2 === 'Withdrawal' ? { color: '#FFFFFF' } : { color: '#FFFFFF' }]}>Withdrawal</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelected2('Transfer') }} style={[styles.inputStyle2, { backgroundColor: selected2 === 'Transfer' ? '#768C5C' : '#24262A' }]}>
                    <Text style={[styles.exStyle1, selected2 === 'Transfer' ? { color: '#FFFFFF' } : { color: '#FFFFFF' }]}>Transfer</Text></TouchableOpacity>
            </View>
            </View>



        </SafeAreaView>
    )
}

export default USDTBalance
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
    selectedTabText1: {
        fontSize: 30,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    total: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: '2%'

    },
    total1: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
    },
    usdt2: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginTop: '5%'
    },
    inputStyle1: {
        alignItems: 'center',
        padding: '3%',
        borderRadius: 8
    },
    exStyle: {
        fontSize: 12,
        fontWeight: '500',
        marginHorizontal: '1%'
    },
    crptoStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        marginLeft: '5%'
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.42,
        borderWidth: 1,
        borderColor: '#3B3D49',
        borderRadius: 7,
        padding: '5%',


    },
    histrory: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        marginVertical: '7%'
    },
    FlatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignItems: 'flex-start',
        alignSelf: 'center',
        // backgroundColor:'red',
        marginTop: '5%'
    },
    TextView: {
        width: width * 0.23
        // ,backgroundColor:'red'
    },
    Text11: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    Text113: {
        fontSize: 10,
        fontWeight: '400',
        color: '#fff',

    },
    Textsty: {
        fontSize: 10,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    Text2: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '4%'

    },

    Text3: {
        fontSize: 14,
        fontWeight: '500',
        color: '#42C9A1',
        // marginTop: '2%'

    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '3%',
        // bottom: "5%"
    },
    Text23: {
        fontSize: 9,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',


    },
    tabText6: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    inputStyle2: {
        alignItems: 'center',
        width: width * 0.28,
        marginTop: '4%',
        padding: '4.5%',
        borderRadius: 5

    },
    exStyle1: {
        fontSize: 14,
        fontWeight: '500',
    },
})