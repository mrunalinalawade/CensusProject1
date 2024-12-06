
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'

import RBSheet from 'react-native-raw-bottom-sheet';

import Header from '../../Components/Header';
import WholeButton1 from '../../Components/WholeButton1';
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const P2PHistory = (props) => {
    const refRBSheet1 = useRef();
    const [selectedTab, setSelectedTab] = useState('Deposits');
    const tabs = ['Deposits', 'Withdrawals', 'P2P', 'Swap', 'Trade', 'Transfer'];
    const [selected, setselected] = useState('Cash')
    const [selected1, setSelected1] = useState('All');
    const [selected2, setSelected2] = useState(false);
    const handlePress = () => {
        setSelected2(!selected2);
    };



    return (
    <>
             
                <View style={styles.viewStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.52, }}>
                        <TouchableOpacity onPress={() => { setselected('Crypto') }}
                            style={[styles.text1, selected === 'Crypto' ? { backgroundColor: 'rgba(118, 140, 92, 0.1)' } : null, { padding: '6%', alignItems: 'center', width: width * 0.36, borderRadius: 9 }]}>
                            <Text style={[styles.account1, { color: selected === 'Crypto' ? '#768C5C' : 'rgba(255, 255, 255, 0.6)' }]}>Buy</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setselected('Cash') }} style={[styles.text1, selected === 'Cash' ? { backgroundColor: 'rgba(118, 140, 92, 0.1)' } : null, { padding: '6%', alignItems: 'center', width: width * 0.23, borderRadius: 9 }]}>
                            <Text style={[styles.account1, { color: selected === 'Cash' ? '#768C5C' : 'rgba(255, 255, 255, 0.6)' }]}>Sell</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { refRBSheet1.current.open() }}><Image source={IMAGEPATH.filter} style={{ width: 20, height: 20 }} /></TouchableOpacity>
                </View>

                {
                    selected === 'Crypto' ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={[1, 2, 3, 4, 5, 6, 7]}
                            style={{ marginTop: '14%' }}

                            ListEmptyComponent={() => (
                                <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                    No Data Found
                                </Text>
                            )}
                            renderItem={(item) => (
                                <TouchableOpacity onPress={()=>{props.navigation.navigate('Deposithistory')}} style={styles.FlatlistView}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center', }}>
                                        <Text style={styles.usdt}>USDT</Text>
                                        <Text style={styles.number}>+750</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center', }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: '2%' }}>
                                            <Text style={styles.tabText6}>10-24-2024</Text>
                                            <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#63687F'} />
                                            <Text style={styles.tabText6}>12:29:22</Text>
                                        </View>
                                        <Text style={styles.complte}>Completed</Text>

                                    </View>
                                    <View style={styles.viewStyle1}></View>
                                </TouchableOpacity>
                            )}
                        />
                        :
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[1, 2, 3, 4, 5, 6, 7]}
                        style={{ marginTop: '14%' }}

                        ListEmptyComponent={() => (
                            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                No Data Found
                            </Text>
                        )}
                        renderItem={(item) => (
                            <TouchableOpacity onPress={()=>{props.navigation.navigate('Deposithistory')}} style={styles.FlatlistView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center', }}>
                                    <Text style={styles.usdt}>USDT</Text>
                                    <Text style={[styles.number,{color:'#FF6666'}]}>+750</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center', }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: '2%' }}>
                                        <Text style={styles.tabText6}>10-24-2024</Text>
                                        <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'#63687F'} />
                                        <Text style={styles.tabText6}>12:29:22</Text>
                                    </View>
                                    <Text style={styles.complte}>Completed</Text>

                                </View>
                                <View style={styles.viewStyle1}></View>
                            </TouchableOpacity>
                        )}
                    />
                }









         


            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={340}
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
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center', marginTop: '4%' }}>

                    <Text style={styles.logintext1}>Filter</Text>

                    <Text style={[styles.account, { alignSelf: 'flex-start', color: 'rgba(255, 255, 255, 0.75)', }]}>*If necessary, please go to the official website to download</Text>
                    <Text style={[styles.account, { alignSelf: 'flex-start', }]}>Status</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8, alignSelf: 'flex-start', marginVertical: '2%' }}>
                        <TouchableOpacity onPress={() => { setSelected1('All') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'All' ? 'rgba(118, 140, 92, 0.1)' : null,borderWidth:1,borderColor:'#25262D',}]}>
                            <Text style={[styles.exStyle, selected1 === 'All' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>All</Text></TouchableOpacity>

                        <TouchableOpacity onPress={() => { setSelected1('Processing') }}
                            style={[styles.inputStyle1, { backgroundColor: selected1 === 'Processing' ? 'rgba(118, 140, 92, 0.1)' : null,borderWidth:1,borderColor:'#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Processing' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Processing</Text></TouchableOpacity>


                        <TouchableOpacity onPress={() => { setSelected1('Completed') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Completed' ? 'rgba(118, 140, 92, 0.1)' : null,borderWidth:1,borderColor:'#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Completed' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Completed</Text></TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => { setSelected1('Failure') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Failure' ? 'rgba(118, 140, 92, 0.1)' :null,borderWidth:1,borderColor:'#25262D',alignSelf:'flex-start',marginTop:'1%'}]}>
                    <Text style={[styles.exStyle, selected1 === 'Failure' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Failure</Text>
                        </TouchableOpacity>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                        <WholeButton1 Label={'Reset'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                        <WholeButton1 Label={'Apply'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', }} />
                    </View>

                </View>
            </RBSheet>

            </>

    )
}

export default P2PHistory

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },
    tabText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    selectedTabText: {
        fontSize: 14,
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
        width: width,
        alignItems: 'center',
        alignSelf: 'center',
        left: '2%',
        marginTop: '8%',
        // marginLeft:'2%',
        right: 4
    },
    tabButton: {
        alignItems: 'center',
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        marginTop: '10%',
        alignSelf: 'flex-start'

    },
    account1: {
        fontSize: 12,
        fontWeight: '500',

        marginHorizontal: '4%'
    },
    viewStyle1: {
        width: width * 0.98,
        backgroundColor: '#2D2E36',
        height: 1.5,
        marginVertical: '3%'


    },
    tabText6: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    usdt: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',

    },
    number: {
        fontSize: 14,
        fontWeight: '500',
        color: '#42C9A1',

    },
    complte: {
        fontSize: 10,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',

    },
    textStyel: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center',
        marginTop: '3%'

    },
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },
    inputStyle1: {
        alignItems: 'center',
        // width: width * 0.25,

        padding: '5%',

        borderRadius: 5

    },
    exStyle: {

        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '500',
        marginHorizontal: '2%'
    },
    account: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '4%'
    },
    InputFieldStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        paddingHorizontal: 8,
        fontSize: 12,
        fontWeight: '400',
        borderRadius: 7,
        width: width * 0.9,
        padding: '6%',
        // fontFamily: FONTS.regular,
        color: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'space-between',
        marginVertical: '2%'
    },
    PlaceholderStyle: {
        color: '#fff',
        fontSize: 12,
        marginLeft: '3%',
        fontWeight: '400',
        // fontFamily: FONTS.regular,

    },
    InputViewFiled: {
        backgroundColor: "rgba(42, 43, 47, 1)",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        width: width * 0.7,
        borderRadius: 6, marginLeft: '1%'

    },
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#768C5C'
    },
    TextView1: {
        width: width * 0.23
        // ,backgroundColor:'red'
    },
    Text11: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',

    },
    Text13: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',

    },
    FlatlistView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor:'red',
        marginTop: '8%'
    },
})