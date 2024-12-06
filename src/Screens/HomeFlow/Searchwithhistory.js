import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IMAGEPATH, VECTOR_ICONS } from '../../assets/Theme';


const { height, width } = Dimensions.get('window');
const Searchwithhistory = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '4%' }}>
                    <View style={styles.InputViewFiled}>
                        <TouchableOpacity
                            style={{ alignSelf: "center", marginLeft: '4%' }} >
                            <VECTOR_ICONS.AntDesign
                                name="search1"
                                color={"rgba(127, 128, 130, 1)"}
                                size={19}
                            />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Search Coin"
                            style={{
                                width: width * 0.6,
                                color: 'rgba(255, 255, 255, 0.4)',
                                marginLeft: '3%',
                                fontSize: 12, fontWeight: '400'
                            }}
                            placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
                            value={searchQuery}
                            onChangeText={(text) => setSearchQuery(text)}
                        />
                    </View>
                    <Text style={styles.textStyle}>Cancel</Text>
                </View>


                <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '8%' }}>
                    <Text style={styles.historySTyle}>Search history</Text>
                    <TouchableOpacity>
                        <Image source={IMAGEPATH.Delete} style={{ width: 14, height: 18 }} />
                    </TouchableOpacity>

                </View>


                <View style={[styles.USStyle, { marginVertical: '8%', paddingVertical: '3%', }]}>
                    <Text style={styles.textStyle1}>USDT</Text>
                </View>



            </View>
        </SafeAreaView>
    )
}

export default Searchwithhistory

const styles = StyleSheet.create({
    InputViewFiled: {
        backgroundColor: "rgba(42, 43, 47, 1)",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        width: width * 0.7,
        borderRadius: 6, marginLeft: '1%'

    },
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',

    },
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#768C5C'
    },
    historySTyle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)'
    
      },
      USStyle: {
        backgroundColor: '#2A2B2F',
        alignItems: 'center',
        paddingVertical: '12%',
        borderRadius: 7,
        width: width * 0.28,
        marginTop: '2%'
      },
      textStyle1: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500'
      },
})