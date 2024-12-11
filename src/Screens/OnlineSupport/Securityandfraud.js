import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Securityandfraud = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header navigate={() => props.navigation.goBack()} />
                <Text style={styles.logintext}>Security and fraud</Text>
                <Text style={styles.Password1}>Select an issue</Text>

                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '8%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'flex-start', marginVertical: '3%', width: width * 0.8, justifyContent: 'space-between' }}>
                        <Text style={styles.Password}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} size={20} color={'rgba(255, 255, 255, 0.4)'} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'flex-start', marginVertical: '3%', width: width * 0.8, justifyContent: 'space-between' }}>
                        <Text style={styles.Password}>Adding money</Text>

                        <VECTOR_ICONS.AntDesign name={'right'} size={20} color={'rgba(255, 255, 255, 0.4)'} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'flex-start', marginVertical: '3%', width: width * 0.8, justifyContent: 'space-between' }}>
                        <Text style={[styles.Password]}>Lorem Ipsum is simply dummy text of the printing?</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} size={20} color={'rgba(255, 255, 255, 0.4)'} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'flex-start', marginVertical: '3%', width: width * 0.8, justifyContent: 'space-between' }}>
                        <Text style={styles.Password}>Adding moneyt</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} size={20} color={'rgba(255, 255, 255, 0.4)'} />
                    </TouchableOpacity>
                    <View style={[styles.viewStyle]}></View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'flex-start', marginVertical: '3%', width: width * 0.8, justifyContent: 'space-between' }}>
                        <Text style={[styles.Password]}>Lorem Ipsum is simply dummy text of the printing?</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} size={20} color={'rgba(255, 255, 255, 0.4)'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'flex-start', marginVertical: '3%', width: width * 0.8, justifyContent: 'space-between' }}>
                        <Text style={[styles.Password]}>Lorem Ipsum is simply dummy text of the printing?</Text>
                        <VECTOR_ICONS.AntDesign name={'right'} size={20} color={'rgba(255, 255, 255, 0.4)'} />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#22232A', padding: '4%', width: width * 0.9, alignSelf: 'center', borderRadius: 8, marginTop: '6%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems:'center', marginVertical: '3%',marginLeft:'5%' }}>
                        <Image source={IMAGEPATH.chat} style={{ width:23, height: 23 }} />
                        <Text style={[styles.Password,{marginLeft: '8%'}]}>Chat with us</Text>
                    </TouchableOpacity>
                    </View>











            </View>
        </SafeAreaView>


    )
}

export default Securityandfraud

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: '2%',
    },
    logintext: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginTop: '10%',
        lineHeight: 32.97,
    },
    Password: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
        width: width * 0.78
        // marginLeft: '10%'

    },
    Password1: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',
        marginTop: '14%',

    }
})