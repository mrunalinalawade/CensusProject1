import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity, TextInput, Dimensions, FlatList, Image} from 'react-native'
import React, { useState } from 'react'

import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme'
import Header from '../../../Components/Header';


const { height, width } = Dimensions.get('window');
const Coindropdown = (props) => {
    const [searchQuery, setSearchQuery] = useState("");

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
            UiId: 'BNB chain native token',
            price: '0',
            percentage: '$ 0.000',
        },
        {
            id: 4,
            img2: IMAGEPATH.BTCB,
            coinname: 'BTCB',
            UiId: 'Bitcoin BEP2',
            price: '0',
            percentage: '$ 0.000',
        },
        {
            id: 5,
            img2: IMAGEPATH.DoubleETH,
            coinname: 'ETH',
            UiId: 'Ethereum',
            price: '0',
            percentage: '$ 0.000',
        },
        {
            id: 6,
            img2: IMAGEPATH.DoubleBNB,
            coinname: 'BNB',
            UiId: 'BNB chain native token',
            price: '0',
            percentage: '$ 0.000',
        },





    ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

    <View style={styles.mainviewStyle}>
        <Header
            textlabel={'Select coin'}
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
                placeholder="Search"
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

        <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filterData}
                    style={{ marginBottom: '2%',marginTop:'6%' }}
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
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.5 }}>
                                <Image source={item?.item?.img2} style={{ width: 45, height:45 }} />
                                <View style={styles.TextView}>
                                   
                                        <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                      

                                   

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

export default Coindropdown

const styles = StyleSheet.create({
    InputViewFiled: {
        backgroundColor: "rgba(42, 43, 47, 1)",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        width: width * 0.9,
        marginTop: '6%',
        borderRadius: 6, marginLeft: '1%'

    },
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
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
    TextView: {
        width: width * 0.36
        // ,backgroundColor:'red'
    },
    Text3: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginTop: '2%'

    },
})