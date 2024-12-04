import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';
import WholeButton1 from '../../Components/WholeButton1';


const { height, width } = Dimensions.get('window');
const Deleteaccount = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Delete account'}
                    navigate={() => props.navigation.goBack()}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={{height:height*0.76}}>
                    <Text style={styles.logintext}>Delete account(**3028)</Text>
                    <Text style={styles.textStyle}>By continuing, you have read and agree to the following</Text>

                    <View style={{ flexDirection: 'row', padding: '2%', marginTop: '8%' }}>
                        <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                        <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 16, fontWeight: '400' }}>All data in your account will be deleted.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: '2%', marginTop: '1%' }}>
                        <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                        <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 16, fontWeight: '400' }}>All APIs in your account will be deleted.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: '2%', marginTop: '1%' }}>
                        <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                        <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 16, fontWeight: '400' }}>You will no longer be able to log in, deposit, withdraw, or trade with your account..</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: '2%', marginTop: '1%' }}>
                        <VECTOR_ICONS.Entypo name={'dot-single'} size={20} color={'rgba(255, 255, 255, 0.6)'} />
                        <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 16, fontWeight: '400' }}>All trading history in your account will be deleted.</Text>
                    </View>

                    <View style={{ marginTop: '10%', justifyContent: 'space-between', width: width * 0.9, backgroundColor: 'rgba(233, 116, 3, 0.1)', borderRadius: 7, padding: '4%', marginVertical: '1%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.8, }}>
                            <Image source={IMAGEPATH.Orange} style={{ width: 20, height: 20, }} />
                            <Text style={styles.account}>1.</Text>
                            <Text style={[styles.account, { width: width * 0.68, color: 'rgba(255, 255, 255, 0.6)' }]}>Account cannot be merged after deletion. If you want to mergeaccount, contact <Text style={[styles.account, { fontWeight: '500', color: '#E97403' }]}>Customer service.</Text></Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.72, alignSelf: 'center', marginLeft: '6%', marginVertical: '2%' }}>
                            <Text style={styles.account}>2.</Text>
                            <Text style={[styles.account, { width: width * 0.68, color: 'rgba(255, 255, 255, 0.6)' }]}>Make sure you delete the deposit address of this account from your wallets to avoid asset losses.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.72, alignSelf: 'center', marginLeft: '6%', marginVertical: '2%' }}>
                            <Text style={styles.account}>3.</Text>
                            <Text style={[styles.account, { width: width * 0.68, color: 'rgba(255, 255, 255, 0.6)' }]}>Make sure you have withdrawal all your assets. Otherwise, you will be deemed to have abandoned al remaining assets in your account. BitTrans is not liable for any assets that you fail to withdraw and lose due to account deletion, and you will not able to claim any type of compensation from bitTrans for such assets.</Text>
                        </View>

                    </View>

                    <Text style={[styles.account, { width: width * 0.89, color: 'rgba(255, 255, 255, 0.6)',alignSelf:'center',marginTop:'4%' }]}>According to current policies, your request will be executed in a few days. For more information, visit <Text style={[styles.account, { fontWeight: '500', color: '#2F9ED6' }]}>Privacy Policy</Text></Text>





                </ScrollView>

                <View style={[styles.viewStyle1,]}></View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%',}}>
            <VECTOR_ICONS.FontAwesome name={'square-o'} color={'#424349'} size={25} />
            <Text style={[styles.tips, { marginLeft: '4%' }]}>I fully understand and accept the consequences.</Text>
          </View>

          <WholeButton1 Label={'Delete account'} Action={()=>{}} styles={{ width: width * 0.9, bottom:'3%',backgroundColor:'rgba(255, 102, 102, 0.1)'}}
          buttonStyle={{color:'#FF6666'}} />

            </View>
        </SafeAreaView>
    )
}

export default Deleteaccount

const styles = StyleSheet.create({
    mainviewStyle: {

        width: width * 0.9,
        alignSelf: 'center',

    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '15%',
        lineHeight: 32.97,
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginTop: '10%',

    },
    account: {
        fontSize: 10,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 20,
        // marginVertical: '1.5%'
    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: '3%',
        // bottom: "5%"
      },
      tips: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: '400',
        marginLeft: '4%',
        lineHeight: 15
      },
})