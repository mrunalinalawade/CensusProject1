import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'


import RBSheet from 'react-native-raw-bottom-sheet';
import Header from '../../Components/Header';
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const P2PMain = (props) => {
    const [selected, setselected] = useState('Buy')
    const [searchQuery, setSearchQuery] = useState("");
    const refRBSheet = useRef();
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const refRBSheet3 = useRef();


    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(null);


    const [selectedPercentage, setSelectedPercentage] = useState(1); // Default selected percentage
    const [inputValue, setInputValue] = useState('e.g 200'); // Default value for the input field

    const percentages = [400, 2, 10, 20];

    const handleSelectPercentage = (percentage) => {
        setSelectedPercentage(percentage);
        setInputValue(percentage.toString()); // Update the input field value
    };

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


    const filterData1 = [
        {
            id: 1,
            coinname: 'All',
        },
        {
            id: 2,
            coinname: 'Lightning UPI',
        },
        {
            id: 3,
            coinname: 'UPI',
        },
        {
            id: 4,
            coinname: 'IMPS',
        },
        {
            id: 5,
            coinname: 'Bank Transfer(India)',
        },
        {
            id: 6,
            coinname: 'Digital eRupee',
        },
        {
            id: 7,
            coinname: 'Google Pay (GPay)',
        },
        {
            id: 8,
            coinname: 'IMPS - PAN',
        },
        {
            id: 9,
            coinname: 'International Wire (Swift)',
        },
        {
            id: 10,
            coinname: 'Paytm',
        },
        {
            id: 11,
            coinname: 'PhonePe',
        },
        {
            id: 12,
            coinname: 'Skrill(Moneybookers)',
        },
        {
            id: 13,
            coinname: 'UPI-PAN',
        },
        {
            id: 14,
            coinname: 'Western Union',
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
                        <Image source={IMAGEPATH.Belldot} style={{ width: 19, height: 21, right: 8 }} />
                    </TouchableOpacity>

                </View>
                <View style={styles.viewStyle}>
                    <View style={[styles.viewStyle, {
                        width: width * 0.67,
                        marginTop: '0%',
                    }]}>
                        <View style={[styles.allitemStyle, { width: width * 0.24, }]}>
                            <Image source={IMAGEPATH.Tether} style={{ width: 30, height: 30 }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.13, justifyContent: 'space-between' }}>
                                <Text style={styles.accountstyle}>USDT</Text>
                                <TouchableOpacity onPress={() => { refRBSheet.current.open() }}>
                                    <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={12} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.allitemStyle}>
                            <Text style={styles.accountstyle}>Amount</Text>
                            <TouchableOpacity onPress={()=>{props.navigation.navigate('BuyUSDT')}}>
                                <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={12} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => { refRBSheet3.current.open() }} style={styles.allitemStyle}>
                            <Text style={styles.accountstyle}>Payment</Text>
                            <TouchableOpacity>
                                <VECTOR_ICONS.AntDesign name={'caretdown'} color={'#FFFFFF'} size={12} />
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity>
                        <Image source={IMAGEPATH.Filterdot} style={{ width: 19, height: 21, right: 10 }} />
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
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.47, marginTop: '14%' }}>
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
                                {/* BuywiithINR */}
                                {selected === 'Buy' ?
                                    <TouchableOpacity onPress={() => { refRBSheet2.current.open() }} style={[styles.text1, { backgroundColor: '#42C9A1', width: width * 0.26, padding: '4%', }]}>
                                        <Text style={styles.account1}>Buy</Text></TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => { refRBSheet2.current.open() }} style={[styles.text1, { backgroundColor: '#42C9A1', width: width * 0.26, padding: '4%', }]}>
                                        <Text style={styles.account1}>Sell</Text></TouchableOpacity>



                                }


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
                height={295}
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
                    <Text style={[styles.logintext3, { alignSelf: 'flex-start' }]}>I want to buy</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='e.g 200'
                            style={styles.input}
                            value={inputValue}
                            editable={false}
                        />
                        <Text style={styles.percentageSymbol}>INR</Text>
                    </View>

                    <View style={styles.optionsContainer}>
                        {percentages.map((percentage) => (
                            <TouchableOpacity
                                key={percentage}
                                style={[
                                    styles.option,
                                    selectedPercentage === percentage && styles.selectedOption,
                                ]}
                                onPress={() => handleSelectPercentage(percentage)}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        selectedPercentage === percentage && styles.selectedOptionText,
                                    ]}
                                >
                                    ₹{percentage}k
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: '3%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                        <WholeButton1 Label={'Reset'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                        <WholeButton1 Label={'Confirm'} Action={() => { refRBSheet2.current.close() }} styles={{ width: width * 0.43, padding: '3%', }} />
                    </View>
                </View>
            </RBSheet>



            <RBSheet
                ref={refRBSheet3}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={710}
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
                <View style={{ width: width * 0.9, alignSelf: 'center', alignItems: 'center', padding: '3%', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start' }}>
                        <Text style={[styles.logintext3, { alignSelf: 'flex-start' }]}>Payment methods</Text>
                        <Image source={IMAGEPATH.Square} style={{ width: 25, height: 25, marginLeft: '3%', marginTop: '7%', }} />
                    </View>

                    <View style={[styles.InputViewFiled, { marginTop: '10%', width: width * 0.9, }]}>
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

                    <FlatList
                        numColumns={2}
                        data={filterData1}
                        style={{ marginBottom: '2%',marginTop:'8%' }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                                No Data Found
                            </Text>
                        )}
                        renderItem={(item) => (
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', 
                            justifyContent:'center', width: width * 0.40, borderWidth: 1, borderColor: '#2A2B2F',alignSelf:'center',padding:'4%',borderRadius:7,margin:2}}>
                                <Text style={[styles.Text11,{textAlign:'center'}]}>{item.item?.coinname}</Text>
                            </TouchableOpacity>
                        )}
                    />

                    <View style={{ flexDirection: 'row', marginTop: '3%', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                        <WholeButton1 Label={'Reset'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                        <WholeButton1 Label={'Confirm'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', }} />
                    </View>
                </View>
            </RBSheet >

            





        </SafeAreaView >
    )
}




export default P2PMain

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
        fontSize: 12,
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
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        // alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },



    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        paddingHorizontal: 14,
        marginTop: '6%',
        borderRadius: 8,
        height: 50,
        marginBottom: 16,

    },
    input: {
        width: width * 0.76,
        color: '#FFFFFF',
        fontSize: 12,
    },
    percentageSymbol: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '500'
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9
    },
    option: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 4,

        borderRadius: 8,
        backgroundColor: 'rgba(118, 140, 92, 0.1)',
    },
    selectedOption: {
        backgroundColor: '#768C5C',

    },
    optionText: {
        color: '#768C5C',

        fontSize: 16,
    },
    selectedOptionText: {
        color: '#FFFFFF',

    },
    logintext3: {
        fontSize: 22,
        fontWeight: '600',

        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

    },

})