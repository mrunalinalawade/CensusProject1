import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Selectpaytoken = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const filterData = [
        {
            id: 1,
            img2: IMAGEPATH.BTCB,
            coinname: 'BTCB',
            UiId: 'Bitcoin BEP2',
            price: '0',
            percentage: '$ 0.000',
        },
        {
            id: 2,
            img2: IMAGEPATH.DoubleETH,
            coinname: 'ETH',
            UiId: 'Ethereum',
            price: '0',
            percentage: '$ 0.000',
        },
        {
            id: 3,
            img2: IMAGEPATH.DoubleBNB,
            coinname: 'BNB',
            UiId: 'BNB',
            price: '0',
            percentage: '$ 0.000',
        },




    ]
    const filterData1 = [
        {
            id: 1,
            img2: IMAGEPATH.GrayStar,

        },
        {
            id: 2,
            img2: IMAGEPATH.All,

        },
        {
            id: 3,
            img2: IMAGEPATH.BNBChain,

        },
        {
            id: 4,
            img2: IMAGEPATH.MATIC,

        },

        {
            id: 5,
            img2: IMAGEPATH.DOT,

        },
        {
            id: 6,
            img2: IMAGEPATH.EGLD,

        },





    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Select pay token'}
                    navigate={() => props.navigation.goBack()} />

                <View style={styles.InputViewFiled}>
                    <TouchableOpacity
                        style={{ alignSelf: "center", marginLeft: '4%' }} >
                        <VECTOR_ICONS.AntDesign
                            name="search1"
                            color={"rgba(127, 128, 130, 1)"}
                            size={18}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search token symbol, contract address"
                        style={{
                            width: width * 0.8,
                            color: 'rgba(127, 128, 130, 1)',
                            marginLeft: '2%'
                        }}
                        placeholderTextColor={"rgba(127, 128, 130, 1)"}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>

                <Text style={styles.textStyle}>Select network</Text>


                <FlatList
                    data={filterData1}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginVertical:'5%'}}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        const isSelected = selectedId === item.id;
                        return (
                            <View style={styles.FlatlistView1}>
                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        padding: '4%',
                                        borderRadius: 7,
                                        borderWidth: 1,
                                        borderColor: isSelected ? '#FFFFFF' : '#2E2F37',
                                        width: width * 0.14,
                                        height: 50,
                                        justifyContent: 'center',
                                    }}
                                    onPress={() => setSelectedId(item.id)}
                                >
                                    <Image source={item?.img2} style={{ width: 23, height: 23 }} />
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />





                <Text style={[styles.textStyle, { marginTop: '5%' }]}>Select Token</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filterData}
                    style={{ marginBottom: '2%' }}
                    // refreshControl={
                    //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    // }
                    ListEmptyComponent={() => (
                        <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                            No Data Found
                        </Text>
                    )}
                    renderItem={(item) => (
                        <TouchableOpacity style={styles.FlatlistView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                                <Image source={item?.item?.img2} style={{ width: 45, height:45 }} />
                                <View style={styles.TextView}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                        <TouchableOpacity style={{ backgroundColor: '#2C2E36', alignItems: 'center', padding: '8%', borderRadius: 5, marginLeft: '7%' }}><Text style={styles.Text27}>BNB Chain</Text></TouchableOpacity>


                                    </View>

                                    <Text style={[styles.Text2]} > {item?.item?.UiId}</Text>
                                </View>
                            </View>
                            <View style={[styles.TextView, { alignItems: 'flex-end' }]}>
                                <Text style={styles.Text3}>{item?.item?.price}</Text>
                                <Text style={[styles.Text2]} >{item?.item?.percentage} </Text>
                            </View>

                        </TouchableOpacity>
                    )}
                />







            </View>
        </SafeAreaView>
    )
}

export default Selectpaytoken

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },
    InputViewFiled: {
        backgroundColor: "rgba(42, 43, 47, 1)",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        width: width * 0.9,
        borderRadius: 6, marginLeft: '1%',
        marginVertical: '10%'

    },
    textStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    TextView: {
        width: width * 0.23
        // ,backgroundColor:'red'
    },
    Text11: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',

    },
    Text27: {
        fontSize: 10,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.87)',


    },
    Text2: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '2%'

    },
    FlatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor:'red',
        marginTop: '5%'
    },
    FlatlistView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 6,
    },
    Text3: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginTop: '2%'

    },

})