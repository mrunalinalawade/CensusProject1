import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import { VECTOR_ICONS } from '../../assets/Theme';
import COLORS from '../../assets/colors/Colors';


const { height, width } = Dimensions.get('window');
const Systempermissions = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

<View style={styles.mainviewStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.66, }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <VECTOR_ICONS.AntDesign name="arrowleft" size={30} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <Text style={[styles.signStyle1]}>Sounds and Vibration</Text>
                </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:'13%' }}>
            <View>
                <Text style={styles.signStyle1}>Location</Text>
                <Text style={[styles.vibrate, { width: width * 0.9, marginTop: '3%' }]}>Push notifications for news, promotions, and other information</Text>
            </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:'6%' }}>
            <View>
                <Text style={styles.signStyle1}>Camera</Text>
                <Text style={[styles.vibrate, { width: width * 0.9, marginTop: '2%' }]}>For identity verification and code scanning</Text>
            </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:'6%' }}>
            <View>
                <Text style={styles.signStyle1}>Notifications</Text>
                <Text style={[styles.vibrate, { width: width * 0.9, marginTop: '2%' }]}>For pushing services</Text>
            </View>
            </View>
            <TouchableOpacity style={{marginTop:'10%'}}>
            <Text style={[styles.signStyle1,{alignSelf:'center',color:'rgba(47, 158, 214, 1)'}]}>Go to system settings</Text>
            </TouchableOpacity>



            </View>
            </SafeAreaView>
  )
}

export default Systempermissions

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
        marginTop:'4%'
    },
    signStyle1: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',

    },
    vibrate: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '500',
        marginTop: '10%'

    },
})