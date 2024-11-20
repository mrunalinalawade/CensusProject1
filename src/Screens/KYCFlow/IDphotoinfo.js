import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme'
import COLORS from '../../assets/colors/Colors'
import FONTS from '../../assets/Fonts'
import WholeButton1 from '../../Components/WholeButton1'
import Header from '../../Components/Header'

const { height, width } = Dimensions.get('window');

const IDphotoinfo = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={{ flex: 1 }}>

                <View style={styles.mainviewStyle}>
                <Header   navigate={() => props.navigation.goBack()}/>
                    <View style={styles.inputStyle}>
                        <Image source={IMAGEPATH.Identity} style={{ marginTop: '5%', width: 190, height: 150 }} />
                    </View>



                    <Text style={styles.account}>Before taking a photo of your ID card, make sure that</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                        <VECTOR_ICONS.AntDesign name={'check'} size={18} color={'rgba(118, 140, 92, 1)'} />
                        <Text style={styles.account2}>This is your real and it has not expired.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
                        <VECTOR_ICONS.AntDesign name={'check'} size={18} color={'rgba(118, 140, 92, 1)'} />
                        <Text style={styles.account2}>The photo taken is clear, there is no light reflection, and the image is not burry.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
                        <VECTOR_ICONS.AntDesign name={'check'} size={18} color={'rgba(118, 140, 92, 1)'} />
                        <Text style={styles.account2}>Your ID is in good condition and not damaged.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:height*0.2 }}>
                            <Image source={IMAGEPATH.Vector1} style={{height:20,width:16,}} />
                            <Text style={styles.account3}>Rest assured that safeguarding information and ansuring you remain in control of it is our utmost priority,</Text>
                        </View>

                    <WholeButton1 Label={'Next'} Action={() => {props.navigation.navigate('Submitted') }} styles={{ width: width * 0.9 }} />


                </View>

            </View>

        </SafeAreaView>
    )
}

export default IDphotoinfo

const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '6%',
    },
    logoStyle: {
        // marginTop: 84.43,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    inputStyle: {
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: '5%',
        marginTop: '7%',
        borderRadius: 4

    },
    account: {
        fontSize: 20,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)',
        lineHeight: 20,
        marginTop: '10%',

    },
    account2: {
        fontSize: 12,
        // fontFamily: FONTS.Regular,
        fontWeight: '400',
        color: '#FFF',
        lineHeight: 20,
        marginLeft: '4%',

    },
    account3: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        // lineHeight: 20,
        marginLeft: '3%',


    },
})