import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import Header from '../../Components/Header'
import WholeButton1 from '../../Components/WholeButton1';
// import CheckBox from 'react-native-check-box'

const { height, width } = Dimensions.get('window');
const Setconditions = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    // Add={true}
                    textlabel={'Support'}
                    navigate={() => props.navigation.goBack()}
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: '3%' }} >
                    <Image source={IMAGEPATH.line4} style={{ width: '99%', height: 27, marginTop: '15%', alignSelf: 'center' }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                        <Text style={styles.text}>Set Type & Price</Text>
                        <Text style={styles.text1}>Set Amount & Method</Text>
                        <Text style={styles.text1}>Set Conditions</Text>
                    </View>
                    <Text style={styles.main}>Terms Tags (Optional)</Text>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.9, borderRadius: 8, alignItems: 'center', alignSelf: 'center', flexDirection: 'row', padding: '4%', justifyContent: 'space-between', marginTop: '4%' }}>
                        <View style={{ backgroundColor: '#4B4D52', alignItems: 'center', padding: '2%', borderRadius: 6, flexDirection: 'row' }}>
                            <Text style={styles.coin6}>Payment Receipt Required </Text>

                            <VECTOR_ICONS.AntDesign name={'close'} color={'rgba(255, 255, 255, 0.6)'} size={20} />
                        </View>
                        <VECTOR_ICONS.AntDesign name={'caretdown'} size={15} color={'#7F8082'} />
                    </TouchableOpacity>

                    <Text style={styles.main}>Terms (Optional)</Text>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.9, height: height * 0.2, borderRadius: 8, alignSelf: 'center', flexDirection: 'row', padding: '4%', justifyContent: 'space-between', marginTop: '4%' }}>
                        <Text style={styles.main3}>Terms will be displayed to the counterparty</Text>
                    </View>

                    <View style={[styles.viewStyle1, { marginTop: '12%', }]}></View>
                    <Text style={styles.payment}>Payment Method</Text>
                    <Text style={styles.main1}>Adding counterparty requirements will reduce the exposure of your Ad</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.55, justifyContent: 'space-between', marginTop: '5%' }}>
                        {/* <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => {
                                this.setState({
                                    isChecked: !this.state.isChecked
                                })
                            }}
                            isChecked={this.state.isChecked}
                            leftText={"CheckBox"}
                        /> */}
                        <Text style={styles.text6}>Registered</Text>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '3%', alignItems: 'center', borderRadius: 7 }}><Text style={[styles.text6, { marginHorizontal: '6%', borderRadius: 10 }]}>0</Text></View>

                        <Text style={styles.coin6}>day(s) ago</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.65, justifyContent: 'space-between', marginTop: '4%' }}>
                        {/* <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => {
                                this.setState({
                                    isChecked: !this.state.isChecked
                                })
                            }}
                            isChecked={this.state.isChecked}
                            leftText={"CheckBox"}
                        /> */}
                        <Text style={styles.text6}>Registered</Text>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '3%', alignItems: 'center', borderRadius: 7 }}><Text style={[styles.text6, { marginHorizontal: '6%', borderRadius: 10 }]}>0.01</Text></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.coin6}>BTC  </Text>
                            <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '2%', }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.31, justifyContent: 'space-between', marginTop: '6%' }}>
                        {/* <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => {
                                this.setState({
                                    isChecked: !this.state.isChecked
                                })
                            }}
                            isChecked={this.state.isChecked}
                            leftText={"CheckBox"}
                        /> */}
                        <Text style={styles.text6}>Non-merchant</Text>
                        <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '2%', }} />
                    </View>

                    <View style={[styles.viewStyle1, { marginTop: '12%', }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.40, justifyContent: 'space-between', marginTop: '2%' }}>
                      
                        <Text style={styles.text6}>Available Region(s)</Text>
                        <Image source={IMAGEPATH.Square} style={{ width: 15, height: 15, marginLeft: '2%', }} />
                    </View>

                    <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', width: width * 0.9, borderRadius: 8, alignItems: 'center', alignSelf: 'center', flexDirection: 'row', padding: '5%', justifyContent: 'space-between',marginTop:'5%' }}>
                        <Text style={styles.text6}>All Region(s)</Text>
                        <VECTOR_ICONS.AntDesign name={'caretdown'} size={15} color={'#7F8082'} />
                    </TouchableOpacity>
                    <Text style={[styles.payment,{ marginTop:'7%'}]}>Status</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:'6%' }}>
                        <Image source={IMAGEPATH.Online} style={{width:20,height:20}} />
                        <Text style={[styles.coin6,{marginLeft:'4%',}]}>Online</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:'5%' }}>
                        <VECTOR_ICONS.FontAwesome name={'square-o'} color={'#424349'} size={22} />
                        <Text style={[styles.coin6,{marginLeft:'4%'}]}>Offline now. Publish manually later.</Text>
                    </View>












                </ScrollView>

                <View style={[styles.viewStyle1,{marginBottom:'24%'}]}></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width * 0.9, bottom: '32%' }}>

                    <WholeButton1 Label={'Previous'} Action={() => {props.navigation.goBack() }} styles={{ width: width * 0.43, padding: '3%', backgroundColor: 'rgba(36, 38, 42, 1)', }} />
                    <WholeButton1 Label={'Next'} Action={() => {props.navigation.navigate('AdSuccessfullyPosted') }} styles={{ width: width * 0.43, padding: '3%', }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Setconditions

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
    main3: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 12,
        fontWeight: '400',


    },
    coin6: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '500'

    },
    payment: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '600',
        marginTop: '4%'


    },
    main1: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400',
        marginTop: '2%',
        lineHeight: 17

    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '4%',
        bottom: "1%"
    },
})