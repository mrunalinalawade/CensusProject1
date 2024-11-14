import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Addfundoptions = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    INR={true}
                    navigate={() => props.navigation.goBack()}
                    INRPress={() => { }}
                />

                <Text style={styles.logintext}>Add fund</Text>
                <Text style={styles.logintext1}>I don’t have crypto assets</Text>

                <View style={styles.flexStyle}>
                    <Image source={IMAGEPATH.P2Puser} style={{ width: 32, height: 28 }} />
                    <View style={{marginVertical:'2.5%'}}>
                        <Text style={styles.crptoStyle}>P2P Trading</Text>
                        <Text style={styles.signStyle1}>Buy from users. Competitive prices. Local payments</Text>
                    </View>
                </View>


                <View style={[styles.flexStyle,{ marginTop: '2%',}]}>
                    <Image source={IMAGEPATH.BuyINR} style={{ width: 32, height: 33 }} />
                    <View style={{marginVertical:'2.5%'}}>
                        <Text style={styles.crptoStyle}>Buy with INR</Text>
                        <Text style={styles.signStyle1}>Buy from users. Competitive prices. Local payments</Text>
                    </View>
                </View>

                <Text style={styles.logintext1}>I have crypto assets</Text>
                <View style={[styles.flexStyle]}>
                    <Image source={IMAGEPATH.P2Puser} style={{ width: 32, height: 28 }} />
                    <View style={{marginVertical:'2.5%',  width: width * 0.7,}}>
                        <Text style={styles.crptoStyle}>Deposit Crypto</Text>
                        <Text style={styles.signStyle1}>Send crypto to your BitTrans account</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Addfundoptions

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
    logintext1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        marginTop: '13%',

    },
    flexStyle: {
        flexDirection: 'row',
        marginTop: '9%',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: '#2A2B2F',

        borderRadius: 5,
        padding: '4%',
        marginVertical: '3%'
    },
    signStyle1: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 18,
        marginTop: '2.5%',

    },
    crptoStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        // marginTop: '1%',

    }
})