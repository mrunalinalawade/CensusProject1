import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import WholeButton1 from '../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const Tradehistory = (props) => {
    const refRBSheet1 = useRef();
    const refRBSheet = useRef();
    const [selected1, setSelected1] = useState('All');
    const [selected2, setSelected2] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    const filterData = [
        {
            id: 1,
            coinname: 'All',
        },
        {
            id: 2,
            coinname: 'GALA/BTC',
           
        },
        {
            id: 3,
            coinname: 'LISTA/BNB',
        },
        {
            id: 4,
            coinname: 'SC/USDT',

        },
        {
            id: 5,
            coinname: 'APE/BTC',
        },
        {
            id: 6,
            coinname: 'DOGE/BTC',
          
        },
        {
            id: 7,
            coinname: 'DODO/USDT',
        },
        {
            id: 8,
            coinname: 'Bitget wallet',
        },
        {
            id: 9,
            coinname: 'Other',
        },
        {
            id: 10,
            coinname: 'GALA/BTC',
        },
        {
            id: 11,
            coinname: 'LISTA/BNB',
        },
        {
            id: 12,
            coinname: 'SC/USDT',
        },
        {
            id: 13,
            coinname: 'APE/BTC',
        },
    ]


    const openExchangeSheet = () => {

        refRBSheet.current.open();
    };
    const handlePress = () => {
        setSelected2(!selected2);
    };



    return (
       <>

            <View style={styles.mainviewStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'flex-start', marginTop: '8%' }}>
                    <TouchableOpacity style={[styles.inputStyle1, { backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.35 }]}>
                        <Text style={[styles.exStyle, { color: '#fff' }]}>10-24-2024</Text></TouchableOpacity>
                    <Text style={[styles.account, { marginTop: '0%' }]}>to</Text>
                    <TouchableOpacity
                        style={[styles.inputStyle1, { backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.35 }]}>
                        <Text style={[styles.exStyle, { color: '#fff' }]}>10-24-2024</Text></TouchableOpacity>

                    <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} ><Image source={IMAGEPATH.filter} style={{ width: 20, height: 20 }} /></TouchableOpacity>

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

                    <Text style={styles.logintext1}>Order filter</Text>

                    <Text style={[styles.account, { alignSelf: 'flex-start',marginTop: '4%' }]}>Status</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.67, alignSelf: 'flex-start', marginVertical: '2%' }}>
                    <TouchableOpacity onPress={() => { setSelected1('All') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'All' ? 'rgba(118, 140, 92, 0.1)' : null,borderWidth:1,borderColor:'#25262D',}]}>
                            <Text style={[styles.exStyle, selected1 === 'All' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>All</Text></TouchableOpacity>

                        <TouchableOpacity onPress={() => { setSelected1('Processing') }}
                            style={[styles.inputStyle1, { backgroundColor: selected1 === 'Processing' ? 'rgba(118, 140, 92, 0.1)' : null,borderWidth:1,borderColor:'#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Processing' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Buy</Text></TouchableOpacity>


                        <TouchableOpacity onPress={() => { setSelected1('Completed') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Completed' ? 'rgba(118, 140, 92, 0.1)' : null,borderWidth:1,borderColor:'#25262D', }]}>
                            <Text style={[styles.exStyle, selected1 === 'Completed' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Sell</Text></TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => { setSelected1('Failure') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'Failure' ? 'rgba(118, 140, 92, 0.1)' :null,borderWidth:1,borderColor:'#25262D',alignSelf:'flex-start',marginTop:'1%'}]}>
                    <Text style={[styles.exStyle, selected1 === 'Failure' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Failure</Text>
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




                    <Text style={[styles.account, { alignSelf: 'flex-start' }]}>Pair</Text>
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
                                <TouchableOpacity onPress={handlePress} style={{ alignSelf:'flex-start' }}>
                                   
                                
                                        <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                   
                                </TouchableOpacity>

                                {selected2 && (
                                    <VECTOR_ICONS.AntDesign name={'check'} size={20} color={'#FFFFFF'} />
                                )}
                            </View>
                        )}
                    />

                </View>
            </RBSheet>
            </>
    )
}

export default Tradehistory

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },


    inputStyle1: {
        alignItems: 'center',
        width: width * 0.2,
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
    logintext1: {
        fontSize: 22,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: '6%',
        lineHeight: 32.97,

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
        // fontFamily: FONTS.semiBold,
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
})