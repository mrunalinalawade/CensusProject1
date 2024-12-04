
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';


const { height, width } = Dimensions.get('window');
const TradingAssets = (props) => {
    const [selected1, setSelected1] = useState('All')

    const filterData = [
        {
            id: 1,

            img2: IMAGEPATH.Tether,
            coinname: 'USDT',
            UiId: 'Tehter',
            price: '1,495.02516812',

        },
        {
            id: 2,
            img2: IMAGEPATH.BTC,
            coinname: 'BTC',
            UiId: 'Bitcoin',
            price: '1,495.02516812',

        },
        {
            id: 3,
            img2: IMAGEPATH.ETH,
            coinname: 'ETH',
            UiId: 'Ethereum',
            price: '1,495.02516812',

        },
        {
            id: 4,
            img2: IMAGEPATH.LTC,
            coinname: 'LTC',
            UiId: 'Light coin',
            price: '1,495.02516812',

        },
        {
            id: 5,
            img2: IMAGEPATH.MATIC,
            coinname: 'MATIC',
            UiId: 'Matic',
            price: '1,495.02516812',

        },
        {
            id: 6,
            img2: IMAGEPATH.DOT,
            coinname: 'DOT',
            UiId: 'Polka dot',
            price: '1,495.02516812',

        },
        {
            id: 7,
            img2: IMAGEPATH.BTC,
            coinname: 'BTC',
            UiId: 'Bitcoin',
            price: '1,495.02516812',

        },

        {
            id: 7,
            img2: IMAGEPATH.DOT,
            coinname: 'DOT',
            UiId: 'Polka dot',
            price: '1,495.02516812',

        },
        {
            id: 8,
            img2: IMAGEPATH.BTC,
            coinname: 'BTC',
            UiId: 'Bitcoin',
            price: '1,495.02516812',

        },
        {
            id: 9,
            img2: IMAGEPATH.BTC,
            coinname: 'BTC',
            UiId: 'Bitcoin',
            price: '1,495.02516812',

        },
        {
            id: 10,
            img2: IMAGEPATH.BTC,
            coinname: 'BTC',
            UiId: 'Bitcoin',
            price: '1,495.02516812',

        },


    ]

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.9, marginTop: '2%' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={styles.total}>Total Balance  </Text>
                    <Image source={IMAGEPATH.eye} style={{ width: 20, height: 20 }} />
                </View>

                
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: '10%' }}>
            
              <TouchableOpacity><Image source={IMAGEPATH.Frame} style={{ width: 35, height: 35, marginTop: '2%' }} /></TouchableOpacity>
            </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                <Text style={styles.selectedTabText1}>1,495.03 </Text>
                <Text style={styles.total}>USDT </Text>
                <VECTOR_ICONS.AntDesign name={'down'} size={12} color={'#FFFFFF'} />
            </View>

            <Text style={[styles.total, { fontSize: 14, marginTop: '3%' }]}>≈ $13,200</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'flex-start', marginVertical: '2%',marginTop: '4%' }}>
                <TouchableOpacity onPress={() => { setSelected1('All') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'All' ? '#768C5C' : '#24262A' }]}>
                    <Text style={[styles.exStyle, selected1 === 'All' ? { color: '#FFFFFF' } : { color: '#FFFFFF' }]}>Convert</Text></TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelected1('Processing') }}
                    style={[styles.inputStyle1, { backgroundColor: selected1 === 'Processing' ? '#768C5C' : '#24262A' }]}>
                    <Text style={[styles.exStyle, selected1 === 'Processing' ? { color: '#FFFFFF' } : { color: '#FFFFFF' }]}>Transfer</Text></TouchableOpacity>


            </View>
            <View style={[styles.viewStyle1, { marginTop: '3%' }]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'flex-start', marginVertical: '4%' ,marginTop: '4%'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start',  }}>
            <VECTOR_ICONS.FontAwesome name={'square-o'} size={20} color={'rgba(255, 255, 255, 0.6)'}  style={{ }}/>
            <Text style={[styles.Text2,{marginLeft:'5%',marginTop: '0%'}]}>Hide small balance</Text>

            </View>
            <VECTOR_ICONS.AntDesign name={'search1'} color={'rgba(255, 255, 255, 0.6)'} size={20} style={{ }} />
            </View>

           

            <FlatList
                showsVerticalScrollIndicator={false}
                data={filterData}
                style={{ height: height * 0.43 ,}}
                // refreshControl={
                //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                // }
                ListEmptyComponent={() => (
                    <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                        No Data Found
                    </Text>
                )}
                renderItem={(item) => (<>
                    <TouchableOpacity style={styles.FlatlistView}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: width * 0.35 }}>
                            <Image source={item?.item?.img2} style={{ width: 25, height: 25 }} />
                            <View style={styles.TextView}>
                                <Text style={styles.Text11}>{item.item?.coinname}</Text>
                                <Text style={[styles.Text2]} > {item?.item?.UiId}</Text>
                            </View>
                        </View>
                      
                       <Text style={styles.Text3}>{item?.item?.price}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',width: width * 0.76,alignSelf:'center',marginLeft:'13%',marginTop:'3%'}}>
                        <Text style={styles.Text23}>Available</Text>
                        <Text style={styles.Text113}>1,495.02516812</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between',width: width * 0.76,alignSelf:'center',marginLeft:'13%',marginVertical:'1.5%'}}>
                    <Text style={styles.Text23}>Freeze</Text>
                        <Text style={styles.Text113}>0.00</Text>
                    </View>
                    

                    <View style={[styles.viewStyle1,]}></View>
                </>
                )}
            />




        </>
    )
}

export default TradingAssets

const styles = StyleSheet.create({
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
    inputStyle1: {
        alignItems: 'center',
        width: width * 0.43,
        marginTop: '4%',

        padding: '4.5%',

        borderRadius: 5

    },
    exStyle: {

        fontSize: 14,
        // fontFamily: FONTS.Regular,
        fontWeight: '500',
        // marginHorizontal: '2%'
    },
    FlatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignItems:'flex-start',
        alignSelf: 'center',
        // backgroundColor:'red',
        marginTop: '5%'
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
    Text113: {
        fontSize: 10,
        fontWeight: '400',
        color: '#fff',

    },
    Text2: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '2%'

    },
    Text3: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
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
})