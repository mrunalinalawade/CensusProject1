import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme'



const { height, width } = Dimensions.get('window');
const SelectCoin = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Select coin'}
                    navigate={() => props.navigation.goBack()} />


                <View style={styles.InputViewFiled}>
                    <TouchableOpacity
                        style={{ alignSelf: "center", marginLeft: '4%' }} >
                        <VECTOR_ICONS.AntDesign
                            name="search1"
                            color={"rgba(127, 128, 130, 1)"}
                            size={18}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search here.."
                        style={{
                            width: width * 0.8,
                            color: 'rgba(127, 128, 130, 1)',
                            marginLeft: '2%'
                        }}
                        placeholderTextColor={"rgba(127, 128, 130, 1)"}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf:'flex-start', width: width * 0.76,justifyContent:'space-between',marginVertical:'5%' }}>
                    <Image source={IMAGEPATH.checking}  style={{ width: 15, height:15, marginTop: '2%' }}  />

                    <Text style={[styles.Text2,{fontSize: 12,}]} >Only show assets on BitTrans supported chains</Text>

                </View>


                <View style={[styles.FlatlistView, { marginTop: '10%' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                        <Image source={IMAGEPATH.BTC} style={{ width: 45, height: 45 }} />
                        <View style={styles.TextView}>
                            <Text style={styles.Text11}>NOT</Text>
                            <Text style={[styles.Text2]} >Notcoin</Text>
                        </View>
                    </View>
                    <View style={[styles.TextView, { alignItems: 'flex-end' }]}>
                        {/* <Text style={styles.Text3}>{item?.item?.price}</Text> */}
                        <Text style={[styles.Text12]} >1</Text>
                    </View>

                </View>
                <View style={styles.FlatlistView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.4 }}>
                        <Image source={IMAGEPATH.Tether} style={{ width: 45, height: 45 }} />
                        <View style={styles.TextView}>
                            <Text style={styles.Text11}>USDT</Text>
                            <Text style={[styles.Text2]} >TetherUS</Text>
                        </View>
                    </View>
                    <View style={[styles.TextView, { alignItems: 'flex-end' }]}>
                        {/* <Text style={styles.Text3}>{item?.item?.price}</Text> */}
                        <Text style={[styles.Text12]} >0.0261657</Text>
                    </View>

                </View>










            </View>
        </SafeAreaView>
    )
}

export default SelectCoin

const styles = StyleSheet.create({
    InputViewFiled: {
        backgroundColor: "rgba(42, 43, 47, 1)",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        width: width * 0.9,
        marginTop: '6%',
        borderRadius: 6, marginLeft: '1%'

    },
    mainviewStyle: {
        justifyContent: 'center',
        width: width * 0.9,
        alignSelf: 'center',
        // marginVertical: '2%',
    },
    FlatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor:'red',
        marginTop: '5%'
    },
    TextView: {
        width: width * 0.23
        // ,backgroundColor:'red'
    },
    Text11: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',

    },
    Text12: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',

    },
    Text2: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '2%'

    },
})