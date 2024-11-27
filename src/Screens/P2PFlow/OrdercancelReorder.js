import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import WholeButton1 from '../../Components/WholeButton1';



const { height, width } = Dimensions.get('window');
const OrdercancelReorder = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={{ flex: 1 }}>
                <View style={styles.mainviewStyle}>
                    <Header navigate={() => props.navigation.goBack()} />
                    <Text style={styles.logintext}>Order details</Text>

                    <Text style={styles.account}>Due to buyer</Text>

                    <View style={styles.ViewStylew2}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.sell}>BUY</Text>
                                <Text style={styles.UsdtStyle}>USDT</Text>

                            </View>
                            <VECTOR_ICONS.MaterialCommunityIcons name={'message-text'} color={'#2F9ED6'} size={20} style={{}} />
                        </View>
                        <View style={styles.viewStle5}>
                            <Text style={styles.tabText61} >Amount</Text>
                            <Text style={styles.tabText62}>₹ 2,000.00</Text>
                        </View>
                        <View style={[styles.viewStle5, { marginTop: '5%' }]}>
                            <Text style={styles.tabText61} >Price</Text>
                            <Text style={styles.tabText62}>₹ 89.95</Text>
                        </View>
                        <View style={styles.viewStle6}>

                            <Text style={styles.tabText61}>Quantity</Text>

                            <Text style={styles.tabText62}>22.23 USDT</Text>
                        </View>
                        <View style={styles.viewStle6}>

                            <Text style={styles.tabText61}>Quantity</Text>

                            <Text style={styles.tabText62}>₹ 89.95</Text>
                        </View>


                        <VECTOR_ICONS.AntDesign name={'down'} color={'rgba(255, 255, 255, 0.6)'} size={20} style={{alignSelf:'center',marginTop:'4%'}} />
                       
                   

                    </View>
                    <TouchableOpacity style={{backgroundColor:'rgba(255, 255, 255, 0.05)',flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:'18%',padding:'4%',borderRadius:9}}>
                        <VECTOR_ICONS.AntDesign name={'checkcircleo'} color={'#42C9A1'} size={18} />
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400', alignSelf: 'center',marginHorizontal:'2%'}}>Order Cancelled</Text></TouchableOpacity>


                    <View style={[styles.viewStyle1,]}></View>
                    <WholeButton1 Label={'Back to home'} Action={() => {props.navigation.navigate('Home') }} styles={{ width: width * 0.9, bottom: '2%' }} />







                </View>
            </View>
        </SafeAreaView>
    )
}

export default OrdercancelReorder

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '6%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        // fontFamily: FONTS.semiBold,
        color: '#fff',
        marginTop: '13%',
        lineHeight: 32.97,
    },
    inputStyle: {
        marginTop: height * 0.12,
        alignSelf: 'center',
        width: width * 0.9,
        alignItems: 'center'
    },
    account: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)',
        // lineHeight: 20,
        marginTop: '26%'
    },
    account2: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // lineHeight: 20,
        marginTop: '6%',
        textAlign: 'center'
    },
    ViewStylew2: {

        width: width * 0.9,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        padding: '5%',
        borderRadius: 10,
        marginTop: '18%',

    },
    sell: {
        fontSize: 18,
        fontWeight: '600',
        color: '#42C9A1',

    },
    UsdtStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: '4%'

    },
    withStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: '3%'

    },
    viewStle5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,
        marginTop: '10%'
    },
    viewStle6: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.81,
        marginVertical: '3%'
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
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '4%',
        // bottom: "1%"
    },
    coin6: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: '3%'

    },
})