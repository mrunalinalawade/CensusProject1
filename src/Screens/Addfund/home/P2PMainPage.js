import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../../Components/Header';
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import WholeButton1 from '../../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const P2PMainPage = () => {
    const [selected, setselected] = useState('Buy')
    const [searchQuery, setSearchQuery] = useState("");
    const refRBSheet = useRef();
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const refRBSheet4 = useRef();
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(null);



    const filterData = [
        {
            id: 1,

            img2: IMAGEPATH.Tether,
            coinname: 'USDT',
            UiId: 'Tehter',

        },
        {
            id: 2,
            img2: IMAGEPATH.BTC,
            coinname: 'BTC',
            UiId: 'Bitcoin',

        },
        {
            id: 3,
            img2: IMAGEPATH.ETH,
            coinname: 'ETH',
            UiId: 'Ethereum',

        },
        {
            id: 4,
            img2: IMAGEPATH.LTC,
            coinname: 'LTC',
            UiId: 'Light coin',

        },
        {
            id: 5,
            img2: IMAGEPATH.MATIC,
            coinname: 'MATIC',
            UiId: 'Matic',

        },
        {
            id: 6,
            img2: IMAGEPATH.DOT,
            coinname: 'DOT',
            UiId: 'Polka dot',

        },
        {
            id: 7,
            img2: IMAGEPATH.BTC,
            coinname: 'BTC',
            UiId: 'Bitcoin',

        },
    ]



    const handlePress = () => {
        setSelected1(!selected1);
    };
    const handlePress1 = (id) => {
        setSelected2(id === selected2 ? null : id); // Deselect if the same item is clicked again
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    label={true}
                    navigate={() => props.navigation.goBack()}
                    navigate4={() => { }}
                />
                <View style={styles.viewStyle}>
                    <Text style={styles.logintext}>P2P</Text>
                    <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} style={styles.text} >
                        <Text style={styles.account1}>INR</Text>

                        <VECTOR_ICONS.AntDesign name={'down'} size={14} color={'#768C5C'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewStyle}>
                    <View style={[styles.text, { width: width * 0.415, borderRadius: 12 }]}>
                        <TouchableOpacity onPress={() => { setselected('Buy') }} style={[styles.text1, selected === 'Buy' ? { backgroundColor: '#42C9A1' } : null]}>
                            <Text style={styles.account1}>Buy</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setselected('Sell') }} style={[styles.text1, selected === 'Sell' ? { backgroundColor: '#42C9A1' } : null]}>
                            <Text style={styles.account1}>Sell</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Image source={IMAGEPATH.Belldot} style={{ width: 17, height: 21, right: 8 }} />
                    </TouchableOpacity>

                </View>
                <View style={styles.viewStyle}>
                    <View style={[styles.viewStyle, {
                        width: width * 0.67,
                        marginTop: '0%',
                    }]}>
                        <View style={[styles.allitemStyle, { width: width * 0.25, }]}>
                            <Image source={IMAGEPATH.Tether} style={{ width: 30, height: 30 }} />
                            <View style={{ flexDirection: 'row', alignItems: 'baseline', width: width * 0.13, justifyContent: 'space-between' }}>
                                <Text style={styles.accountstyle}>USDT</Text>
                                <TouchableOpacity onPress={() => { refRBSheet.current.open() }}>
                                    <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.allitemStyle}>
                            <Text style={styles.accountstyle}>Amount</Text>
                            <TouchableOpacity>
                                <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={12} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.allitemStyle}>
                            <Text style={styles.accountstyle}>Payment</Text>
                            <TouchableOpacity>
                                <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={12} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity onPress={() => { refRBSheet4.current.open() }}>
                        <Image source={IMAGEPATH.Filterdot} style={{ width: 17, height: 21, right: 8 }} />
                    </TouchableOpacity>

                </View>



                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5]}
                    style={{ marginBottom: '45%', }}

                    ListEmptyComponent={() => (
                        <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                            No Data Found
                        </Text>
                    )}
                    renderItem={(item) => (
                        <View style={styles.FlatlistView}>
                            <View style={styles.viewStyle1}></View>


                            <View style={styles.TextView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.41 }}>
                                    <Image source={IMAGEPATH.CSquare} style={{ width: 40, height: 40 }} />
                                    <Text style={[styles.accountstyle, { color: '#FFF' }]}>Crypto-vendor</Text>
                                    <Image source={IMAGEPATH.RightStar} style={{ width: 20, height: 20 }} />
                                </View>
                                <View>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.45, marginTop: '14%' }}>
                                            <Text style={[styles.accountstyle1, { color: '#2F9ED6' }]}>Trade(s)</Text>
                                            <Text style={styles.accountstyle1}>10 (98.60%)</Text>
                                            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', width: 1, height: 13, marginTop: '2%' }} />
                                            <Image source={IMAGEPATH.likegray} style={{ width: 15, height: 13 }} />
                                            <Text style={styles.accountstyle1}>98.60%</Text>
                                        </View>
                                        <View><Text style={[styles.accountstyle1, { marginTop: '5%', textAlign: 'right' }]}>Digital eRupee</Text></View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, marginTop: '3%' }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.25 }}>
                                    <Text style={[styles.accountstyle1, { marginTop: '6%', fontSize: 12 }]}>₹</Text>
                                    <Text style={styles.account4} > 89.60</Text>
                                    <Text style={[styles.accountstyle1, { marginTop: '6%' }]}>  /1USDT</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.15 }}>
                                    <Image source={IMAGEPATH.Clock} style={{ height: 19, width: 17 }} />
                                    <Text style={styles.accountstyle1}>15 min</Text>
                                </View>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, marginTop: '7%' }}>

                                <View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.41 }}>
                                        <Text style={styles.accountstyle1}>Limit</Text>
                                        <Text style={[styles.accountstyle1, { color: '#fff' }]}> 9,999.00 - 10,000.00 </Text>
                                        <Text style={[styles.accountstyle1, { color: '#fff' }]} >INR</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.29, marginTop: '2%' }}>
                                        <Text style={styles.accountstyle1} >Available </Text>
                                        <Text style={[styles.accountstyle1, { color: '#fff' }]}>118.12 </Text>
                                        <Text style={[styles.accountstyle1, { color: '#fff' }]}>USDT</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => { refRBSheet2.current.open() }} style={[styles.text1, { backgroundColor: '#42C9A1', width: width * 0.26, padding: '4%', }]}>
                                    <Text style={styles.account1}>Buy</Text></TouchableOpacity>

                            </View>

                        </View>
                    )}
                />









            </View>


            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={680}
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
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={styles.logintext1}>Select Coin</Text>
                    <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '4%' }}>
                        <View style={styles.InputViewFiled}>
                            <TouchableOpacity
                                style={{ alignSelf: "center", marginLeft: '4%' }} >
                                <VECTOR_ICONS.AntDesign
                                    name="search1"
                                    color={"rgba(127, 128, 130, 1)"}
                                    size={19}
                                />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="Search Coin"
                                style={{
                                    width: width * 0.6,
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    marginLeft: '3%',
                                    fontSize: 12, fontWeight: '400'
                                }}
                                placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
                                value={searchQuery}
                                onChangeText={(text) => setSearchQuery(text)}
                            />
                        </View>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </View>

                    <Text style={[styles.textStyle, { color: 'rgba(255, 255, 255, 0.6)', alignSelf: 'flex-start', marginTop: '7%' }]}>P2P Supported Coins</Text>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filterData}
                        style={{ marginBottom: '2%' }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                No Data Found
                            </Text>
                        )}
                        renderItem={(item) => (
                            <View style={styles.FlatlistView1}>
                                <TouchableOpacity onPress={handlePress} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                                    <Image source={item?.item?.img2} style={{ width: 40, height: 40 }} />
                                    <View style={styles.TextView1}>
                                        <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                        <Text style={[styles.Text2]} > {item?.item?.UiId}</Text>
                                    </View>
                                </TouchableOpacity>

                                {selected1 && (
                                    <VECTOR_ICONS.AntDesign name={'check'} size={20} color={'#FFFFFF'} />
                                )}
                            </View>
                        )}
                    />

                </View>
            </RBSheet>



            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={680}
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
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>

                    <Text style={styles.logintext1}>Select Coin</Text>
                    <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '4%' }}>
                        <View style={styles.InputViewFiled}>
                            <TouchableOpacity
                                style={{ alignSelf: "center", marginLeft: '4%' }} >
                                <VECTOR_ICONS.AntDesign
                                    name="search1"
                                    color={"rgba(127, 128, 130, 1)"}
                                    size={19}
                                />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="Search Coin"
                                style={{
                                    width: width * 0.6,
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    marginLeft: '3%',
                                    fontSize: 12, fontWeight: '400'
                                }}
                                placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
                                value={searchQuery}
                                onChangeText={(text) => setSearchQuery(text)}
                            />
                        </View>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </View>
                    <Text style={[styles.textStyle, { color: 'rgba(255, 255, 255, 0.6)', alignSelf: 'flex-start', marginTop: '7%' }]}>Default</Text>

                    <View style={styles.FlatlistView1}>
                        <TouchableOpacity onPress={handlePress1} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                            <Image source={IMAGEPATH.Tether} style={{ width: 40, height: 40 }} />
                            <View style={styles.TextView1}>
                                <Text style={styles.Text11}>INR</Text>
                                <Text style={[styles.Text2]} >Tehter</Text>
                            </View>
                        </TouchableOpacity>

                        {selected2 && (
                            <VECTOR_ICONS.AntDesign name={'check'} size={20} color={'#FFFFFF'} />
                        )}
                    </View>

                    <Text style={[styles.textStyle, { color: 'rgba(255, 255, 255, 0.6)', alignSelf: 'flex-start', marginTop: '7%' }]}>Available currencies</Text>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filterData}
                        style={{ marginBottom: '2%' }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                No Data Found
                            </Text>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={(item) => (
                            <View style={styles.FlatlistView1}>
                                <TouchableOpacity onPress={() => handlePress(item.id)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                                    <Image source={item?.item?.img2} style={{ width: 40, height: 40 }} />
                                    <View style={styles.TextView1}>
                                        <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                        <Text style={[styles.Text2]} > {item?.item?.UiId}</Text>
                                    </View>
                                </TouchableOpacity>

                                {selected1 && (
                                    <VECTOR_ICONS.AntDesign name={'check'} size={20} color={'#FFFFFF'} />
                                )}
                            </View>
                        )}
                    />

                </View>
            </RBSheet>



            <RBSheet
                ref={refRBSheet2}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={680}
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
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>

                    <Text style={styles.logintext1}>Pay with</Text>
                    <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '10%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>P2P Trading </Text>
                            <VECTOR_ICONS.AntDesign name={'questioncircle'} color={'rgba(255, 255, 255, 0.6)'} size={12} style={{ marginTop: '5%' }} />
                        </View>
                        <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>Price</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '6%', marginVertical: '3%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#CD85E9', width: 2, height: 15, }} />
                            <Text style={styles.account1}>  Lightning </Text>
                            <Text style={styles.account1}>UPI</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.Text13}>86.4</Text>
                            <Text style={styles.Text13}> INR</Text>

                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '6%', marginVertical: '3%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#0084FF', width: 2, height: 15, }} />
                            {/* <Text style={styles.account1}>  Lightning </Text> */}
                            <Text style={styles.account1}>  UPI</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.Text13}>86.4</Text>
                            <Text style={styles.Text13}> INR</Text>
                        </View>
                    </View>

                    <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '10%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>P2P Trading </Text>
                            <VECTOR_ICONS.AntDesign name={'questioncircle'} color={'rgba(255, 255, 255, 0.6)'} size={12} style={{ marginTop: '5%' }} />
                        </View>
                        <Text style={[styles.Text2, { fontSize: 14, marginTop: '0%' }]}>Price</Text>

                    </View>


                    <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '6%', marginVertical: '3%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Image source={IMAGEPATH.Visa} style={{ height: 30, width: 30 }} />
                            {/* <Text style={styles.account1}>  Lightning </Text> */}
                            <Text style={styles.account1}>  Card (VISA/Mastercard)</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.Text13}>86.4</Text>
                            <Text style={styles.Text13}> INR</Text>
                        </View>
                    </View>

                    <WholeButton1 Label={'Confirm'} Action={() => { }} styles={{ width: width * 0.9, marginTop: height * 0.22 }} />







                </View>
            </RBSheet>




            <RBSheet
                ref={refRBSheet4}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={630}
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
                <View style={{ marginBottom: '5%', flex: 1, width: width * 0.9, alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={styles.logintext1}>Preview order</Text>

                    <View style={{ flexDirection: 'row', marginTop: '9%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                        <View>
                            <Text style={[styles.accountstyle,{color:'rgba(255, 255, 255, 0.6)'}]}>Trade with</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.3 }}>

                                <Text style={[styles.accountstyle, { color: '#FFF' }]}>Crypto-vendor</Text>
                                <Image source={IMAGEPATH.RightStar} style={{ width: 20, height: 20 }} />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.34, marginTop: '2%' }}>
                                <Text style={[styles.accountstyle1]}>Trade(s)</Text>
                                <Text style={styles.accountstyle1}>1451 (99.80%)</Text>
                            </View>


                            <Text style={[styles.signStyle1,{marginTop:'7%'}]}>Advertiser’s requirements</Text>
                            <View style={{flexDirection:'row',justifyContent: 'space-between', alignItems: 'center', width: width * 0.8}}>
                            <Text style={styles.signStyle1}>1. Open any of the UPI application </Text>
                            <VECTOR_ICONS.AntDesign name={'right'} color={'rgba(255, 255, 255, 0.6)'} />


                            </View>
                           
                        </View>


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, borderWidth: 1, borderColor: 'rgba(75, 77, 86, 1)', borderRadius: 5, padding: '4%', marginVertical: '3%' }}>

                        <View>
                            <Text style={styles.crptoStyle}>Tron (TRC20)</Text>
                            <Text style={styles.signStyle1}>Fee 0.00 USDT ( ≈ $ 0.999999)</Text>
                            <Text style={styles.signStyle1}>Minimum withdrawal 10 USDT</Text>
                            <Text style={styles.signStyle1}>Arrival time ≈ 2 mins </Text>
                        </View>


                    </View>






                </View>
            </RBSheet>





        </SafeAreaView>
    )
}




export default P2PMainPage

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '2%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        // marginTop: '13%',
        lineHeight: 32.97,
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center', width: width * 0.9,
        marginTop: '13%',
        alignSelf: 'center'

    },
    account1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    account4: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },

    accountstyle: {
        color: 'rgba(255, 255, 255, 0.87)',
        fontSize: 12,
        fontWeight: '400',
    },
    accountstyle1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 11,
        fontWeight: '400',

    },
    text: { borderWidth: 1, borderColor: '#343434', padding: '2%', width: width * 0.2, alignItems: 'center', borderRadius: 5, justifyContent: 'space-evenly', flexDirection: 'row' },
    text1: { padding: '6%', width: width * 0.17, alignItems: 'center', borderRadius: 9, justifyContent: 'space-evenly', flexDirection: 'row', marginVertical: '2%' },
    allitemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.175


    },
    viewStyle1: {
        width: width * 0.98,
        backgroundColor: '#2D2E36',
        height: 1.5,
        marginTop: '5.5%'


    },
    TextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'



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
    FlatlistView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor:'red',
        marginTop: '8%'
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
    Text2: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '2%'

    },
})