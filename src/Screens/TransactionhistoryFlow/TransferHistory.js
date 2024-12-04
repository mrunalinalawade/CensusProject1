
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import WholeButton1 from '../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const TransferHistory = (props) => {
    const refRBSheet1 = useRef();
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();
    const refRBSheet3 = useRef();
    const refRBSheet4 = useRef();
    const [selected1, setSelected1] = useState('All');
    const [selected2, setSelected2] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selected, setselected] = useState('Cash')
    const [selected3, setSelected3] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState(null);

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
    const openExchangeSheet = () => {

        refRBSheet.current.open();
    };

    const openExchangeSheet1 = () => {

        refRBSheet3.current.open();
    };
    const openExchangeSheet2 = () => {

        refRBSheet4.current.open();
    };
    const handlePress = () => {
        setSelected3(!selected3);
    };
    const handlePress1 = (id) => {
        setSelected2(id === selected2 ? null : id);
    };


    const Data = [{
        id: 1,
        crpto: "Funding",

    },
    {
        id: 2,
        crpto: "Spot",

    },
    {
        id: 3,
        crpto: "Option",

    },
    {
        id: 4,
        crpto: "P2P",

    },
    {
        id: 5,
        crpto: "Spot",

    },
    {
        id: 6,
        crpto: "Option",

    },

    {
        id: 7,
        crpto: "P2P",

    },
    {
        id: 8,
        crpto: "Spot",

    },
    {
        id: 9,
        crpto: "Option",

    },
    {
        id: '10',
        crpto: "P2P",

    },
    ]


    const Data1 = [{
        id: 1,
        crpto: "Option",

    },
    {
        id: 2,
        crpto: "Cross margin",

    },
    {
        id: 3,
        crpto: "P2P",

    },
    {
        id: 4,
        crpto: "P2P",

    },
    {
        id: 5,
        crpto: "Spot",

    },
    {
        id: 6,
        crpto: "Option",

    },

    {
        id: 7,
        crpto: "P2P",

    },
    {
        id: 8,
        crpto: "Spot",

    },
    {
        id: 9,
        crpto: "Option",

    },
    {
        id: '10',
        crpto: "P2P",

    },
    ]

    const handleSelectItem = (id) => {
        setSelectedItem(id); 
    };
    const handleSelectItem1 = (id) => {
        setSelectedItem1(id); 
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <View style={styles.viewStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.52, }}>
                        <TouchableOpacity onPress={() => { setselected('Crypto') }}
                            style={[styles.text1, selected === 'Crypto' ? { backgroundColor: 'rgba(118, 140, 92, 0.1)' } : null, { padding: '6%', alignItems: 'center', width: width * 0.36, borderRadius: 9 }]}>
                            <Text style={[styles.account1, { color: selected === 'Crypto' ? '#768C5C' : 'rgba(255, 255, 255, 0.6)' }]}>Crypto</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setselected('Cash') }} style={[styles.text1, selected === 'Cash' ? { backgroundColor: 'rgba(118, 140, 92, 0.1)' } : null, { padding: '6%', alignItems: 'center', width: width * 0.23, borderRadius: 9 }]}>
                            <Text style={[styles.account1, { color: selected === 'Cash' ? '#768C5C' : 'rgba(255, 255, 255, 0.6)' }]}>Cash</Text></TouchableOpacity>
                    </View>
                    {selected === 'Crypto' ?
                        <TouchableOpacity onPress={() => { refRBSheet2.current.open() }}><Image source={IMAGEPATH.filter} style={{ width: 20, height: 20 }} /></TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { refRBSheet1.current.open() }}><Image source={IMAGEPATH.filter} style={{ width: 20, height: 20 }} /></TouchableOpacity>}
                </View>


                <View>
                    <Image source={IMAGEPATH.EmptyAddress} style={{ width: 110, height: 110, alignSelf: 'center', marginTop: height * 0.16 }} />
                    <Text style={styles.textStyel}>No record found</Text>
                </View>
            </View>



            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={500}
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

                    <Text style={styles.logintext1}>filter</Text>

                    <Text style={[styles.account, { alignSelf: 'flex-start', marginTop: '4%' }]}>Status</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8, alignSelf: 'flex-start', marginVertical: '2%' }}>
                        <TouchableOpacity onPress={() => { setSelected1('All') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'All' ? 'rgba(118, 140, 92, 0.1)' : null, borderWidth: 1, borderColor: '#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'All' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>All</Text></TouchableOpacity>

                        <TouchableOpacity onPress={() => { setSelected1('Processing') }}
                            style={[styles.inputStyle1, { backgroundColor: selected1 === 'Processing' ? 'rgba(118, 140, 92, 0.1)' : null, borderWidth: 1, borderColor: '#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Processing' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Successful</Text></TouchableOpacity>


                        <TouchableOpacity onPress={() => { setSelected1('Completed') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Completed' ? 'rgba(118, 140, 92, 0.1)' : null, borderWidth: 1, borderColor: '#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Completed' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Processing</Text></TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8, alignSelf: 'flex-start', marginVertical: '2%' }}>
                        <TouchableOpacity onPress={() => { setSelected1('Failure') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Failure' ? 'rgba(118, 140, 92, 0.1)' : null, borderWidth: 1, borderColor: '#25262D', alignSelf: 'flex-start', marginTop: '1%' }]}>
                            <Text style={[styles.exStyle, selected1 === 'Failure' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Failure</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelected1('Expired') }}
                            style={[styles.inputStyle1, { backgroundColor: selected1 === 'Expired' ? 'rgba(118, 140, 92, 0.1)' : null, borderWidth: 1, borderColor: '#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Expired' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Expired</Text></TouchableOpacity>


                        <TouchableOpacity onPress={() => { setSelected1('Canceled') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Canceled' ? 'rgba(118, 140, 92, 0.1)' : null, borderWidth: 1, borderColor: '#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Canceled' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Canceled</Text></TouchableOpacity>

                    </View>

                    <Text style={[styles.account, { alignSelf: 'flex-start' }]}>Date</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'flex-start', marginVertical: '2%' }}>
                        <TouchableOpacity style={[styles.inputStyle1, { backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.4 }]}>
                            <Text style={[styles.exStyle, { color: '#fff' }]}>10-24-2024</Text></TouchableOpacity>
                        <Text style={[styles.account, { marginTop: '0%' }]}>to</Text>
                        <TouchableOpacity
                            style={[styles.inputStyle1, { backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.4 }]}>
                            <Text style={[styles.exStyle, { color: '#fff' }]}>10-24-2024</Text></TouchableOpacity>

                    </View>




                    <Text style={[styles.account, { alignSelf: 'flex-start' }]}>Currency</Text>
                    <TouchableOpacity onPress={() => {

                        openExchangeSheet();
                    }} style={[styles.InputFieldStyle]}>
                        <Text style={styles.PlaceholderStyle}>All </Text>
                        <TouchableOpacity onPress={props.NetworkPress}>
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'rgba(127, 128, 130, 1)'} size={13} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                        <WholeButton1 Label={'Reset'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                        <WholeButton1 Label={'Apply'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', }} />
                    </View>

                </View>
            </RBSheet>



            <RBSheet
                ref={refRBSheet2}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={550}
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

                    <Text style={styles.logintext1}>filter</Text>

                    <Text style={[styles.account, { alignSelf: 'flex-start', marginTop: '4%' }]}>From</Text>

                    <TouchableOpacity onPress={() => {

                        openExchangeSheet1();
                    }} style={[styles.InputFieldStyle]}>
                        <Text style={styles.PlaceholderStyle}>Spot </Text>
                        <TouchableOpacity >
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'rgba(127, 128, 130, 1)'} size={13} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>


                    <Text style={[styles.account, { alignSelf: 'flex-start', marginTop: '4%' }]}>To</Text>

                    <TouchableOpacity onPress={() => {

                        openExchangeSheet2();
                    }} style={[styles.InputFieldStyle]}>
                        <Text style={styles.PlaceholderStyle}>Cross margin </Text>
                        <TouchableOpacity >
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'rgba(127, 128, 130, 1)'} size={13} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>





                    <Text style={[styles.account, { alignSelf: 'flex-start' }]}>Date</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'flex-start', marginVertical: '2%' }}>
                        <TouchableOpacity style={[styles.inputStyle1, { backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.4 }]}>
                            <Text style={[styles.exStyle, { color: '#fff' }]}>10-24-2024</Text></TouchableOpacity>
                        <Text style={[styles.account, { marginTop: '0%' }]}>to</Text>
                        <TouchableOpacity
                            style={[styles.inputStyle1, { backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.4 }]}>
                            <Text style={[styles.exStyle, { color: '#fff' }]}>10-24-2024</Text></TouchableOpacity>

                    </View>




                    <Text style={[styles.account, { alignSelf: 'flex-start' }]}>Currency</Text>
                    <TouchableOpacity onPress={() => {

                        openExchangeSheet();
                    }} style={[styles.InputFieldStyle]}>
                        <Text style={styles.PlaceholderStyle}>All </Text>
                        <TouchableOpacity >
                            <VECTOR_ICONS.AntDesign name={'caretdown'} color={'rgba(127, 128, 130, 1)'} size={13} style={{ right: 20 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 }}>

                        <WholeButton1 Label={'Reset'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                        <WholeButton1 Label={'Apply'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', }} />
                    </View>

                </View>
            </RBSheet>


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

                                {selected3 && (
                                    <VECTOR_ICONS.AntDesign name={'check'} size={20} color={'#FFFFFF'} />
                                )}
                            </View>
                        )}
                    />

                </View>
            </RBSheet>


            <RBSheet
                ref={refRBSheet3}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={620}
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
                <View style={{ marginBottom: '2%', flex: 1, width: width * 0.9, alignSelf: 'center', marginTop: '4%' }}>

                    <Text style={styles.logintext1}>Select Type</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}


                        data={Data}
                        style={{ marginVertical: '4%', }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }}>
                                No Data Found
                            </Text>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <TouchableOpacity onPress={() => handleSelectItem(item.id)}><Text style={styles.textStyle1}>{item?.crpto}</Text></TouchableOpacity>
                                {selectedItem === item.id && (
                                    <VECTOR_ICONS.AntDesign
                                        name={'check'}
                                        size={20}
                                        color={'#FFFFFF'}
                                    />)}


                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />



                </View>
            </RBSheet>


            <RBSheet
                ref={refRBSheet4}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={620}
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
                <View style={{ marginBottom: '2%', flex: 1, width: width * 0.9, alignSelf: 'center', marginTop: '4%' }}>

                    <Text style={styles.logintext1}>Select Type</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}


                        data={Data1}
                        style={{ marginVertical: '4%', }}
                        ListEmptyComponent={() => (
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: FONTS.semiBold, textAlign: 'center', marginTop: '10%' }}>
                                No Data Found
                            </Text>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <TouchableOpacity onPress={() => handleSelectItem1(item.id)}><Text style={styles.textStyle1}>{item?.crpto}</Text></TouchableOpacity>
                                {selectedItem1 === item.id && (
                                    <VECTOR_ICONS.AntDesign
                                        name={'check'}
                                        size={20}
                                        color={'#FFFFFF'}
                                    />)}

                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />



                </View>
            </RBSheet>

        </SafeAreaView>
    )
}

export default TransferHistory

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },


    inputStyle1: {
        alignItems: 'center',
        // width: width * 0.2,
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

        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '4%'
    },
    textStyel: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        alignSelf: 'center',
        marginTop: '3%'

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

    text1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 10,
        fontWeight: '400'
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#768C5C'
    },
    TextView1: {
        // width: width * 0.23
        // ,backgroundColor:'red'
    },
    Text11: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',

    },
    InputViewFiled: {
        backgroundColor: "rgba(42, 43, 47, 1)",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        width: width * 0.7,
        borderRadius: 6, marginLeft: '1%'

    },
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

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
    // logintext1: {
    //     fontSize: 22,
    //     fontWeight: '600',
    //     color: '#fff',
    //     marginTop: '6%',
    //     lineHeight: 32.97,

    // },
    TextView1: {
        width: width * 0.23
        // ,backgroundColor:'red'
    },
    textStyle1: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'flex-start',
    },
    // itemContainer: {
    //     alignSelf: 'flex-start',
    //     marginTop: '10%' 


    // },
    itemContainer: {
        flexDirection: 'row',
        width: width * 0.9,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center', marginTop: '8%'


    }

})