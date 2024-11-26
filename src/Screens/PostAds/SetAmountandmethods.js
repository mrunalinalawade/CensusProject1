import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import WholeButton1 from '../../Components/WholeButton1';

const { height, width } = Dimensions.get('window');
const SetAmountandmethods = (props) => {

    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    // Add={true}
                    textlabel={'Support'}
                    navigate={() => props.navigation.goBack()}
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:'2%'  }} >
                    <Image source={IMAGEPATH.line3} style={{ width: '99%', height: 27, marginTop: '15%', alignSelf: 'center' }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                        <Text style={styles.text}>Set Type & Price</Text>
                        <Text style={styles.text1}>Set Amount & Method</Text>
                        <Text style={styles.text1}>Set Conditions</Text>
                    </View>
                    <Text style={styles.main}>Total amount</Text>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.9, borderRadius: 8, alignItems: 'center', alignSelf: 'center', flexDirection: 'row', padding: '6%', marginTop: '5%', justifyContent: 'space-between' }}>
                        <Text style={styles.coin}>1495.02</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                            <Text style={styles.text6}>USDT </Text>
                            <Text style={[styles.text6, { color: 'rgba(118, 140, 92, 1)' }]}> All</Text>
                        </View>

                    </View>

                    <Text style={styles.inrStyle}>≈ INR 1,35,299.31</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={[styles.main1, { marginTop: '4%' }]}>Available:</Text>
                        <Text style={[styles.main1, { marginTop: '4%' }]}>1,495.02USDT</Text>
                        <VECTOR_ICONS.AntDesign name={'pluscircle'} color={'rgba(255, 255, 255, 1)'} style={{ marginTop: '4%', marginLeft: '3%' }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '4%' }}>
                        <Text style={styles.account}>Order limit</Text>
                        <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%' }} />

                    </View>
                    <View style={{ marginTop: '1%', flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.4, borderRadius: 8, alignItems: 'center', alignSelf: 'center', flexDirection: 'row', padding: '5%', justifyContent: 'space-between' }}>
                            <Text style={styles.text6}>200.00</Text>
                            <Text style={styles.text6}>INR</Text>
                        </View>
                        <Text style={styles.text6}>≈</Text>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.4, borderRadius: 8, alignItems: 'center', alignSelf: 'center', flexDirection: 'row', padding: '5%', justifyContent: 'space-between' }}>
                            <Text style={styles.text6}>2000000.00</Text>
                            <Text style={styles.text6}>INR</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.73, justifyContent: 'space-between', marginLeft: '2%' }}>
                        <Text style={[styles.main1, { marginTop: '2%' }]}>≈ 2.2 USDT</Text>
                        <Text style={[styles.main1, { marginTop: '2%' }]}>≈ 22,099.44 USDT</Text>
                    </View>

                    <View style={[styles.viewStyle]}></View>

                    <View style={{ marginTop: '6%', flexDirection: 'row', alignItems: 'center', width: width * 0.9, justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.payment}>Payment Method</Text>
                            <Text style={styles.main1}>Select up to 5 methods.</Text>

                        </View>
                        <TouchableOpacity onPress={toggleDetails} style={{ backgroundColor: 'rgba(118, 140, 92, 0.1)', padding: '3.5%', borderRadius: 7, right: 3 }}><Text style={[styles.text6, { color: 'rgba(118, 140, 92, 1)' }]}>+ Add</Text></TouchableOpacity>

                    </View>
                    {isDetailsVisible && (
                        <View style={styles.ViewStylew2}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ backgroundColor: '#2F9ED6', width: 3, height: 15, }} />
                                    <Text style={styles.coin6}>Bank Transfer (India)</Text>
                                </View>
                                <VECTOR_ICONS.AntDesign name={'close'} color={'rgba(255, 255, 255, 0.6)'} size={20} />


                            </View>

                            <Text style={styles.main1}>FAIZAN DANISH</Text>
                            <Text style={styles.main1}>135701531180</Text>
                            <Text style={styles.main1}>ICICI0000716</Text>
                            <Text style={styles.main1}>Savings</Text>
                            <Text style={styles.main1}>ICICI</Text>
                            <Text style={styles.main1}>OKHLA PHASE-1</Text>

                        </View>
                    )}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '4%' }}>
                        <Text style={styles.account}>Payment time limit</Text>
                        <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%' }} />

                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.9, borderRadius: 8, alignItems: 'center', alignSelf: 'center', flexDirection: 'row', padding: '5%', justifyContent: 'space-between' }}>
                        <Text style={styles.text6}>15 min</Text>
                        <VECTOR_ICONS.AntDesign name={'caretdown'} size={15} color={'#7F8082'} />
                    </TouchableOpacity>




















                </ScrollView>

                <View style={[styles.viewStyle1]}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:'4%' }}>
                    <Text style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: 12,
                        fontWeight: '400',
                    }}>Reserved fee</Text>
                    <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '1.8%', }} />
                    <Text style={[styles.text6,{marginLeft:'4%'}]}>2.24 USDT</Text>
                </View>
                <View style={{ flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center', width: width * 0.9 ,bottom:'4%'}}>

                    <WholeButton1 Label={'Previous'} Action={() => { }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                    <WholeButton1 Label={'Next'} Action={() => {props.navigation.navigate('Setconditions') }} styles={{ width: width * 0.43, padding: '3%', }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SetAmountandmethods

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: '400'
    },
    text6: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500'
    },
    text1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 10,
        fontWeight: '400'
    },
    main: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400',
        marginTop: '10%'

    },
    coin: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '500',

    },
    inrStyle: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400',
        marginTop: '3%',
        marginLeft: '2%'

    },
    main1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400',
        marginTop: '4%'

    },

    account: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        marginVertical: '1.5%'
    },
    viewStyle: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '6%'
    },
    payment: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '600',


    },
    ViewStylew2: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        width: width * 0.9,
        borderWidth: 1.5,
        borderColor: '#3A3D4B',
        // alignSelf: 'flex-start',
        padding: '5%',
        borderRadius: 10,
        marginTop: '8%',
        // margin: 2
    },
    coin6: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: '3%'

    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '4%',
        bottom:"1%"
    },
})