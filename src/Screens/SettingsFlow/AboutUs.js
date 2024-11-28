import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Header from '../../Components/Header'
import { VECTOR_ICONS } from '../../assets/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';


const { height, width } = Dimensions.get('window');
const AboutUs = (props) => {
    const refRBSheet1 = useRef();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'About us'}
                    // label4={true}
                    navigate={() => props.navigation.goBack()} />
                <View style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
                    <TouchableOpacity onPress={() => { refRBSheet1.current.open() }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Contact Us</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={20} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('Termsofuse')}}style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Terms of use</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={20} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>

                    <TouchableOpacity onPress={()=>{props.navigation.navigate('PrivacyPolicy')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>Privacy policy</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#7F8082'} size={20} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>

                    <TouchableOpacity   onPress={()=>{props.navigation.navigate('System')}} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '3%' }}>
                        <Text style={styles.contact}>App version</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12, fontWeight: '400', right: 6 }}>V 1.0</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <RBSheet
                ref={refRBSheet1}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={200}
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

                    <Text style={styles.logintext1}>Contact us </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '9%' ,width: width * 0.9,}}>
                        <Text style={styles.contact}>WhatsApp</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#FFFFFF'} size={17} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '9%' ,width: width * 0.9,}}>
                        <Text style={styles.contact}>Telegram</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} color={'#FFFFFF'} size={17} />
                    </View>

                    </View>
                    </RBSheet>
        </SafeAreaView>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    mainviewStyle: {
        // justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },
    contact: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400'
    },
    viewStyle: {
        width: width * 0.82,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        marginVertical: '2.5%'
        // right: 16,
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
})