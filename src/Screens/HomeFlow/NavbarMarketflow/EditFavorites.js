import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header';
import { IMAGEPATH, VECTOR_ICONS } from '../../../assets/Theme';



const { height, width } = Dimensions.get('window');
const EditFavorites = (props) => {
    const [selected1, setSelected1] = useState('All');
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const filterData = [
        {
            id: 1,
            coin: 'BNB',
            cointype: 'USDT',



        },
        {
            id: 2,
            coin: 'BTC',
            cointype: 'USDT',


        },
        {
            id: 3,
            coin: 'ETH',
            cointype: 'USDT',


        }

    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>
            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Edit Favorites'}
                    navigate={() => props.navigation.goBack()}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.34, alignSelf: 'flex-start', marginTop: '10%' }}>
                    <TouchableOpacity onPress={() => { setSelected1('All') }} style={[styles.inputStyle1, { backgroundColor: selected1 === 'All' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
                        <Text style={[styles.exStyle, selected1 === 'All' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>All</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSelected1('Spot') }}
                        style={[styles.inputStyle1, { backgroundColor: selected1 === 'Spot' ? 'rgba(118, 140, 92, 0.1)' : null }]}>
                        <Text style={[styles.exStyle, selected1 === 'Spot' ? { color: 'rgba(118, 140, 92, 1)' } : { color: 'rgba(255, 255, 255, 0.6)' }]}>Spot</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9, alignSelf: 'center', marginTop: '8%' }}>
                    <Text style={styles.selectedTabText1}>Pair</Text>
                    <Text style={styles.selectedTabText1}>Sort</Text>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filterData}
                    ListEmptyComponent={() => (
                        <Text style={{ color: 'black', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }} >
                            No Data Found
                        </Text>
                    )}
                    renderItem={(item) => (

                        <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: '10%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.29, justifyContent: 'space-between', }}>
                                <TouchableOpacity
                                    style={[
                                        styles.checkboxContainer,
                                        isChecked ? styles.checkboxChecked : "",
                                    ]}
                                    onPress={toggleCheckbox}
                                >
                                    <Image
                                        source={IMAGEPATH.check}
                                        style={{
                                            width: 15,
                                            height: 15,
                                            tintColor: isChecked ? 'rgba(255, 255, 255, 0.6)' : '#1C1D22'
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.selectedTabText}>{item?.item?.coin}</Text>
                                <Text style={[styles.selectedTabText1, { marginLeft: '1%' }]}>/</Text>
                                <Text style={[styles.selectedTabText1, { marginLeft: '1%' }]}>{item?.item?.cointype}</Text>
                            </View>

                            <VECTOR_ICONS.FontAwesome5 name={'equals'} color={'rgba(255, 255, 255, 0.4)'} size={20} />

                        </View>

                    )}
                />
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.29, justifyContent: 'space-between', marginTop: '20%', alignSelf: 'center' }}>
                    <VECTOR_ICONS.AntDesign name={'pluscircle'} size={20} color={'#2F9ED6'} />
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#2F9ED6', marginLeft: '5%' }}>Add Favorites</Text>
                </TouchableOpacity>



                <View style={[styles.viewStyle1]}></View>
                <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center',marginTop:'7%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                        <TouchableOpacity
                            style={[
                                styles.checkboxContainer,
                                isChecked ? styles.checkboxChecked : "",
                            ]}
                            onPress={toggleCheckbox}
                        >
                            <Image
                                source={IMAGEPATH.check}
                                style={{
                                    width: 15,
                                    height: 15,
                                    tintColor: isChecked ? 'rgba(255, 255, 255, 0.6)' : '#1C1D22'
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.selectedTabText5} >Select All</Text>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={IMAGEPATH.Trash} style={{ width: 20, height: 20, }} />
                        <Text style={styles.selectedTabText6}>Remove</Text>






                    </View>
                </View>



            </View>
        </SafeAreaView>

    )
}

export default EditFavorites

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',

    },
    inputStyle1: {
        alignItems: 'center',
        padding: '6%',
        borderRadius: 5,
        // width: width * 0.2,
    },
    exStyle: {
        fontSize: 12,
        fontWeight: '500',
        marginHorizontal: '8%'
    },
    selectedTabText1: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
    },
    checkboxContainer: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,

    },
    checkboxChecked: {
        // backgroundColor: 'white',
    },
    selectedTabText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    selectedTabText1: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
    },
    viewStyle1: {
        width: width,
        backgroundColor: 'rgba(69, 71, 79, 1)',
        height: 1.5,
        right: 16,
        marginTop: height * 0.35

    },
    selectedTabText5: {
        fontSize: 13,
        fontWeight: '400',
        color: '#FFFFFF',
        marginLeft:'4%'
    },
    selectedTabText6: {
        fontSize: 13,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft:'4%'
    },
})