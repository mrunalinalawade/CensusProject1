import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header';
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Support = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Support'}
                    navigate={() => props.navigation.goBack()}
                />
                <TouchableOpacity style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '6%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%',flexDirection:'row',alignItems:'center' }}>
                    <VECTOR_ICONS.AntDesign name={'questioncircle'} color={'#C8CBDC'} size={20} />
                    <Text style={styles.faqs}>Faqs</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'rgba(34, 35, 42, 1)', padding: '6%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '4%',flexDirection:'row',alignItems:'center' }}>
                <Image source={IMAGEPATH.headset}  style={{width:20,height:20}}/>
                    <Text style={styles.faqs}>Online Support</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Support

const styles = StyleSheet.create({
    mainviewStyle: {

        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '2%',
    },
    faqs:{
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'400',
        marginLeft:'4%'
    }
})