import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../../../assets/Theme';


const { height, width } = Dimensions.get('window');
const BuywiithINR = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    INR={true}
                    navigate={() => props.navigation.goBack()}
                    INRPress={() => { }}
                />
                <Text style={styles.logintext}>Buy crypto</Text>

                <View style={{ flexDirection: 'row', width: width * 0.45, justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center',marginTop:'8%' }}>
                    <Text style={{ width: width * 0.18,backgroundColor:'yellow' ,alignItems:'center',fontSize:65,color:'#fff',}}>0</Text>
                    <Image source={IMAGEPATH.Rupees} style={{ width: 18, height: 18 }} />
                    <TouchableOpacity onPress={props.INRPress} style={{ borderWidth: 1, borderColor: '#343434', padding: '2%', width: width * 0.18, alignItems: 'center', borderRadius: 5, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        <Text style={styles.account1}>INR</Text>

                        <VECTOR_ICONS.AntDesign name={'down'} size={14} color={'#768C5C'} />
                    </TouchableOpacity>
                </View>
























            </View>
        </SafeAreaView>
    )
}

export default BuywiithINR

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '2%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '13%',
        lineHeight: 32.97,
    },
})