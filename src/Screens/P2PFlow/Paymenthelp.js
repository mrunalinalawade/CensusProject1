import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import WholeButton1 from '../../Components/WholeButton1';
import { VECTOR_ICONS } from '../../assets/Theme';

const { height, width } = Dimensions.get('window');
const Paymenthelp = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    // order={true}
                    navigate={() => props.navigation.goBack()}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '10%' }}>
                    <Text style={styles.logintext}>Payment Help?</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%' }}>
                    <Text style={styles.pay}>Time remaining </Text>
                    <Text style={styles.time}>12:57 </Text>
                </View>


              
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '25%', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <Text style={styles.pay6}>How do I make a payment?</Text>
                    <TouchableOpacity><VECTOR_ICONS.AntDesign name={'down'} color={'#fff'} size={15} style={{ alignSelf: 'center', marginTop: '4%' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewStyle2,]}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <Text style={styles.pay6}>What should I do when the counterparty asked for any personal details for verification?</Text>
                    <TouchableOpacity><VECTOR_ICONS.AntDesign name={'down'} color={'#fff'} size={15} style={{ alignSelf: 'center', marginTop: '4%' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewStyle2,]}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <Text style={styles.pay6}>What do I do if the payment failed?</Text>
                    <TouchableOpacity><VECTOR_ICONS.AntDesign name={'down'} color={'#fff'} size={15} style={{ alignSelf: 'center', marginTop: '4%' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewStyle2,]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <Text style={styles.pay6}>The advertiser charged a transaction fee</Text>
                    <TouchableOpacity><VECTOR_ICONS.AntDesign name={'down'} color={'#fff'} size={15} style={{ alignSelf: 'center', marginTop: '4%' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewStyle2,]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '3%', width: width * 0.9, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <Text style={styles.pay6}>What if I no longer want to trade?</Text>
                    <TouchableOpacity><VECTOR_ICONS.AntDesign name={'down'} color={'#fff'} size={15} style={{ alignSelf: 'center', marginTop: '4%' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewStyle2,]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '6%' }}>
                    <Text style={styles.pay1}>Unable to find relevant info? </Text>
                    <Text style={styles.time1}>Go to the help center</Text>
                </View>


                <View style={[styles.viewStyle1,]}></View>
                <WholeButton1 Label={'Contact Counterparty'} Action={() => { props.navigation.navigate('Home') }} styles={{ width: width * 0.9, bottom: '2%' }} />

            </View>
        </SafeAreaView>
    )
}

export default Paymenthelp

const styles = StyleSheet.create({
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        // marginTop: '13%',
        lineHeight: 32.97,
    },
    mainviewStyle: {

        width: width * 0.9,
        alignSelf: 'center',

    },
    pay: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '400'
    },
    pay6: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '500',
        width:width*0.78
    },
    time: {
        fontSize: 14,
        color: '#768C5C',
        fontWeight: '600'

    },
    pay1: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '400'
    },
    time1: {
        fontSize: 12,
        color: '#2F9ED6',
        fontWeight: '600'

    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop:height*0.13,
        // bottom: "1%"
    },
    viewStyle2: {
        width: width*0.9,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        // right: 16,
        marginTop: '4%',
        // bottom: "1%"
    },
})