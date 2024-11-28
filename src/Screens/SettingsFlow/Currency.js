
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header';
import { VECTOR_ICONS } from '../../assets/Theme';

const { height, width } = Dimensions.get('window');
const Currency = (props) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const Data1 = [{
        id: 1,
        crpto: "USD",

    },
    {
        id: 2,
        crpto: "EUR",

    },
    {
        id: 3,
        crpto: "AUD",

    },
    {
        id: 4,
        crpto: "KRW",

    },
    {
        id: 5,
        crpto: "GBP",

    },
    {
        id: 6,
        crpto: "INR",

    },

    {
        id: 7,
        crpto: "IDR",

    },
    {
        id: 8,
        crpto: "CAD",

    },
    {
        id: 9,
        crpto: "RUB",

    },
    {
        id: 10,
        crpto: "BRL",

    },
    {
        id: 11,
        crpto: "TRY",

    },
    {
        id: 12,
        crpto: "PLN",

    },
    {
        id: 13,
        crpto: "PHP",

    },
    {
        id: 14,
        crpto: "INR",

    },
    ]
    const handleSelectItem = (id) => {
        setSelectedItem(id); // Update the selected item ID
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1D22' }}>

            <View style={styles.mainviewStyle}>
                <Header
                    textlabel={'Currency'}
                    // label4={true}
                    navigate={() => props.navigation.goBack()} />


                <FlatList
                    showsVerticalScrollIndicator={false}


                    data={Data1}
                    style={{ marginVertical: '4%', }}
                    ListEmptyComponent={() => (
                        <Text style={{ color: 'white', fontSize: 16, fontFamily: FONT.semiBold, textAlign: 'center', marginTop: '10%' }}>
                            No Data Found
                        </Text>
                    )}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <TouchableOpacity onPress={() => handleSelectItem(item.id)}><Text style={styles.textStyle1}>{item?.crpto}</Text></TouchableOpacity>

                            {selectedItem === item.id && (
                                <VECTOR_ICONS.AntDesign
                                    name={'check'}
                                    size={20}
                                    color={'#FFFFFF'}
                                />)}

                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export default Currency

const styles = StyleSheet.create({
    mainviewStyle: {
        width: width * 0.9,
        alignSelf: 'center',
    },
    textStyle1: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'flex-start',
    },
    itemContainer: {
        // alignSelf: 'flex-start',
        flexDirection: 'row',
        width: width * 0.9,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center', marginTop: '8%'


    }
})